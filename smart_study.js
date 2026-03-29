// ═══════════════════════════════════════════════════════════════
//  SMART STUDY ENGINE — Spaced Repetition + Adaptive + Bookmarks + Planner
// ═══════════════════════════════════════════════════════════════

// ── SPACED REPETITION SYSTEM (SRS) ────────────────────────────
// Leitner box system: Wrong answers come back at 1, 3, 7, 14, 30 days
const SRS = {
  intervals: [1, 3, 7, 14, 30], // days
  
  getReviewQueue: function() {
    const today = new Date().toDateString();
    const srsData = JSON.parse(localStorage.getItem('mpgk_srs') || '{}');
    const queue = [];
    
    Object.entries(srsData).forEach(([qHash, data]) => {
      if (!data.nextReview) return;
      const reviewDate = new Date(data.nextReview);
      if (reviewDate <= new Date()) {
        queue.push({ hash: qHash, ...data });
      }
    });
    
    // Sort by urgency (oldest overdue first)
    queue.sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview));
    return queue;
  },
  
  recordAnswer: function(question, isCorrect) {
    const hash = this.hashQ(question.q);
    const srsData = JSON.parse(localStorage.getItem('mpgk_srs') || '{}');
    const entry = srsData[hash] || { box: 0, attempts: 0, correct: 0, q: question.q, c: question.c };
    
    entry.attempts++;
    if (isCorrect) {
      entry.correct++;
      entry.box = Math.min(entry.box + 1, this.intervals.length - 1);
    } else {
      entry.box = 0; // Reset to box 0 on wrong answer
    }
    
    const daysUntilReview = this.intervals[entry.box];
    const next = new Date();
    next.setDate(next.getDate() + daysUntilReview);
    entry.nextReview = next.toISOString();
    entry.lastReview = new Date().toISOString();
    
    srsData[hash] = entry;
    localStorage.setItem('mpgk_srs', JSON.stringify(srsData));
    return entry;
  },
  
  getStats: function() {
    const srsData = JSON.parse(localStorage.getItem('mpgk_srs') || '{}');
    const entries = Object.values(srsData);
    const dueToday = this.getReviewQueue().length;
    const mastered = entries.filter(e => e.box >= 4).length;
    const learning = entries.filter(e => e.box > 0 && e.box < 4).length;
    const newWrong = entries.filter(e => e.box === 0).length;
    return { total: entries.length, dueToday, mastered, learning, newWrong };
  },
  
  hashQ: function(q) {
    let hash = 0;
    for (let i = 0; i < q.length; i++) {
      const char = q.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return 'q' + Math.abs(hash);
  }
};

// ── ADAPTIVE DIFFICULTY ────────────────────────────────────────
const AdaptiveEngine = {
  // d: 1=easy, 2=medium, 3=hard
  getUserLevel: function(chapter) {
    const hist = appState.history.filter(h => h.ch === chapter);
    if (hist.length < 5) return 1; // Not enough data, start easy
    const recent = hist.slice(-20);
    const accuracy = recent.filter(h => h.c).length / recent.length;
    if (accuracy >= 0.8) return 3; // High accuracy → harder questions
    if (accuracy >= 0.5) return 2; // Medium
    return 1; // Low accuracy → easier
  },
  
  getAdaptivePool: function(questions, chapter) {
    const level = this.getUserLevel(chapter);
    // Prioritize questions at user's level, include some above/below
    const atLevel = questions.filter(q => (q.d || 1) === level);
    const belowLevel = questions.filter(q => (q.d || 1) < level);
    const aboveLevel = questions.filter(q => (q.d || 1) > level);
    
    // 60% at level, 20% below, 20% above
    const pool = [];
    const shuffled = arr => [...arr].sort(() => Math.random() - 0.5);
    pool.push(...shuffled(atLevel).slice(0, Math.ceil(questions.length * 0.6)));
    pool.push(...shuffled(belowLevel).slice(0, Math.ceil(questions.length * 0.2)));
    pool.push(...shuffled(aboveLevel).slice(0, Math.ceil(questions.length * 0.2)));
    
    return shuffled(pool);
  }
};

// ── BOOKMARKS ─────────────────────────────────────────────────
const Bookmarks = {
  get: function() {
    return JSON.parse(localStorage.getItem('mpgk_bookmarks') || '[]');
  },
  
  toggle: function(question) {
    const bookmarks = this.get();
    const hash = SRS.hashQ(question.q);
    const idx = bookmarks.findIndex(b => b.hash === hash);
    
    if (idx >= 0) {
      bookmarks.splice(idx, 1);
    } else {
      bookmarks.push({
        hash,
        q: question.q,
        c: question.c,
        o: question.o,
        a: question.a,
        n: question.n,
        savedAt: new Date().toISOString()
      });
    }
    
    localStorage.setItem('mpgk_bookmarks', JSON.stringify(bookmarks));
    return idx < 0; // true if added, false if removed
  },
  
  isBookmarked: function(question) {
    const hash = SRS.hashQ(question.q);
    return this.get().some(b => b.hash === hash);
  },
  
  getCount: function() {
    return this.get().length;
  }
};

