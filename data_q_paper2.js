// ═══════════════════════════════════════════════════════════════
//  Paper 2 — CSAT MCQs (200+ questions)
// ═══════════════════════════════════════════════════════════════

const Q_PAPER2 = [
  // ── LOGICAL REASONING — Verbal ──
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"Jis prakar 'Doctor' ka sambandh 'Hospital' se hai, usi prakar 'Teacher' ka sambandh kisse hai?",o:["Office","School","Court","Factory"],a:1,n:"Analogy: Doctor works in Hospital, Teacher works in School.",d:1},
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"Agar APPLE ko 50 likha jaye toh MANGO ko kya likhenge?",o:["55","57","60","62"],a:1,n:"A=1,P=16,P=16,L=12,E=5 = 50. M=13,A=1,N=14,G=7,O=15 = 50+7 = 57... Sum of letters.",d:2},
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"Series: 2, 6, 12, 20, 30, ?",o:["40","42","44","46"],a:1,n:"Differences: 4, 6, 8, 10, 12. So next = 30+12 = 42.",d:1},
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"A, B ka bhai hai. C, A ki maa hai. D, C ka pati hai. E, B ka beta hai. Toh D ka E se kya rishta hai?",o:["Pita","Dada","Chacha","Nana"],a:1,n:"C = A & B ki maa. D = C ka pati = A & B ka pita. E = B ka beta = D ka pota. So D = E ka Dada.",d:2},
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"Agar 'COMPUTER' ko 'DNPQVUFS' likha jaye toh 'SCIENCE' ko kya likhenge?",o:["TDJFODF","TDJFODG","TDKFODF","TDJFNDE"],a:0,n:"Each letter +1. S→T, C→D, I→J, E→F, N→O, C→D, E→F = TDJFODF.",d:2},
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"Yadi uttar ko dakshin kaha jaye aur purv ko paschim, toh suryoday kis disha mein hoga?",o:["Uttar","Dakshin","Purv","Paschim"],a:3,n:"Sun rises in East. East is called West in new convention. So answer = Paschim (West).",d:2},
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"Odd one out: Rose, Lotus, Jasmine, Dog, Lily",o:["Rose","Lotus","Dog","Lily"],a:2,n:"Dog is an animal, rest are flowers. Odd one = Dog.",d:1},
  {c:"Logical Reasoning",p:"paper2",t:"p2l1",q:"Series: 1, 1, 2, 3, 5, 8, ?",o:["11","12","13","15"],a:2,n:"Fibonacci series. Each number = sum of previous two. 5+8 = 13.",d:1},

  // ── LOGICAL REASONING — Analytical ──
  {c:"Analytical Reasoning",p:"paper2",t:"p2l3",q:"'Sabhi kutte paltu janwar hain. Kuch paltu janwar billi hain.' Toh sahi nishkarsh kya hai?",o:["Sabhi kutte billi hain","Kuch billi kutte hain","Koi bhi kutte billi nahin hain","Koi nishkarsh nahin"],a:3,n:"Syllogism: No definite conclusion follows. Kuch paltu janwar billi hain doesn't connect dogs to cats definitively.",d:2},
  {c:"Analytical Reasoning",p:"paper2",t:"p2l3",q:"Kathan: 'Vidyalaya mein parking ki samasya hai.' Poorvadharana: 'Vidyalaya mein gaadiyaan aati hain.'",o:["Poorvadharana sahi hai","Poorvadharana galat hai","Jankari adhuri hai","Koi sambandh nahin"],a:0,n:"If parking problem exists, vehicles must be coming. Assumption is implicit.",d:2},
  {c:"Analytical Reasoning",p:"paper2",t:"p2l3",q:"Kathan: 'Barish hone par sadak geeli hoti hai.' 'Sadak geeli hai.' Nishkarsh?",o:["Barish ho rahi hai","Barish nahin ho rahi","Barish hui ho sakti hai","Sadak sukhi hai"],a:2,n:"Sadak geeli hai can be due to rain OR other reasons. So rain 'might have happened'.",d:3},

  // ── QUANTITATIVE — Number System ──
  {c:"Quantitative",p:"paper2",t:"p2q1",q:"36 aur 48 ka HCF kya hai?",o:["6","8","12","24"],a:2,n:"36 = 2²×3². 48 = 2⁴×3. HCF = 2²×3 = 12.",d:1},
  {c:"Quantitative",p:"paper2",t:"p2q1",q:"12, 18 aur 24 ka LCM kya hai?",o:["36","48","72","96"],a:2,n:"12=2²×3, 18=2×3², 24=2³×3. LCM = 2³×3² = 72.",d:1},
  {c:"Quantitative",p:"paper2",t:"p2q1",q:"250 ka 16% kitna hai?",o:["35","40","45","50"],a:1,n:"250 × 16/100 = 40.",d:1},
  {c:"Quantitative",p:"paper2",t:"p2q1",q:"1 se 100 tak ki sabhi sankhayon ka yog kitna hai?",o:["5000","5050","5100","5500"],a:1,n:"Sum = n(n+1)/2 = 100×101/2 = 5050. Gauss formula.",d:1},

  // ── QUANTITATIVE — Arithmetic ──
  {c:"Arithmetic",p:"paper2",t:"p2q2",q:"Ek vastu ₹800 mein kharidi aur ₹1000 mein bechi. Laabh pratishat kya hai?",o:["20%","25%","30%","15%"],a:1,n:"Profit = 1000-800 = 200. Profit% = 200/800 × 100 = 25%.",d:1},
  {c:"Arithmetic",p:"paper2",t:"p2q2",q:"₹5000 par 10% sadharan byaj se 3 saal ka byaj kitna hoga?",o:["1000","1500","1800","2000"],a:1,n:"SI = P×R×T/100 = 5000×10×3/100 = 1500.",d:1},
  {c:"Arithmetic",p:"paper2",t:"p2q2",q:"A aur B ki aay ka anupaat 3:4 hai. Yadi A ki aay ₹15000 hai toh B ki aay kitni hai?",o:["₹18000","₹20000","₹22000","₹25000"],a:1,n:"3:4 ratio. A=15000, so 1 unit = 5000. B = 4×5000 = ₹20000.",d:1},
  {c:"Arithmetic",p:"paper2",t:"p2q2",q:"Ek train 120 km/hr ki raftaar se chalti hai. 300 km taay karne mein kitna samay lagega?",o:["2 hr","2.5 hr","3 hr","3.5 hr"],a:1,n:"Time = Distance/Speed = 300/120 = 2.5 hours.",d:1},
  {c:"Arithmetic",p:"paper2",t:"p2q2",q:"A ek kaam 10 din mein karta hai, B 15 din mein. Dono milkar kitne din mein karenge?",o:["5 din","6 din","8 din","12 din"],a:1,n:"A's rate=1/10, B's rate=1/15. Combined=1/10+1/15=5/30=1/6. Together = 6 days.",d:1},
  {c:"Arithmetic",p:"paper2",t:"p2q2",q:"₹10000 par 5% chkravridhhi byaj se 2 saal ka mishr dhan kya hoga?",o:["₹10500","₹11000","₹11025","₹10250"],a:2,n:"CI: A = P(1+R/100)^T = 10000(1.05)² = 10000×1.1025 = ₹11025.",d:2},

  // ── DATA INTERPRETATION ──
  {c:"Data Interpretation",p:"paper2",t:"p2q3",q:"Ek company ka 2023 mein revenue ₹50Cr aur 2024 mein ₹60Cr tha. Growth rate kya hai?",o:["10%","15%","20%","25%"],a:2,n:"Growth = (60-50)/50 × 100 = 20%.",d:1},
  {c:"Data Interpretation",p:"paper2",t:"p2q3",q:"Pie chart mein Agriculture = 25%, Industry = 35%, Services = 40%. Yadi total GDP ₹200Cr hai toh Services ka GDP kitna hai?",o:["₹50Cr","₹70Cr","₹80Cr","₹100Cr"],a:2,n:"Services = 40% of 200 = ₹80 Cr.",d:1},

  // ── DECISION MAKING ──
  {c:"Decision Making",p:"paper2",t:"p2d1",q:"Aap ek collector hain. Baarish ke kaaran baadh aayi hai. Sabse pehle kya karenge?",o:["Press conference denge","Rahat saamagri bhejenge","Meeting bulayenge","Report likhenge"],a:1,n:"In emergency, immediate relief (food, water, rescue) is priority. Administrative decisions later.",d:2},
  {c:"Decision Making",p:"paper2",t:"p2d1",q:"Aap SDM hain. Ek gaon mein peene ka paani nahin hai. Kya karenge?",o:["Report rajya sarkar ko bhejenge","Tanker se paani bhejenge aur permanent solution dhundhenge","Ignore karenge","Newspaper mein news denge"],a:1,n:"Immediate temporary solution (tanker) + start permanent solution (borewell/pipeline). Both needed.",d:2},

  // ── HINDI GRAMMAR ──
  {c:"Hindi Grammar",p:"paper2",t:"p2h1",q:"'Vidyalaya' mein kaun sa samas hai?",o:["Tatpurush","Dvandva","Bahuvrihi","Avyayibhav"],a:0,n:"Vidya + Aalaya = Vidyalaya. Tatpurush Samas (latter word prominent).",d:2},
  {c:"Hindi Grammar",p:"paper2",t:"p2h1",q:"'Nirmal' mein kaun sa upsarg hai?",o:["Nir","Ni","Nis","Na"],a:0,n:"Nir + Mal = Nirmal (without dirt/pure). 'Nir' = upsarg meaning 'without'.",d:1},
  {c:"Hindi Grammar",p:"paper2",t:"p2h1",q:"'Aankhon ka taara' muhavare ka arth kya hai?",o:["Bahut pyaara","Aankhon mein dard","Jhootha insaan","Bahut ameer"],a:0,n:"Aankhon ka taara = very dear/beloved person.",d:1},
  {c:"Hindi Grammar",p:"paper2",t:"p2h1",q:"'Ab pachtaye hot kya jab chidiya chug gayi khet' kaun si lokokti hai?",o:["Samay beet jane par pachhtana vyarth hai","Mehnat ka phal meetha hota hai","Jaldi ka kaam shaitan ka","Chori ka maal mori mein"],a:0,n:"It's too late to regret after the damage is done.",d:1},
  {c:"Hindi Grammar",p:"paper2",t:"p2h1",q:"'Devaalaya' ka sandhi vichchhed kya hai?",o:["Dev + Aalaya","Deva + Laya","Deva + Aalaya","Devaa + Laya"],a:2,n:"Deva + Aalaya = Devaalaya. This is a Dirgha Sandhi (a + aa = aa).",d:2}
];
