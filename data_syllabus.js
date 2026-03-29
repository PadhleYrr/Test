// ═══════════════════════════════════════════════════════════════
//  MPPSC COMPLETE SYLLABUS — Paper 1 (GS), Paper 2 (CSAT), Paper 3 (MP GK)
// ═══════════════════════════════════════════════════════════════

const SYLLABUS = {
  paper1: {
    name: "Paper 1 — General Studies",
    nameHi: "पेपर 1 — सामान्य अध्ययन",
    icon: "📘",
    subjects: [
      {
        id: "p1_history", name: "History of India", nameHi: "भारत का इतिहास", icon: "🏛️",
        topics: [
          {id:"p1h1",name:"Ancient India",nameHi:"प्राचीन भारत",subtopics:["Indus Valley Civilization","Vedic Period","Maurya Empire","Gupta Empire","Buddhism & Jainism","Sangam Age"]},
          {id:"p1h2",name:"Medieval India",nameHi:"मध्यकालीन भारत",subtopics:["Delhi Sultanate","Mughal Empire","Bhakti & Sufi Movement","Vijayanagar Empire","Maratha Empire"]},
          {id:"p1h3",name:"Modern India",nameHi:"आधुनिक भारत",subtopics:["British East India Company","1857 Revolt","Indian National Congress","Gandhi Era","Independence Movement","Post-Independence"]},
          {id:"p1h4",name:"Art & Culture",nameHi:"कला एवं संस्कृति",subtopics:["Indian Architecture","Paintings","Music & Dance","Literature","Festivals","UNESCO Sites"]}
        ]
      },
      {
        id: "p1_geography", name: "Geography", nameHi: "भूगोल", icon: "🌍",
        topics: [
          {id:"p1g1",name:"Physical Geography",nameHi:"भौतिक भूगोल",subtopics:["Universe & Solar System","Earth Structure","Plate Tectonics","Weathering & Erosion","Atmosphere","Climatology"]},
          {id:"p1g2",name:"Indian Geography",nameHi:"भारत का भूगोल",subtopics:["Physiographic Divisions","River Systems","Climate","Soil Types","Natural Vegetation","Agriculture"]},
          {id:"p1g3",name:"World Geography",nameHi:"विश्व भूगोल",subtopics:["Continents","Oceans","Major Rivers","Climate Zones","Population Distribution"]},
          {id:"p1g4",name:"Economic Geography",nameHi:"आर्थिक भूगोल",subtopics:["Minerals","Industries","Transport","Trade","Urbanization"]}
        ]
      },
      {
        id: "p1_polity", name: "Indian Polity", nameHi: "भारतीय राजव्यवस्था", icon: "⚖️",
        topics: [
          {id:"p1p1",name:"Constitution",nameHi:"संविधान",subtopics:["Preamble","Fundamental Rights","DPSP","Fundamental Duties","Amendment Process","Schedules"]},
          {id:"p1p2",name:"Union Government",nameHi:"केंद्र सरकार",subtopics:["President","Parliament","Supreme Court","PM & Council of Ministers","CAG","Attorney General"]},
          {id:"p1p3",name:"State Government",nameHi:"राज्य सरकार",subtopics:["Governor","State Legislature","High Court","CM & Council","Panchayati Raj","Municipalities"]},
          {id:"p1p4",name:"Governance",nameHi:"शासन",subtopics:["Election Commission","UPSC","Finance Commission","NITI Aayog","RTI","Judicial Review"]}
        ]
      },
      {
        id: "p1_economy", name: "Economy", nameHi: "अर्थव्यवस्था", icon: "💰",
        topics: [
          {id:"p1e1",name:"Indian Economy Basics",nameHi:"भारतीय अर्थव्यवस्था",subtopics:["GDP & Growth","Five Year Plans","NITI Aayog","Budget","Fiscal Policy","Monetary Policy"]},
          {id:"p1e2",name:"Banking & Finance",nameHi:"बैंकिंग एवं वित्त",subtopics:["RBI","Commercial Banks","NABARD","SEBI","Insurance","Financial Inclusion"]},
          {id:"p1e3",name:"Agriculture",nameHi:"कृषि",subtopics:["Green Revolution","Irrigation","MSP","Crop Insurance","Land Reforms","Agricultural Marketing"]},
          {id:"p1e4",name:"Industry & Trade",nameHi:"उद्योग एवं व्यापार",subtopics:["Industrial Policy","Make in India","FDI","WTO","SEZ","GST"]}
        ]
      },
      {
        id: "p1_science", name: "Science & Technology", nameHi: "विज्ञान एवं प्रौद्योगिकी", icon: "🔬",
        topics: [
          {id:"p1s1",name:"Physics",nameHi:"भौतिक विज्ञान",subtopics:["Mechanics","Heat & Thermodynamics","Optics","Electricity","Modern Physics","Nuclear Physics"]},
          {id:"p1s2",name:"Chemistry",nameHi:"रसायन विज्ञान",subtopics:["Periodic Table","Chemical Bonding","Acids Bases Salts","Carbon Compounds","Metals & Non-Metals","Everyday Chemistry"]},
          {id:"p1s3",name:"Biology",nameHi:"जीव विज्ञान",subtopics:["Cell Biology","Human Body","Diseases","Genetics","Ecology","Biotechnology"]},
          {id:"p1s4",name:"Technology",nameHi:"प्रौद्योगिकी",subtopics:["Space Technology (ISRO)","Defence Technology","IT & Computers","Nanotechnology","AI & Robotics","Nuclear Technology"]}
        ]
      },
      {
        id: "p1_environment", name: "Environment", nameHi: "पर्यावरण", icon: "🌿",
        topics: [
          {id:"p1en1",name:"Ecology",nameHi:"पारिस्थितिकी",subtopics:["Ecosystem","Food Chain","Biodiversity","Biomes","Wetlands","Coral Reefs"]},
          {id:"p1en2",name:"Pollution",nameHi:"प्रदूषण",subtopics:["Air Pollution","Water Pollution","Soil Pollution","Noise Pollution","Nuclear Pollution","Waste Management"]},
          {id:"p1en3",name:"Conservation",nameHi:"संरक्षण",subtopics:["National Parks","Wildlife Sanctuaries","Biosphere Reserves","Project Tiger","Ramsar Sites","UNESCO Heritage"]},
          {id:"p1en4",name:"Climate Change",nameHi:"जलवायु परिवर्तन",subtopics:["Global Warming","Ozone Depletion","Paris Agreement","SDGs","Renewable Energy","Carbon Footprint"]}
        ]
      },
      {
        id: "p1_current", name: "Current Affairs", nameHi: "समसामयिकी", icon: "📰",
        topics: [
          {id:"p1c1",name:"National Events",nameHi:"राष्ट्रीय घटनाएं",subtopics:["Government Schemes","Awards & Honours","Sports","Appointments","Summits","Reports"]},
          {id:"p1c2",name:"International",nameHi:"अंतर्राष्ट्रीय",subtopics:["UN & Agencies","India's Foreign Policy","International Agreements","Global Organizations","Geopolitics"]},
          {id:"p1c3",name:"Science Updates",nameHi:"विज्ञान अपडेट्स",subtopics:["Space Missions","Medical Breakthroughs","Technology Innovations","Defence Updates"]},
          {id:"p1c4",name:"Economy Updates",nameHi:"आर्थिक अपडेट्स",subtopics:["Budget Highlights","Banking Changes","Trade Agreements","Economic Indicators"]}
        ]
      }
    ]
  },
  paper2: {
    name: "Paper 2 — CSAT",
    nameHi: "पेपर 2 — सीसैट",
    icon: "🧮",
    subjects: [
      {
        id: "p2_comprehension", name: "Comprehension", nameHi: "बोधगम्यता", icon: "📖",
        topics: [
          {id:"p2c1",name:"Reading Comprehension",nameHi:"पठन बोध",subtopics:["Passage Analysis","Inference","Tone & Style","Summary"]},
          {id:"p2c2",name:"Interpersonal Skills",nameHi:"अंतर्वैयक्तिक कौशल",subtopics:["Communication","Leadership","Empathy","Teamwork"]}
        ]
      },
      {
        id: "p2_logical", name: "Logical Reasoning", nameHi: "तार्किक योग्यता", icon: "🧩",
        topics: [
          {id:"p2l1",name:"Verbal Reasoning",nameHi:"शाब्दिक तर्क",subtopics:["Analogies","Classification","Series","Blood Relations","Direction","Coding-Decoding"]},
          {id:"p2l2",name:"Non-Verbal Reasoning",nameHi:"अशाब्दिक तर्क",subtopics:["Pattern Recognition","Mirror Image","Paper Folding","Figure Series","Embedded Figures"]},
          {id:"p2l3",name:"Analytical Reasoning",nameHi:"विश्लेषणात्मक तर्क",subtopics:["Syllogism","Statement & Assumption","Statement & Conclusion","Cause & Effect","Course of Action"]}
        ]
      },
      {
        id: "p2_quant", name: "Quantitative Aptitude", nameHi: "गणितीय योग्यता", icon: "📐",
        topics: [
          {id:"p2q1",name:"Number System",nameHi:"संख्या पद्धति",subtopics:["HCF & LCM","Fractions","Simplification","Number Properties"]},
          {id:"p2q2",name:"Arithmetic",nameHi:"अंकगणित",subtopics:["Percentage","Profit & Loss","Simple & Compound Interest","Ratio & Proportion","Time & Work","Speed & Distance"]},
          {id:"p2q3",name:"Data Interpretation",nameHi:"आंकड़ा विश्लेषण",subtopics:["Tables","Bar Graphs","Pie Charts","Line Graphs","Mixed DI"]},
          {id:"p2q4",name:"Geometry & Mensuration",nameHi:"ज्यामिति एवं क्षेत्रमिति",subtopics:["Triangles","Circles","Areas & Volumes","Coordinate Geometry"]}
        ]
      },
      {
        id: "p2_decision", name: "Decision Making", nameHi: "निर्णय क्षमता", icon: "🎯",
        topics: [
          {id:"p2d1",name:"Decision Making",nameHi:"निर्णय लेना",subtopics:["Administrative Decisions","Ethical Dilemmas","Priority Setting","Resource Allocation"]},
          {id:"p2d2",name:"Problem Solving",nameHi:"समस्या समाधान",subtopics:["Identifying Problems","Root Cause Analysis","Alternative Solutions","Implementation"]}
        ]
      },
      {
        id: "p2_hindi", name: "Hindi Language", nameHi: "हिंदी भाषा", icon: "🔤",
        topics: [
          {id:"p2h1",name:"Grammar",nameHi:"व्याकरण",subtopics:["Sandhi","Samas","Upsarg-Pratyay","Vakya Shuddhi","Muhavare","Lokoktiyan"]},
          {id:"p2h2",name:"Comprehension",nameHi:"गद्यांश",subtopics:["Hindi Passage","Paraphrase","Hindi to English","Summary Writing"]}
        ]
      }
    ]
  },
  paper3: {
    name: "Paper 3 — MP Special GK",
    nameHi: "पेपर 3 — मध्य प्रदेश विशेष",
    icon: "🏛️",
    subjects: [
      {
        id: "p3_mpgk", name: "MP General Knowledge", nameHi: "म.प्र. सामान्य ज्ञान", icon: "📚",
        topics: [
          {id:"p3g1",name:"MP Parichay",nameHi:"म.प्र. परिचय",subtopics:["Formation","Area","Borders","Districts","Sambhag","Nicknames"]},
          {id:"p3g2",name:"MP Geography",nameHi:"म.प्र. भूगोल",subtopics:["Rivers","Mountains","Plateaus","Climate","Soil","Minerals"]},
          {id:"p3g3",name:"MP History",nameHi:"म.प्र. इतिहास",subtopics:["Ancient Sites","Dynasties","Freedom Movement","Post-Independence"]},
          {id:"p3g4",name:"MP Economy",nameHi:"म.प्र. अर्थव्यवस्था",subtopics:["Agriculture","Industries","Budget","Schemes","Tourism"]},
          {id:"p3g5",name:"MP Polity",nameHi:"म.प्र. राजव्यवस्था",subtopics:["State Legislature","Local Government","Elections","Administration"]},
          {id:"p3g6",name:"MP Culture",nameHi:"म.प्र. संस्कृति",subtopics:["Tribes","Art & Craft","Festivals","Folk Dance","Literature"]},
          {id:"p3g7",name:"MP Symbols",nameHi:"म.प्र. प्रतीक",subtopics:["State Animal","State Bird","State Tree","State Flower","State Sport"]},
          {id:"p3g8",name:"MP Current Affairs",nameHi:"म.प्र. समसामयिकी",subtopics:["CM Schemes","New Districts","Awards","Sports","Development"]}
        ]
      }
    ]
  }
};

// Total topic count for display
function countSyllabusTopics() {
  let total = 0;
  Object.values(SYLLABUS).forEach(paper => {
    paper.subjects.forEach(subj => {
      total += subj.topics.length;
    });
  });
  return total;
}
