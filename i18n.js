// ═══════════════════════════════════════════════════════════════
//  BILINGUAL (HINDI + ENGLISH) — i18n System
// ═══════════════════════════════════════════════════════════════

const i18n = {
  currentLang: localStorage.getItem('mpgk_lang') || 'en',
  
  strings: {
    // Navigation
    'dashboard': { en: 'Dashboard', hi: 'डैशबोर्ड' },
    'notes': { en: 'Study Notes', hi: 'अध्ययन नोट्स' },
    'flashcards': { en: 'Flashcards', hi: 'फ्लैशकार्ड' },
    'mcq_test': { en: 'MCQ Test', hi: 'MCQ टेस्ट' },
    'daily_10': { en: 'Daily 10', hi: 'दैनिक 10' },
    'timed_mock': { en: 'Timed Mock', hi: 'समयबद्ध मॉक' },
    'pyq_papers': { en: 'PYQ Papers', hi: 'पिछले वर्ष के प्रश्न' },
    'map_quiz': { en: 'Map Quiz', hi: 'मानचित्र प्रश्नोत्तरी' },
    'weak_areas': { en: 'Weak Areas', hi: 'कमजोर क्षेत्र' },
    'my_progress': { en: 'My Progress', hi: 'मेरी प्रगति' },
    'support_us': { en: 'Support Us', hi: 'हमें सहयोग करें' },
    'syllabus': { en: 'Full Syllabus', hi: 'पूर्ण पाठ्यक्रम' },
    'bookmarks': { en: 'Bookmarks', hi: 'बुकमार्क' },
    'study_plan': { en: 'Study Plan', hi: 'अध्ययन योजना' },
    'srs_review': { en: 'Smart Review', hi: 'स्मार्ट रिव्यू' },
    'analytics': { en: 'Analytics', hi: 'विश्लेषण' },
    'current_affairs': { en: 'Current Affairs', hi: 'समसामयिकी' },
    'settings': { en: 'Settings', hi: 'सेटिंग्स' },
    
    // Sections
    'study': { en: 'Study', hi: 'अध्ययन' },
    'practice': { en: 'Practice', hi: 'अभ्यास' },
    'resources': { en: 'Resources', hi: 'संसाधन' },
    'smart_features': { en: 'Smart Features', hi: 'स्मार्ट सुविधाएं' },
    
    // Dashboard
    'questions_attempted': { en: 'Questions Attempted', hi: 'प्रयास किए गए प्रश्न' },
    'overall_accuracy': { en: 'Overall Accuracy', hi: 'समग्र सटीकता' },
    'study_streak': { en: 'Study Streak', hi: 'अध्ययन स्ट्रीक' },
    'day_streak': { en: 'day streak', hi: 'दिन की स्ट्रीक' },
    'correct_answer_rate': { en: 'correct answer rate', hi: 'सही उत्तर दर' },
    'days_in_row': { en: 'days in a row', hi: 'लगातार दिन' },
    'chapter_progress': { en: 'Chapter Progress', hi: 'अध्याय प्रगति' },
    'practice_all': { en: 'Practice All →', hi: 'सभी अभ्यास करें →' },
    'study_heatmap': { en: 'Study Heatmap — Last 6 months', hi: 'अध्ययन हीटमैप — पिछले 6 महीने' },
    'todays_daily': { en: "Today's Daily 10 🎯", hi: 'आज के दैनिक 10 🎯' },
    'start_now': { en: 'Start Now →', hi: 'अभी शुरू करें →' },
    'srs_due_today': { en: 'Smart Review Due', hi: 'स्मार्ट रिव्यू बाकी' },
    'questions_to_review': { en: 'questions to review today', hi: 'आज रिव्यू करने हैं' },
    'rank_prediction': { en: 'Rank Prediction', hi: 'रैंक अनुमान' },
    'time_invested': { en: 'Time Invested', hi: 'निवेश किया समय' },
    
    // Test
    'select_paper': { en: 'Select Paper', hi: 'पेपर चुनें' },
    'select_test_mode': { en: 'Select Test Mode', hi: 'टेस्ट मोड चुनें' },
    'full_test': { en: 'Full Test', hi: 'पूर्ण टेस्ट' },
    'start_test': { en: 'Start Test →', hi: 'टेस्ट शुरू करें →' },
    'filter_by_chapter': { en: 'Filter by Chapter', hi: 'अध्याय द्वारा फ़िल्टर' },
    'select_all': { en: 'Select All', hi: 'सभी चुनें' },
    'negative_marking': { en: 'Negative Marking', hi: 'नकारात्मक अंकन' },
    'correct_answer': { en: 'Correct Answer', hi: 'सही उत्तर' },
    'your_answer': { en: 'Your Answer', hi: 'आपका उत्तर' },
    'next': { en: 'Next →', hi: 'अगला →' },
    'skip': { en: 'Skip', hi: 'छोड़ें' },
    'reveal': { en: 'Reveal Answer', hi: 'उत्तर देखें' },
    'bookmark_q': { en: '🔖 Bookmark', hi: '🔖 बुकमार्क' },
    'bookmarked': { en: '🔖 Bookmarked', hi: '🔖 बुकमार्क किया' },
    
    // Results
    'test_complete': { en: 'Test Complete!', hi: 'टेस्ट पूर्ण!' },
    'correct': { en: 'Correct', hi: 'सही' },
    'wrong': { en: 'Wrong', hi: 'गलत' },
    'skipped': { en: 'Skipped', hi: 'छोड़ा' },
    'accuracy': { en: 'Accuracy', hi: 'सटीकता' },
    'time_taken': { en: 'Time', hi: 'समय' },
    'retake': { en: 'Retake Test', hi: 'दोबारा टेस्ट' },
    'review_answers': { en: 'Review Answers', hi: 'उत्तर देखें' },
    
    // Misc
    'less': { en: 'Less', hi: 'कम' },
    'more': { en: 'More', hi: 'अधिक' },
    'search': { en: 'Search...', hi: 'खोजें...' },
    'language': { en: 'Language', hi: 'भाषा' },
    'english': { en: 'English', hi: 'अंग्रेज़ी' },
    'hindi': { en: 'हिन्दी', hi: 'हिन्दी' },
    'of_total': { en: 'of {n} total', hi: 'कुल {n} में से' },
    'qs': { en: 'qs', hi: 'प्रश्न' },
    'done': { en: 'done', hi: 'पूर्ण' },
    'cards_selected': { en: 'cards selected', hi: 'कार्ड चुने गए' },
    'paper1_name': { en: 'Paper 1 — General Studies', hi: 'पेपर 1 — सामान्य अध्ययन' },
    'paper2_name': { en: 'Paper 2 — CSAT', hi: 'पेपर 2 — सीसैट' },
    'paper3_name': { en: 'Paper 3 — MP Special GK', hi: 'पेपर 3 — म.प्र. विशेष' },
    'all_papers': { en: 'All Papers', hi: 'सभी पेपर' }
  },
  
  t: function(key, vars) {
    const str = this.strings[key];
    if (!str) return key;
    let result = str[this.currentLang] || str['en'] || key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        result = result.replace('{' + k + '}', v);
      });
    }
    return result;
  },
  
  setLang: function(lang) {
    this.currentLang = lang;
    localStorage.setItem('mpgk_lang', lang);
    // Refresh current page
    if (typeof refreshUI === 'function') refreshUI();
  },
  
  toggle: function() {
    this.setLang(this.currentLang === 'en' ? 'hi' : 'en');
  }
};