// ── STUDY PLANNER ──────────────────────────────────────────────
const StudyPlanner = {
  getDefaultPlan: function() {
    return JSON.parse(localStorage.getItem('mpgk_studyplan') || 'null') || this.generatePlan();
  },
  
  generatePlan: function() {
    const today = new Date();
    const plan = [];
    const allSubjects = [];
    
    // Gather all subjects from syllabus
    Object.values(SYLLABUS).forEach(paper => {
      paper.subjects.forEach(subj => {
        allSubjects.push({ id: subj.id, name: subj.name, nameHi: subj.nameHi, paper: paper.name });
      });
    });
    
    // Create 30-day plan
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const dayNum = i + 1;
      const subjIdx = i % allSubjects.length;
      const subj = allSubjects[subjIdx];
      
      // Every 7th day = revision day
      if (dayNum % 7 === 0) {
        plan.push({
          day: dayNum,
          date: date.toISOString(),
          type: 'revision',
          title: 'Revision Day',
          titleHi: 'पुनरावृत्ति दिवस',
          tasks: [
            { type: 'srs', label: 'Complete SRS Review Queue', labelHi: 'SRS रिव्यू पूरा करें' },
            { type: 'mock', label: 'Take 50Q Mock Test', labelHi: '50 प्रश्न मॉक टेस्ट' },
            { type: 'weak', label: 'Practice Weak Areas', labelHi: 'कमजोर क्षेत्रों का अभ्यास' }
          ]
        });
      } else {
        plan.push({
          day: dayNum,
          date: date.toISOString(),
          type: 'study',
          title: subj.name,
          titleHi: subj.nameHi,
          subject: subj.id,
          tasks: [
            { type: 'notes', label: 'Read ' + subj.name + ' notes', labelHi: subj.nameHi + ' नोट्स पढ़ें' },
            { type: 'quiz', label: '25 MCQs on ' + subj.name, labelHi: subj.nameHi + ' पर 25 MCQ' },
            { type: 'flashcard', label: 'Flashcards review', labelHi: 'फ्लैशकार्ड रिव्यू' }
          ]
        });
      }
    }
    
    localStorage.setItem('mpgk_studyplan', JSON.stringify(plan));
    return plan;
  },
  
  markTaskDone: function(dayIdx, taskIdx) {
    const plan = this.getDefaultPlan();
    if (!plan[dayIdx] || !plan[dayIdx].tasks[taskIdx]) return;
    plan[dayIdx].tasks[taskIdx].done = true;
    localStorage.setItem('mpgk_studyplan', JSON.stringify(plan));
    return plan;
  },
  
  getDayProgress: function(dayIdx) {
    const plan = this.getDefaultPlan();
    if (!plan[dayIdx]) return 0;
    const tasks = plan[dayIdx].tasks;
    const done = tasks.filter(t => t.done).length;
    return Math.round(done / tasks.length * 100);
  }
};

// ── PERFORMANCE ANALYTICS ──────────────────────────────────────
const Analytics = {
  getChapterAccuracy: function(chapter) {
    const hist = appState.history.filter(h => h.ch === chapter);
    if (hist.length === 0) return 0;
    return Math.round(hist.filter(h => h.c).length / hist.length * 100);
  },
  
  getDailyStats: function(days) {
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(Date.now() - i * 86400000).toDateString();
      const dayHist = appState.history.filter(h => h.date === date);
      result.push({
        date,
        label: new Date(Date.now() - i * 86400000).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' }),
        total: dayHist.length,
        correct: dayHist.filter(h => h.c).length,
        accuracy: dayHist.length > 0 ? Math.round(dayHist.filter(h => h.c).length / dayHist.length * 100) : 0
      });
    }
    return result;
  },
  
  getPaperWiseStats: function() {
    const allQ = [...Q, ...(typeof Q_PAPER1 !== 'undefined' ? Q_PAPER1 : []), ...(typeof Q_PAPER2 !== 'undefined' ? Q_PAPER2 : [])];
    const papers = {};
    appState.history.forEach(h => {
      const q = allQ.find(qq => qq.q === h.q);
      const paper = q ? (q.p || 'paper3') : 'paper3';
      if (!papers[paper]) papers[paper] = { total: 0, correct: 0 };
      papers[paper].total++;
      if (h.c) papers[paper].correct++;
    });
    return papers;
  },
  
  getRankPrediction: function() {
    const hist = appState.history;
    if (hist.length < 50) return null;
    const accuracy = hist.filter(h => h.c).length / hist.length * 100;
    // Rough prediction based on accuracy
    if (accuracy >= 85) return { rank: '1-50', label: 'Top Ranker 🏆', color: '#FFD700' };
    if (accuracy >= 75) return { rank: '51-200', label: 'Selection Zone ✅', color: '#15803D' };
    if (accuracy >= 65) return { rank: '201-500', label: 'Competitive Zone 💪', color: '#1A237E' };
    if (accuracy >= 50) return { rank: '500-1000', label: 'Needs Improvement 📚', color: '#D97706' };
    return { rank: '1000+', label: 'More Practice Needed ⚡', color: '#DC2626' };
  },
  
  getTimeSpent: function() {
    // Estimate from questions answered (avg 45 sec per question)
    const totalQ = appState.history.length;
    const totalMin = Math.round(totalQ * 0.75); // 45 sec = 0.75 min
    const hours = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    return { totalMin, display: hours > 0 ? hours + 'h ' + mins + 'm' : mins + ' min' };
  }
};
