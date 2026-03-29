// ═══════════════════════════════════════════════════════════════
//  Paper 1 — General Studies MCQs (500+ questions)
// ═══════════════════════════════════════════════════════════════

const Q_PAPER1 = [
  // ── HISTORY — Ancient India ──
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Indus Valley Civilization ki sabse badi visheshta kya thi?",o:["Loha ka upyog","Nagari niyojan (Town Planning)","Ashwa palan","Vedic rituals"],a:1,n:"IVC was known for advanced town planning with grid pattern, drainage system, and granaries.",d:1},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Harappa sabhyata ka kaal kya tha?",o:["3300-1300 BCE","2500-1500 BCE","1500-500 BCE","500 BCE-300 CE"],a:0,n:"Indus Valley Civilization (3300-1300 BCE), mature phase 2600-1900 BCE.",d:1},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Mohenjo-daro ka arth kya hai?",o:["Purana shahar","Mriton ka teela","Nadi ka kinara","Raja ka mahal"],a:1,n:"Mohenjo-daro means 'Mound of the Dead' in Sindhi. Located in Pakistan's Sindh province.",d:1},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Vedic kaal mein sabse pracheentam Veda kaun sa hai?",o:["Samaveda","Yajurveda","Atharvaveda","Rigveda"],a:3,n:"Rigveda is the oldest (1500-1200 BCE). Contains 1028 suktas in 10 mandalas.",d:1},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Chandragupta Maurya ka pradhan mantri kaun tha?",o:["Chanakya","Megasthenes","Ashoka","Bindusara"],a:0,n:"Chanakya (Kautilya/Vishnugupta) was PM. Author of Arthashastra.",d:2},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Ashoka ne Kalinga yuddh kab lada?",o:["261 BCE","326 BCE","321 BCE","185 BCE"],a:0,n:"Kalinga War 261 BCE. 1 lakh+ killed. Ashoka adopted Buddhism after this.",d:2},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Gupta kaal ko kya kaha jaata hai?",o:["Iron Age","Stone Age","Suvarna Yug (Golden Age)","Silver Age"],a:2,n:"Gupta Period (320-550 CE) = Golden Age of India. Science, art, literature flourished.",d:1},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Buddha ne apna pratham updesh kahan diya?",o:["Bodh Gaya","Kushinagar","Sarnath","Lumbini"],a:2,n:"First sermon (Dhammachakkapavattana Sutta) at Sarnath, Varanasi. Called 'Dharma Chakra Pravartan'.",d:2},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Mahavira Jain dharm ke kitne Tirthankara the?",o:["22nd","23rd","24th","25th"],a:2,n:"Mahavira was the 24th and last Tirthankara. First was Rishabhadeva.",d:1},
  {c:"Ancient India",p:"paper1",t:"p1h1",q:"Sangam sahitya kis bhasha mein likha gaya?",o:["Sanskrit","Pali","Tamil","Prakrit"],a:2,n:"Sangam Literature in Tamil. Three Sangams held at Madurai. Covers 300 BCE-300 CE.",d:2},

  // ── HISTORY — Medieval India ──
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Delhi Sultanate ka pehla Sultan kaun tha?",o:["Iltutmish","Qutubuddin Aibak","Razia Sultan","Balban"],a:1,n:"Qutubuddin Aibak (1206-1210). Founded Slave/Mamluk Dynasty. Built Qutub Minar.",d:1},
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Mughal samrajya ka sansthapak kaun tha?",o:["Humayun","Akbar","Babur","Shah Jahan"],a:2,n:"Babur founded Mughal Empire in 1526 after Battle of Panipat. Defeated Ibrahim Lodi.",d:1},
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Akbar ne Din-i-Ilahi dharm ki sthapana kab ki?",o:["1556","1575","1582","1605"],a:2,n:"Din-i-Ilahi (1582). Syncretic religion. Only Birbal converted from Hindus.",d:2},
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Taj Mahal ka nirman kisne karwaya?",o:["Akbar","Jahangir","Shah Jahan","Aurangzeb"],a:2,n:"Shah Jahan (1632-1653). In memory of Mumtaz Mahal. Architect: Ustad Ahmad Lahori.",d:1},
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Bhakti Andolan ke pramukh sant kaun the?",o:["Kabir, Ramananda, Chaitanya","Ashoka, Chanakya","Marx, Lenin","Newton, Galileo"],a:0,n:"Bhakti saints: Kabir, Ramananda, Chaitanya Mahaprabhu, Mirabai, Tulsidas, Surdas.",d:1},
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Vijayanagar samrajya ki sthapana kisne ki?",o:["Krishnadevaraya","Harihara & Bukka","Deva Raya","Rama Raya"],a:1,n:"Harihara & Bukka (1336). Capital: Hampi. Greatest ruler: Krishnadevaraya.",d:2},
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Shivaji Maharaj ne kis samrajya ki sthapana ki?",o:["Mughal","Maratha","Vijayanagar","Ahom"],a:1,n:"Maratha Empire (1674). Capital: Raigad. Coronation 6 June 1674. Father: Shahaji Bhosale.",d:1},
  {c:"Medieval India",p:"paper1",t:"p1h2",q:"Panipat ka teesra yuddh kab hua?",o:["1526","1556","1761","1857"],a:2,n:"Third Battle of Panipat (1761). Marathas vs Ahmad Shah Abdali. Marathas lost.",d:2},

  // ── HISTORY — Modern India ──
  {c:"Modern India",p:"paper1",t:"p1h3",q:"East India Company Bharat mein kab aayi?",o:["1498","1600","1757","1857"],a:1,n:"East India Company chartered 1600. First factory at Surat (1613). Masulipatnam (1611).",d:1},
  {c:"Modern India",p:"paper1",t:"p1h3",q:"1857 ka vidroh kahan se shuru hua?",o:["Delhi","Kanpur","Meerut","Lucknow"],a:2,n:"Started 10 May 1857 at Meerut. Mangal Pandey fired first shot at Barrackpore (29 March).",d:1},
  {c:"Modern India",p:"paper1",t:"p1h3",q:"Indian National Congress ki sthapana kab hui?",o:["1857","1885","1905","1920"],a:1,n:"INC founded 28 Dec 1885 at Bombay. A.O. Hume. First president: W.C. Bonnerjee.",d:1},
  {c:"Modern India",p:"paper1",t:"p1h3",q:"Jallianwala Bagh hatyakand kab hua?",o:["13 April 1919","15 August 1947","26 January 1950","8 August 1942"],a:0,n:"13 April 1919, Amritsar. General Dyer ordered firing. 379+ killed (official). Udham Singh took revenge.",d:1},
  {c:"Modern India",p:"paper1",t:"p1h3",q:"Mahatma Gandhi ne Dandi March kab kiya?",o:["1920","1930","1942","1947"],a:1,n:"12 March - 6 April 1930. Sabarmati to Dandi (385 km). Salt Law violation. Civil Disobedience Movement.",d:1},
  {c:"Modern India",p:"paper1",t:"p1h3",q:"Quit India Movement kab shuru hua?",o:["1930","1940","1942","1946"],a:2,n:"8 August 1942. 'Do or Die' slogan. Gandhi arrested. Aruna Asaf Ali hoisted flag at Gowalia Tank.",d:2},
  {c:"Modern India",p:"paper1",t:"p1h3",q:"Bharat ka vibhajan kis yojna ke tahat hua?",o:["Cripps Mission","Cabinet Mission","Mountbatten Plan","Simon Commission"],a:2,n:"Mountbatten Plan (3 June 1947). Indian Independence Act passed 18 July 1947. Independence 15 Aug 1947.",d:2},
  {c:"Modern India",p:"paper1",t:"p1h3",q:"Subhash Chandra Bose ne INA ki sthapana kahan ki?",o:["Japan","Singapore","Germany","Burma"],a:1,n:"INA (Azad Hind Fauj) reorganized in Singapore (1943). Originally by Rash Behari Bose. 'Delhi Chalo' slogan.",d:2},

  // ── GEOGRAPHY ──
  {c:"Indian Geography",p:"paper1",t:"p1g2",q:"Bharat ka kshetrafal kitna hai?",o:["32.87 lakh sq km","22.87 lakh sq km","42.87 lakh sq km","28.87 lakh sq km"],a:0,n:"India = 32.87 lakh sq km. 7th largest country. 2.4% of world area.",d:1},
  {c:"Indian Geography",p:"paper1",t:"p1g2",q:"Bharat ki sabse lambi nadi kaun si hai?",o:["Yamuna","Godavari","Narmada","Ganga"],a:3,n:"Ganga (2525 km). Originates from Gangotri glacier. Meets Bay of Bengal.",d:1},
  {c:"Indian Geography",p:"paper1",t:"p1g2",q:"Bharat ka sabse ooncha shikhar kaun sa hai?",o:["Nanda Devi","Kanchenjunga","K2","Kangchenjunga"],a:2,n:"K2 (8611m) in PoK is highest in India's territory. Kanchenjunga (8586m) is highest in India proper.",d:3},
  {c:"Indian Geography",p:"paper1",t:"p1g2",q:"Dakshin Bharat ki sabse lambi nadi kaun si hai?",o:["Krishna","Kaveri","Narmada","Godavari"],a:3,n:"Godavari (1465 km). Called 'Dakshin ki Ganga'. Originates from Nashik, Maharashtra.",d:1},
  {c:"Indian Geography",p:"paper1",t:"p1g2",q:"Bharat mein kitni jalvayu zone hain?",o:["4","5","6","7"],a:2,n:"6 climate zones: Tropical Wet, Tropical Dry, Subtropical Humid, Mountain, Arid, Semi-Arid.",d:2},
  {c:"Physical Geography",p:"paper1",t:"p1g1",q:"Prithvi ki aayu kitni hai?",o:["3.5 billion years","4.6 billion years","5.2 billion years","2.8 billion years"],a:1,n:"Earth is 4.6 billion years old. Formed from solar nebula. Oldest rocks: 4.28 billion years.",d:1},
  {c:"Physical Geography",p:"paper1",t:"p1g1",q:"Vaayumandal mein sabse adhik gais kaun si hai?",o:["Oxygen","Carbon Dioxide","Nitrogen","Argon"],a:2,n:"Nitrogen 78%. Oxygen 21%. Argon 0.93%. CO2 0.04%.",d:1},
  {c:"Physical Geography",p:"paper1",t:"p1g1",q:"Ozone parath vaayumandal ke kis parath mein hai?",o:["Troposphere","Stratosphere","Mesosphere","Thermosphere"],a:1,n:"Ozone layer in Stratosphere (15-35 km). Protects from UV-B radiation.",d:2},

  // ── POLITY ──
  {c:"Indian Constitution",p:"paper1",t:"p1p1",q:"Bharat ka Samvidhan kab lagoo hua?",o:["15 August 1947","26 November 1949","26 January 1950","2 October 1950"],a:2,n:"Adopted 26 Nov 1949. Enforced 26 Jan 1950. Republic Day. Drafted by Constituent Assembly.",d:1},
  {c:"Indian Constitution",p:"paper1",t:"p1p1",q:"Samvidhan Sabha ke adhyaksh kaun the?",o:["Jawaharlal Nehru","B.R. Ambedkar","Rajendra Prasad","Sardar Patel"],a:2,n:"Dr. Rajendra Prasad = President of Constituent Assembly. B.R. Ambedkar = Chairman of Drafting Committee.",d:1},
  {c:"Indian Constitution",p:"paper1",t:"p1p1",q:"Mool Adhikaar (Fundamental Rights) kis bhag mein hain?",o:["Part II","Part III","Part IV","Part V"],a:1,n:"Part III (Articles 12-35). 6 Fundamental Rights. Right to Property removed (44th Amendment 1978).",d:1},
  {c:"Indian Constitution",p:"paper1",t:"p1p1",q:"Niti Nirdeshak Tatva kis desh ke samvidhan se liye gaye?",o:["USA","UK","Ireland","Japan"],a:2,n:"DPSP from Ireland (Article 36-51). Part IV. Not justiciable. Gandhian, Socialist, Liberal principles.",d:2},
  {c:"Indian Constitution",p:"paper1",t:"p1p1",q:"Bharat ke Samvidhan mein kitni anusoochiyaan hain?",o:["8","10","12","14"],a:2,n:"Originally 8 Schedules. Now 12 Schedules. 8th Schedule: 22 languages.",d:2},
  {c:"Union Government",p:"paper1",t:"p1p2",q:"Bharat ka Rashtrapati kaise chuna jaata hai?",o:["Jan vote se","MP vote se","Electoral College","Rajya Sabha"],a:2,n:"Electoral College: Elected MPs of both Houses + Elected MLAs of all states + Delhi & Puducherry.",d:2},
  {c:"Union Government",p:"paper1",t:"p1p2",q:"Rajya Sabha ke kitne sadasya hain?",o:["545","250","543","552"],a:1,n:"Max 250 members. 238 elected + 12 nominated by President. 1/3 retire every 2 years. Term: 6 years.",d:1},
  {c:"Union Government",p:"paper1",t:"p1p2",q:"Lok Sabha ke kitne sadasya hain?",o:["545","543","552","530"],a:0,n:"Max 552 (530 states + 20 UTs + 2 Anglo-Indians). Current: 543 elected. Term: 5 years.",d:1},
  {c:"State Government",p:"paper1",t:"p1p3",q:"Rajyapal ki niyukti kaun karta hai?",o:["Pradhan Mantri","Rashtrapati","Mukhya Mantri","Lok Sabha"],a:1,n:"Governor appointed by President. Not elected. Holds office during pleasure of President.",d:1},

  // ── ECONOMY ──
  {c:"Indian Economy",p:"paper1",t:"p1e1",q:"Bharat ki GDP mein sabse bada yogdaan kis kshetra ka hai?",o:["Agriculture","Industry","Services","Mining"],a:2,n:"Services sector ~55% of GDP. Agriculture ~17%. Industry ~28%. India = service-led economy.",d:1},
  {c:"Indian Economy",p:"paper1",t:"p1e1",q:"GST kab lagoo hua?",o:["1 April 2016","1 July 2017","1 January 2018","1 April 2019"],a:1,n:"GST: 1 July 2017. 'One Nation One Tax'. 101st Constitutional Amendment. Replaces 17 taxes.",d:1},
  {c:"Indian Economy",p:"paper1",t:"p1e1",q:"RBI ki sthapana kab hui?",o:["1930","1935","1947","1950"],a:1,n:"RBI established 1 April 1935. HQ: Mumbai. Nationalized 1949. Current Governor: check latest.",d:1},
  {c:"Indian Economy",p:"paper1",t:"p1e1",q:"NITI Aayog ki sthapana kab hui?",o:["1950","2000","2014","2015"],a:3,n:"NITI Aayog: 1 January 2015. Replaced Planning Commission. Chairman: PM. CEO appointed.",d:2},
  {c:"Banking & Finance",p:"paper1",t:"p1e2",q:"NABARD ka full form kya hai?",o:["National Bank for Agriculture","National Bank for Agriculture and Rural Development","National Board of Agriculture","None"],a:1,n:"NABARD: National Bank for Agriculture and Rural Development. Est. 1982. Apex for rural credit.",d:1},
  {c:"Banking & Finance",p:"paper1",t:"p1e2",q:"SEBI ki sthapana kab hui?",o:["1988","1992","1996","2000"],a:0,n:"SEBI established 12 April 1988 (statutory: 1992). Regulates securities market. HQ: Mumbai.",d:2},

  // ── SCIENCE ──
  {c:"Science",p:"paper1",t:"p1s1",q:"Prakash ki chaal kitni hai?",o:["3×10⁶ m/s","3×10⁸ m/s","3×10⁵ m/s","3×10¹⁰ m/s"],a:1,n:"Speed of light = 3×10⁸ m/s (approx 300,000 km/s) in vacuum.",d:1},
  {c:"Science",p:"paper1",t:"p1s1",q:"Newton ka teesra niyam kya hai?",o:["F=ma","Jadata ka niyam","Har kriya ki pratkriya","Gravitational law"],a:2,n:"Newton's Third Law: Every action has an equal and opposite reaction.",d:1},
  {c:"Science",p:"paper1",t:"p1s2",q:"pH scale mein 7 ka matlab kya hai?",o:["Amliya","Kshariya","Udaasin (Neutral)","Prachand Amliya"],a:2,n:"pH 7 = Neutral. Below 7 = Acidic. Above 7 = Basic/Alkaline. Pure water = pH 7.",d:1},
  {c:"Science",p:"paper1",t:"p1s3",q:"DNA ka full form kya hai?",o:["Di Nucleic Acid","Deoxyribo Nucleic Acid","Dynamic Nuclear Acid","None"],a:1,n:"DNA = Deoxyribonucleic Acid. Double helix structure. Discovered by Watson & Crick (1953).",d:1},
  {c:"Science",p:"paper1",t:"p1s3",q:"Manav sharir mein kitni haddiyan hain?",o:["186","206","256","306"],a:1,n:"206 bones in adult human. Baby has ~270 (some fuse). Smallest: Stapes (ear). Largest: Femur.",d:1},
  {c:"Science",p:"paper1",t:"p1s4",q:"ISRO ki sthapana kab hui?",o:["1962","1969","1972","1980"],a:1,n:"ISRO: 15 August 1969. Founded by Vikram Sarabhai. HQ: Bengaluru. Launch: SHAR, Sriharikota.",d:1},
  {c:"Science",p:"paper1",t:"p1s4",q:"Chandrayaan-3 kab safal hua?",o:["2019","2021","2023","2024"],a:2,n:"Chandrayaan-3: 23 August 2023. Soft landed on Moon's South Pole. India = 4th country.",d:1},

  // ── ENVIRONMENT ──
  {c:"Environment",p:"paper1",t:"p1en1",q:"Bharat mein kitne National Parks hain?",o:["95","104","106","112"],a:2,n:"106 National Parks in India (as of 2024). First: Jim Corbett (1936). Largest: Hemis (Ladakh).",d:2},
  {c:"Environment",p:"paper1",t:"p1en3",q:"Project Tiger kab shuru hua?",o:["1969","1972","1973","1980"],a:2,n:"Project Tiger: 1 April 1973. First 9 reserves. Jim Corbett = first Tiger Reserve.",d:1},
  {c:"Environment",p:"paper1",t:"p1en4",q:"Paris Agreement kab hua?",o:["2012","2015","2018","2020"],a:1,n:"Paris Agreement: 12 Dec 2015 (COP21). Goal: limit warming to 1.5°C. 196 parties signed.",d:2},
  {c:"Environment",p:"paper1",t:"p1en1",q:"Sabse bada Biosphere Reserve Bharat mein kaun sa hai?",o:["Nilgiri","Gulf of Mannar","Rann of Kutch","Great Rann of Kutch"],a:2,n:"Rann of Kutch (Gujarat) is the largest Biosphere Reserve in India.",d:2},

  // ── ART & CULTURE ──
  {c:"Art & Culture",p:"paper1",t:"p1h4",q:"Bharatnatyam kis rajya ka classical dance hai?",o:["Kerala","Karnataka","Tamil Nadu","Andhra Pradesh"],a:2,n:"Bharatnatyam: Tamil Nadu. Other classical: Kathakali (Kerala), Kathak (UP), Odissi (Odisha), Manipuri, Kuchipudi (AP), Mohiniyattam (Kerala), Sattriya (Assam).",d:1},
  {c:"Art & Culture",p:"paper1",t:"p1h4",q:"Konark ka Surya Mandir kis rajya mein hai?",o:["Rajasthan","Madhya Pradesh","Odisha","Gujarat"],a:2,n:"Konark Sun Temple: Odisha. Built by Narasimhadeva I (1255). UNESCO World Heritage Site.",d:1},
  {c:"Art & Culture",p:"paper1",t:"p1h4",q:"Bharat mein kitne UNESCO World Heritage Sites hain?",o:["32","37","42","52"],a:2,n:"42 UNESCO World Heritage Sites in India (as of 2024). 34 Cultural + 7 Natural + 1 Mixed.",d:2}
];
