/* =========================================================
   temples.js  -  Trilingual content data (English / मराठी / हिंदी)
   Every user-facing text is an object { en, mr, hi }.
   Order of TEMPLES follows the traditional Ashtavinayak yatra.
   ========================================================= */

const TEMPLES = [
  {
    id: "morgaon", order: 1, lat: 18.2836, lng: 74.3347, visitMin: 60, fromPune: 65, district: "pune",
    name: { en: "Shri Mayureshwar Ganpati Temple", mr: "श्री मयूरेश्वर गणपती मंदिर", hi: "श्री मयूरेश्वर गणपति मंदिर" },
    deity: { en: "Mayureshwar", mr: "मयूरेश्वर", hi: "मयूरेश्वर" },
    village: { en: "Morgaon", mr: "मोरगाव", hi: "मोरगांव" },
    districtName: { en: "Pune", mr: "पुणे", hi: "पुणे" },
    location: {
      en: "Morgaon, Baramati taluka, Pune district, on the bank of the Karha river.",
      mr: "मोरगाव, बारामती तालुका, पुणे जिल्हा; करा नदीच्या काठावर.",
      hi: "मोरगांव, बारामती तालुका, पुणे ज़िला; करहा नदी के किनारे."
    },
    short: {
      en: "The first temple of the yatra, where Ganesha is worshipped as Mayureshwar, the rider of the peacock.",
      mr: "यात्रेतील पहिले मंदिर; येथे गणपतीची मोरावर आरूढ मयूरेश्वर रूपात पूजा होते.",
      hi: "यात्रा का पहला मंदिर, जहाँ गणेशजी की पूजा मोर पर सवार मयूरेश्वर के रूप में होती है."
    },
    significance: {
      en: "Tradition says the Ashtavinayak yatra begins and ends at Morgaon. Devotees believe Mayureshwar removes obstacles and blesses new beginnings.",
      mr: "परंपरेनुसार अष्टविनायक यात्रेची सुरुवात आणि सांगता मोरगावात होते. मयूरेश्वर विघ्ने दूर करतो आणि नव्या कामाला यश देतो, अशी भाविकांची श्रद्धा आहे.",
      hi: "परंपरा के अनुसार अष्टविनायक यात्रा मोरगांव से शुरू होकर यहीं पूरी होती है. भक्तों का विश्वास है कि मयूरेश्वर बाधाएँ दूर करते हैं और नए कार्य को सफलता देते हैं."
    },
    history: {
      en: "Morgaon has been a centre of Ganesha worship for centuries. The saint Moraya Gosavi of Chinchwad was a great devotee of Mayureshwar, and later rulers and Peshwa-era patrons supported the temple.",
      mr: "मोरगाव हे शतकानुशतके गणेशभक्तीचे केंद्र आहे. चिंचवडचे संत मोरया गोसावी हे मयूरेश्वराचे थोर भक्त होते; पुढे राज्यकर्ते आणि पेशवेकालीन आश्रयदात्यांनी मंदिराला साहाय्य केले.",
      hi: "मोरगांव सदियों से गणेश-भक्ति का केंद्र रहा है. चिंचवड के संत मोरया गोसावी मयूरेश्वर के महान भक्त थे; आगे चलकर शासकों और पेशवाकालीन संरक्षकों ने मंदिर को सहयोग दिया."
    },
    legend: {
      en: "The demon Sindhurasura troubled the gods. Ganesha rode a peacock, defeated Sindhu here and so became Mayureshwar. The village is said to be named after the many peacocks (mor) once found here.",
      mr: "सिंधुरासुर नावाच्या राक्षसाने देवांना त्रास दिला. गणेशाने मोरावर स्वार होऊन येथे सिंधूचा पराभव केला, म्हणून तो मयूरेश्वर. येथे पूर्वी पुष्कळ मोर होते, त्यावरून गावाला मोरगाव हे नाव पडले असे मानतात.",
      hi: "सिंधुरासुर नामक दैत्य देवताओं को सताता था. गणेशजी ने मोर पर सवार होकर यहाँ उसका वध किया, इसलिए वे मयूरेश्वर कहलाए. माना जाता है कि यहाँ पहले बहुत मोर थे, इसी से गाँव का नाम मोरगांव पड़ा."
    },
    architecture: {
      en: "A fort-like black stone enclosure with four corner minarets and four gates facing the four directions. A Nandi stands before the shrine, which is unusual for a Ganesha temple. The idol's trunk is turned left, with Riddhi and Siddhi beside it.",
      mr: "चार कोपऱ्यांवर मनोरे आणि चार दिशांना चार दरवाजे असलेले, किल्ल्यासारखे काळ्या दगडाचे मंदिर. गणेश मंदिरात क्वचित दिसणारा नंदी येथे मंदिरासमोर आहे. मूर्तीची सोंड डावीकडे वळलेली असून बाजूला रिद्धी-सिद्धी आहेत.",
      hi: "चार कोनों पर मीनारें और चारों दिशाओं में चार द्वारों वाला, किले जैसा काले पत्थर का परिसर. गणेश मंदिर में असामान्य नंदी यहाँ मंदिर के सामने स्थित है. मूर्ति की सूँड बाईं ओर मुड़ी है और बगल में रिद्धि-सिद्धि हैं."
    },
    festival: {
      en: "Ganesh Chaturthi (Bhadrapada) and Ganesh Jayanti (Magh Shukla Chaturthi) draw the biggest crowds, and many devotees walk here from Pune and nearby villages.",
      mr: "गणेश चतुर्थी (भाद्रपद) आणि गणेश जयंती (माघ शुद्ध चतुर्थी) यांना सर्वाधिक गर्दी असते; पुणे आणि आसपासच्या गावांतून अनेक भाविक पायी येतात.",
      hi: "गणेश चतुर्थी (भाद्रपद) और गणेश जयंती (माघ शुक्ल चतुर्थी) पर सबसे अधिक भीड़ होती है; पुणे और आसपास के गाँवों से कई भक्त पैदल आते हैं."
    },
    reach: {
      en: "By road: about 65 km from Pune (around 2 hours). Nearest railway stations: Jejuri and Daund Junction. Nearest airport: Pune.",
      mr: "रस्त्याने: पुण्यापासून सुमारे ६५ किमी (सुमारे २ तास). जवळची रेल्वे स्थानके: जेजुरी आणि दौंड जंक्शन. जवळचे विमानतळ: पुणे.",
      hi: "सड़क मार्ग: पुणे से लगभग 65 किमी (करीब 2 घंटे). नज़दीकी रेलवे स्टेशन: जेजुरी और दौंड जंक्शन. नज़दीकी हवाई अड्डा: पुणे."
    },
    tip: {
      en: "Combine Morgaon with the Khandoba temple at Jejuri on the same day. Carry small change and try to avoid weekends and Chaturthi days.",
      mr: "मोरगावसोबत त्याच दिवशी जेजुरीचे खंडोबा मंदिर पाहता येते. सुट्टे पैसे सोबत ठेवा आणि शक्यतो सुट्टीचे दिवस व चतुर्थी टाळा.",
      hi: "मोरगांव के साथ उसी दिन जेजुरी का खंडोबा मंदिर देख सकते हैं. खुले पैसे साथ रखें और हो सके तो सप्ताहांत व चतुर्थी के दिन से बचें."
    },
    aliases: ["morgaon", "moregaon", "morgav", "moreshwar", "mayureshwar", "mayureshwara", "mayoreshwar", "mayuresh", "baramati", "karha", "मोरगाव", "मोरगांव", "मयूरेश्वर", "मयुरेश्वर", "मोरेश्वर", "बारामती"]
  },

  {
    id: "siddhatek", order: 2, lat: 18.4842, lng: 74.5767, visitMin: 90, fromPune: 100, district: "ahilyanagar",
    name: { en: "Shri Siddhivinayak Ganpati Temple", mr: "श्री सिद्धिविनायक गणपती मंदिर", hi: "श्री सिद्धिविनायक गणपति मंदिर" },
    deity: { en: "Siddhivinayak", mr: "सिद्धिविनायक", hi: "सिद्धिविनायक" },
    village: { en: "Siddhatek", mr: "सिद्धटेक", hi: "सिद्धटेक" },
    districtName: { en: "Ahilyanagar (formerly Ahmednagar)", mr: "अहिल्यानगर (पूर्वीचे अहमदनगर)", hi: "अहिल्यानगर (पहले अहमदनगर)" },
    location: {
      en: "Siddhatek, Karjat taluka, Ahilyanagar district, on the bank of the Bhima river.",
      mr: "सिद्धटेक, कर्जत तालुका, अहिल्यानगर जिल्हा; भीमा नदीच्या काठावर.",
      hi: "सिद्धटेक, कर्जत तालुका, अहिल्यानगर ज़िला; भीमा नदी के किनारे."
    },
    short: {
      en: "A hill-top shrine on the Bhima river where Ganesha is Siddhivinayak, the only Ashtavinayak idol with its trunk turned right.",
      mr: "भीमा नदीकाठच्या टेकडीवरील मंदिर; येथे गणपती सिद्धिविनायक रूपात आहे आणि अष्टविनायकांमध्ये फक्त याच मूर्तीची सोंड उजवीकडे वळलेली आहे.",
      hi: "भीमा नदी के किनारे पहाड़ी पर स्थित मंदिर, जहाँ गणेशजी सिद्धिविनायक हैं; अष्टविनायकों में केवल इसी मूर्ति की सूँड दाईं ओर मुड़ी है."
    },
    significance: {
      en: "Devotees come here for success and the fulfilment of important goals. A right-turned trunk is believed to call for strict rituals, so the deity is regarded as especially powerful.",
      mr: "येथे भाविक कार्यसिद्धी आणि महत्त्वाच्या इच्छांच्या पूर्ततेसाठी येतात. उजव्या सोंडेच्या गणपतीचे नियम कडक मानले जातात, म्हणून हे दैवत विशेष जागृत मानले जाते.",
      hi: "भक्त यहाँ कार्यसिद्धि और महत्त्वपूर्ण मनोकामनाओं की पूर्ति के लिए आते हैं. दाईं सूँड वाले गणेश के नियम कठोर माने जाते हैं, इसलिए इन्हें विशेष रूप से जाग्रत देवता माना जाता है."
    },
    history: {
      en: "The present stone temple is generally credited to Ahilyabai Holkar of Indore in the 18th century, and Peshwa-era patrons added to it.",
      mr: "सध्याचे दगडी मंदिर साधारणपणे अठराव्या शतकात इंदूरच्या अहिल्याबाई होळकर यांनी बांधल्याचे मानले जाते; पेशवेकालीन आश्रयदात्यांनीही त्यात भर घातली.",
      hi: "वर्तमान पत्थर का मंदिर सामान्यतः अठारहवीं सदी में इंदौर की अहिल्याबाई होलकर द्वारा बनवाया माना जाता है; पेशवाकालीन संरक्षकों ने भी इसमें योगदान दिया."
    },
    legend: {
      en: "At the start of creation, Vishnu struggled against the demons Madhu and Kaitabha. After meditating on Ganesha here and receiving his blessing, he won. The place became a Siddhakshetra, a land of accomplishment, and gave the village its name.",
      mr: "सृष्टीच्या आरंभी मधु आणि कैटभ या राक्षसांशी लढताना विष्णू अडचणीत आले. येथे गणेशाची आराधना करून आशीर्वाद मिळताच त्यांना विजय मिळाला. हे स्थान सिद्धक्षेत्र ठरले आणि गावाला सिद्धटेक नाव मिळाले.",
      hi: "सृष्टि के आरंभ में मधु और कैटभ दैत्यों से युद्ध करते समय विष्णु कठिनाई में थे. यहाँ गणेशजी की आराधना कर आशीर्वाद पाने पर उन्हें विजय मिली. यह स्थान सिद्धक्षेत्र बना और गाँव का नाम सिद्धटेक पड़ा."
    },
    architecture: {
      en: "A compact stone shrine on a small hill, facing north. The self-manifested idol is about three feet tall, with its trunk turned right.",
      mr: "छोट्या टेकडीवर उत्तराभिमुख असलेले दगडी मंदिर. स्वयंभू मूर्ती सुमारे तीन फूट उंच असून तिची सोंड उजवीकडे वळलेली आहे.",
      hi: "छोटी पहाड़ी पर उत्तरमुखी पत्थर का मंदिर. स्वयंभू मूर्ति लगभग तीन फुट ऊँची है और उसकी सूँड दाईं ओर मुड़ी है."
    },
    festival: {
      en: "Ganesh Chaturthi and Ganesh Jayanti are the main festivals. Many devotees also walk the hill circumambulation on Chaturthi days.",
      mr: "गणेश चतुर्थी आणि गणेश जयंती हे प्रमुख उत्सव आहेत. चतुर्थीच्या दिवशी अनेक भाविक टेकडीची प्रदक्षिणा करतात.",
      hi: "गणेश चतुर्थी और गणेश जयंती मुख्य उत्सव हैं. चतुर्थी के दिन कई भक्त पहाड़ी की परिक्रमा भी करते हैं."
    },
    reach: {
      en: "By road: about 100 km from Pune via Daund (around 2.5 hours). Nearest major railway station: Daund Junction. Nearest airport: Pune.",
      mr: "रस्त्याने: पुण्यापासून दौंडमार्गे सुमारे १०० किमी (सुमारे २.५ तास). जवळचे प्रमुख रेल्वे स्थानक: दौंड जंक्शन. जवळचे विमानतळ: पुणे.",
      hi: "सड़क मार्ग: पुणे से दौंड होते हुए लगभग 100 किमी (करीब 2.5 घंटे). नज़दीकी प्रमुख रेलवे स्टेशन: दौंड जंक्शन. नज़दीकी हवाई अड्डा: पुणे."
    },
    tip: {
      en: "Walking the roughly 5 km parikrama path around the hill is a popular vow. Wear comfortable footwear and go early in summer.",
      mr: "टेकडीभोवतीची सुमारे ५ किमीची प्रदक्षिणा करण्याचा नवस अनेक जण करतात. आरामदायी पादत्राणे वापरा आणि उन्हाळ्यात सकाळी लवकर जा.",
      hi: "पहाड़ी के चारों ओर लगभग 5 किमी की परिक्रमा करना कई भक्तों की मन्नत होती है. आरामदायक जूते पहनें और गर्मियों में सुबह जल्दी जाएँ."
    },
    aliases: ["siddhatek", "siddhtek", "siddhi vinayak", "siddhivinayak", "siddhivinayaka", "karjat", "bhima", "ahilyanagar", "ahmednagar", "सिद्धटेक", "सिद्धिविनायक", "सिद्धीविनायक", "कर्जत", "भीमा", "अहिल्यानगर", "अहमदनगर"]
  },

  {
    id: "pali", order: 3, lat: 18.5416, lng: 73.2294, visitMin: 60, fromPune: 115, district: "raigad",
    name: { en: "Shri Ballaleshwar Ganpati Temple", mr: "श्री बल्लाळेश्वर गणपती मंदिर", hi: "श्री बल्लालेश्वर गणपति मंदिर" },
    deity: { en: "Ballaleshwar", mr: "बल्लाळेश्वर", hi: "बल्लालेश्वर" },
    village: { en: "Pali", mr: "पाली", hi: "पाली" },
    districtName: { en: "Raigad", mr: "रायगड", hi: "रायगढ़" },
    location: {
      en: "Pali, Sudhagad taluka, Raigad district, at the foot of the Sahyadri hills near Sarasgad fort.",
      mr: "पाली, सुधागड तालुका, रायगड जिल्हा; सरसगड किल्ल्याजवळ सह्याद्रीच्या पायथ्याशी.",
      hi: "पाली, सुधागढ़ तालुका, रायगढ़ ज़िला; सरसगढ़ किले के पास सह्याद्रि की तलहटी में."
    },
    short: {
      en: "At Pali, Ganesha is Ballaleshwar, the only Ashtavinayak form named after a devotee, the boy Ballal.",
      mr: "पाली येथे गणपती बल्लाळेश्वर रूपात आहे; अष्टविनायकांमध्ये भक्ताच्या नावाने ओळखला जाणारा हा एकमेव गणपती, बाल भक्त बल्लाळ.",
      hi: "पाली में गणेशजी बल्लालेश्वर हैं; अष्टविनायकों में भक्त के नाम से जाना जाने वाला यह एकमात्र रूप है, बालभक्त बल्लाल के नाम पर."
    },
    significance: {
      en: "Ballaleshwar is the only Ashtavinayak deity known by a devotee's name, a reminder that devotion matters more than status.",
      mr: "बल्लाळेश्वर हे अष्टविनायकांमधील भक्ताच्या नावाने ओळखले जाणारे एकमेव दैवत आहे; भक्ती ही पदापेक्षा मोठी, याची ती आठवण करून देते.",
      hi: "बल्लालेश्वर अष्टविनायकों में एकमात्र देवता हैं जो भक्त के नाम से जाने जाते हैं; यह याद दिलाता है कि भक्ति पद से बड़ी होती है."
    },
    history: {
      en: "An older wooden shrine was rebuilt in stone during the Peshwa period, in the 18th century, and the temple is still looked after by a local trust.",
      mr: "जुने लाकडी मंदिर अठराव्या शतकात पेशवेकाळात दगडी स्वरूपात पुन्हा बांधले गेले; आजही स्थानिक विश्वस्त मंडळ मंदिराची देखभाल करते.",
      hi: "पुराना लकड़ी का मंदिर अठारहवीं सदी में पेशवा काल के दौरान पत्थर से दोबारा बनाया गया; आज भी स्थानीय ट्रस्ट मंदिर की देखभाल करता है."
    },
    legend: {
      en: "Ballal, a young devotee of Ganesha, was beaten by angry villagers and his father and tied to a tree in the forest. Ganesha appeared, freed him and, at Ballal's request, stayed here.",
      mr: "बल्लाळ हा गणेशाचा लहानगा भक्त. त्याच्या भक्तीमुळे चिडलेल्या गावकऱ्यांनी आणि वडिलांनी त्याला मारून जंगलात झाडाला बांधले. गणेश प्रकट होऊन त्याला सोडवले आणि बल्लाळाच्या विनंतीवरून येथेच राहिले.",
      hi: "बल्लाल गणेशजी का बालभक्त था. उसकी भक्ति से नाराज़ गाँववालों और पिता ने उसे पीटकर जंगल में पेड़ से बाँध दिया. गणेशजी प्रकट हुए, उसे मुक्त किया और बल्लाल की प्रार्थना पर यहीं निवास किया."
    },
    architecture: {
      en: "The stone temple faces east, so the morning sun falls on the idol. The self-manifested idol has its trunk turned left, with diamonds set in the eyes and navel.",
      mr: "दगडी मंदिर पूर्वाभिमुख असल्याने सकाळचे सूर्यकिरण मूर्तीवर पडतात. स्वयंभू मूर्तीची सोंड डावीकडे वळलेली असून डोळ्यांत आणि बेंबीत हिरे बसवलेले आहेत.",
      hi: "पत्थर का मंदिर पूर्वमुखी है, इसलिए सुबह की धूप मूर्ति पर पड़ती है. स्वयंभू मूर्ति की सूँड बाईं ओर मुड़ी है और आँखों व नाभि में हीरे जड़े हैं."
    },
    festival: {
      en: "Ganesh Chaturthi and Ganesh Jayanti are the main festivals, and the monthly Chaturthi days are also busy.",
      mr: "गणेश चतुर्थी आणि गणेश जयंती हे प्रमुख उत्सव आहेत; दर महिन्याच्या चतुर्थीलाही गर्दी असते.",
      hi: "गणेश चतुर्थी और गणेश जयंती मुख्य उत्सव हैं; हर महीने की चतुर्थी पर भी भीड़ रहती है."
    },
    reach: {
      en: "By road: about 115 km from Pune via Lonavala and Khopoli (around 3 hours) and about 110 km from Mumbai. Nearest railway station: Khopoli. Nearest airports: Pune and Mumbai.",
      mr: "रस्त्याने: पुण्यापासून लोणावळा-खोपोलीमार्गे सुमारे ११५ किमी (सुमारे ३ तास) आणि मुंबईपासून सुमारे ११० किमी. जवळचे रेल्वे स्थानक: खोपोली. जवळची विमानतळे: पुणे आणि मुंबई.",
      hi: "सड़क मार्ग: पुणे से लोनावला और खोपोली होते हुए लगभग 115 किमी (करीब 3 घंटे) और मुंबई से लगभग 110 किमी. नज़दीकी रेलवे स्टेशन: खोपोली. नज़दीकी हवाई अड्डे: पुणे और मुंबई."
    },
    tip: {
      en: "Sarasgad fort rises right behind Pali. The Sahyadri foothills are green but slippery in the monsoon, so drive carefully.",
      mr: "पालीच्या मागेच सरसगड किल्ला आहे. पावसाळ्यात सह्याद्रीच्या पायथ्याचा परिसर हिरवागार पण निसरडा असतो, त्यामुळे काळजीपूर्वक वाहन चालवा.",
      hi: "पाली के ठीक पीछे सरसगढ़ किला है. बारिश में सह्याद्रि की तलहटी हरी-भरी पर फिसलन भरी होती है, इसलिए सावधानी से गाड़ी चलाएँ."
    },
    aliases: ["pali", "paali", "ballaleshwar", "ballaleshwara", "ballal", "balleshwar", "sudhagad", "sarasgad", "khopoli", "raigad", "पाली", "बल्लाळेश्वर", "बल्लालेश्वर", "बल्लाळ", "सुधागड", "सुधागढ़", "रायगड", "रायगढ़"]
  },

  {
    id: "mahad", order: 4, lat: 18.7898, lng: 73.2879, visitMin: 45, fromPune: 95, district: "raigad",
    name: { en: "Shri Varadvinayak Ganpati Temple", mr: "श्री वरदविनायक गणपती मंदिर", hi: "श्री वरदविनायक गणपति मंदिर" },
    deity: { en: "Varadvinayak", mr: "वरदविनायक", hi: "वरदविनायक" },
    village: { en: "Mahad (Mad)", mr: "महड", hi: "महड" },
    districtName: { en: "Raigad", mr: "रायगड", hi: "रायगढ़" },
    location: {
      en: "Mahad village, Khalapur taluka, Raigad district, near Khopoli. Not to be confused with Mahad town in southern Raigad.",
      mr: "महड गाव, खालापूर तालुका, रायगड जिल्हा; खोपोलीजवळ. दक्षिण रायगडमधील महाड शहराशी गल्लत करू नका.",
      hi: "महड गाँव, खालापुर तालुका, रायगढ़ ज़िला; खोपोली के पास. दक्षिण रायगढ़ के महाड शहर से भ्रमित न हों."
    },
    short: {
      en: "At Mahad, near Khopoli, Ganesha is Varadvinayak, the giver of boons, and devotees may offer prayers and touch the idol themselves.",
      mr: "खोपोलीजवळील महड येथे गणपती वरदविनायक, म्हणजे वर देणारा; येथे भाविकांना स्वतः मूर्तीला स्पर्श करून पूजा करता येते.",
      hi: "खोपोली के पास महड में गणेशजी वरदविनायक, यानी वरदान देने वाले हैं; यहाँ भक्त स्वयं मूर्ति को स्पर्श कर पूजा कर सकते हैं."
    },
    significance: {
      en: "Varadvinayak is believed to grant boons and success. A lamp here is said to have been burning without a break since 1892.",
      mr: "वरदविनायक वर आणि यश देतो, अशी श्रद्धा आहे. येथील नंदादीप १८९२ पासून अखंड तेवत असल्याचे सांगितले जाते.",
      hi: "माना जाता है कि वरदविनायक वरदान और सफलता देते हैं. कहा जाता है कि यहाँ का दीपक 1892 से लगातार जल रहा है."
    },
    history: {
      en: "Tradition says the idol was found in a lake in 1690 by Dhondu Paudkar, and the temple was built in 1725 by Subhedar Ramji Mahadev Biwalkar.",
      mr: "परंपरेनुसार १६९० मध्ये धोंडू पौडकर यांना तलावात ही मूर्ती सापडली आणि १७२५ मध्ये सुभेदार रामजी महादेव बिवलकर यांनी मंदिर बांधले.",
      hi: "परंपरा के अनुसार 1690 में धोंडू पौडकर को यह मूर्ति एक तालाब में मिली और 1725 में सूबेदार रामजी महादेव बिवलकर ने मंदिर बनवाया."
    },
    legend: {
      en: "Tradition says Sage Grutsamad worshipped Ganesha in the forest here and received boons. Ganesha promised to remain here as Varadvinayak, the giver of boons.",
      mr: "परंपरेनुसार गृत्समद ऋषींनी येथील अरण्यात गणेशाची उपासना केली आणि त्यांना वर मिळाले. गणेशाने येथे वरदविनायक म्हणून राहण्याचे वचन दिले.",
      hi: "परंपरा के अनुसार गृत्समद ऋषि ने यहाँ के वन में गणेशजी की उपासना की और वरदान पाए. गणेशजी ने यहाँ वरदविनायक के रूप में रहने का वचन दिया."
    },
    architecture: {
      en: "A small, quiet stone temple with a dome topped by a golden kalash. The idol faces east with its trunk turned left, and devotees can reach the inner sanctum.",
      mr: "लहान, शांत दगडी मंदिर; घुमटावर सोनेरी कळस आहे. मूर्ती पूर्वाभिमुख असून सोंड डावीकडे वळलेली आहे आणि भाविकांना गाभाऱ्यापर्यंत जाता येते.",
      hi: "छोटा, शांत पत्थर का मंदिर, जिसके गुंबद पर सुनहरा कलश है. मूर्ति पूर्वमुखी है, सूँड बाईं ओर मुड़ी है और भक्त गर्भगृह तक जा सकते हैं."
    },
    festival: {
      en: "Ganesh Chaturthi and Magh Chaturthi (Ganesh Jayanti) bring fairs and large crowds.",
      mr: "गणेश चतुर्थी आणि माघी चतुर्थी (गणेश जयंती) यांना यात्रा भरते आणि मोठी गर्दी असते.",
      hi: "गणेश चतुर्थी और माघी चतुर्थी (गणेश जयंती) पर मेला लगता है और भारी भीड़ रहती है."
    },
    reach: {
      en: "By road: about 95 km from Pune and about 90 km from Mumbai via Khopoli. Nearest railway station: Khopoli. Nearest airports: Pune and Mumbai.",
      mr: "रस्त्याने: पुण्यापासून सुमारे ९५ किमी आणि मुंबईपासून खोपोलीमार्गे सुमारे ९० किमी. जवळचे रेल्वे स्थानक: खोपोली. जवळची विमानतळे: पुणे आणि मुंबई.",
      hi: "सड़क मार्ग: पुणे से लगभग 95 किमी और मुंबई से खोपोली होते हुए लगभग 90 किमी. नज़दीकी रेलवे स्टेशन: खोपोली. नज़दीकी हवाई अड्डे: पुणे और मुंबई."
    },
    tip: {
      en: "Mahad is close to Pali, so the two are easy to visit in one day. Check darshan timings locally, as the idol can be touched only at set times.",
      mr: "महड पालीजवळ असल्याने दोन्ही मंदिरे एका दिवसात पाहता येतात. मूर्तीला स्पर्श करण्याच्या वेळा ठरलेल्या असतात, त्यामुळे दर्शनाच्या वेळा स्थानिक ठिकाणी तपासा.",
      hi: "महड, पाली के पास है, इसलिए दोनों मंदिर एक दिन में देखे जा सकते हैं. मूर्ति को छूने के समय तय होते हैं, इसलिए दर्शन का समय वहीं पता कर लें."
    },
    aliases: ["mahad", "mad", "maad", "mahadd", "khalapur", "khopoli", "varadvinayak", "varad vinayak", "varadvinayaka", "महड", "महाड", "वरदविनायक", "खालापूर", "खालापुर", "खोपोली"]
  },

  {
    id: "theur", order: 5, lat: 18.5186, lng: 73.979, visitMin: 60, fromPune: 25, district: "pune",
    name: { en: "Shri Chintamani Ganpati Temple", mr: "श्री चिंतामणी गणपती मंदिर", hi: "श्री चिंतामणि गणपति मंदिर" },
    deity: { en: "Chintamani", mr: "चिंतामणी", hi: "चिंतामणि" },
    village: { en: "Theur", mr: "थेऊर", hi: "थेऊर" },
    districtName: { en: "Pune", mr: "पुणे", hi: "पुणे" },
    location: {
      en: "Theur, Haveli taluka, Pune district, on the bank of the Mula-Mutha river.",
      mr: "थेऊर, हवेली तालुका, पुणे जिल्हा; मुळा-मुठा नदीच्या काठावर.",
      hi: "थेऊर, हवेली तालुका, पुणे ज़िला; मुला-मुठा नदी के किनारे."
    },
    short: {
      en: "Chintamani at Theur, close to Pune, is the Ganesha who frees the mind from worry, and a temple much loved by the Peshwa Madhavrao I.",
      mr: "पुण्याजवळील थेऊर येथील चिंतामणी म्हणजे मनाची चिंता दूर करणारा गणपती; पेशवे पहिले माधवराव यांचे हे लाडके मंदिर.",
      hi: "पुणे के पास थेऊर के चिंतामणि वे गणेश हैं जो मन की चिंता दूर करते हैं; पेशवा माधवराव प्रथम को यह मंदिर बहुत प्रिय था."
    },
    significance: {
      en: "Chintamani is believed to relieve worry and calm a restless mind. Students and anxious families often pray here.",
      mr: "चिंतामणी चिंता दूर करतो आणि अस्वस्थ मनाला शांती देतो, अशी श्रद्धा आहे. विद्यार्थी आणि चिंताग्रस्त कुटुंबे येथे आवर्जून प्रार्थना करतात.",
      hi: "माना जाता है कि चिंतामणि चिंता हरते हैं और बेचैन मन को शांति देते हैं. विद्यार्थी और चिंतित परिवार यहाँ अक्सर प्रार्थना करने आते हैं."
    },
    history: {
      en: "The temple is closely linked with Peshwa Madhavrao I, who prayed here in his last illness and died at Theur in 1772. The wooden hall is from the Peshwa period.",
      mr: "हे मंदिर पेशवे पहिले माधवराव यांच्याशी जवळून जोडलेले आहे; शेवटच्या आजारपणात ते येथे प्रार्थनेसाठी आले आणि १७७२ मध्ये थेऊर येथेच त्यांचे निधन झाले. लाकडी सभामंडप पेशवेकाळातील आहे.",
      hi: "यह मंदिर पेशवा माधवराव प्रथम से गहराई से जुड़ा है; अंतिम बीमारी में उन्होंने यहाँ प्रार्थना की और 1772 में थेऊर में ही उनका निधन हुआ. लकड़ी का सभामंडप पेशवा काल का है."
    },
    legend: {
      en: "Sage Kapila owned the wish-fulfilling gem Chintamani, which the greedy prince Gana took away. Ganesha won it back and returned it, and Kapila placed it round his neck, giving the name Chintamani Vinayak. The place was once a kadamba forest.",
      mr: "कपिल मुनींकडे इच्छित फळ देणारा चिंतामणी रत्न होते, ते लोभी राजपुत्र गणाने हिरावून नेले. गणेशाने ते परत मिळवून दिले आणि कपिल मुनींनी ते गणेशाच्या गळ्यात घातले; त्यावरून चिंतामणी विनायक हे नाव पडले. हे स्थान पूर्वी कदंबाचे वन होते.",
      hi: "कपिल मुनि के पास मनोकामना पूरी करने वाला चिंतामणि रत्न था, जिसे लालची राजकुमार गण ले गया. गणेशजी ने उसे वापस दिलाया और कपिल मुनि ने उसे गणेशजी के गले में पहना दिया; इसी से चिंतामणि विनायक नाम पड़ा. यह स्थान कभी कदंब वन था."
    },
    architecture: {
      en: "The temple stands on the river bank with a carved wooden hall. The idol has its trunk turned left, with diamonds and rubies set in the eyes.",
      mr: "नदीकाठी असलेल्या या मंदिरात कोरीव लाकडी सभामंडप आहे. मूर्तीची सोंड डावीकडे वळलेली असून डोळ्यांत हिरे आणि माणिक बसवलेले आहेत.",
      hi: "नदी किनारे स्थित इस मंदिर में नक्काशीदार लकड़ी का सभामंडप है. मूर्ति की सूँड बाईं ओर मुड़ी है और आँखों में हीरे व माणिक जड़े हैं."
    },
    festival: {
      en: "Ganesh Chaturthi and Ganesh Jayanti are the main festivals, and Chaturthi days see extra crowds.",
      mr: "गणेश चतुर्थी आणि गणेश जयंती हे प्रमुख उत्सव आहेत; चतुर्थीच्या दिवशी विशेष गर्दी असते.",
      hi: "गणेश चतुर्थी और गणेश जयंती मुख्य उत्सव हैं; चतुर्थी के दिन विशेष भीड़ रहती है."
    },
    reach: {
      en: "By road: about 25 km from Pune via Hadapsar and Loni Kalbhor (around 1 hour). Nearest major railway station: Pune Junction. Nearest airport: Pune.",
      mr: "रस्त्याने: पुण्यापासून हडपसर आणि लोणी काळभोरमार्गे सुमारे २५ किमी (सुमारे १ तास). जवळचे प्रमुख रेल्वे स्थानक: पुणे जंक्शन. जवळचे विमानतळ: पुणे.",
      hi: "सड़क मार्ग: पुणे से हडपसर और लोनी काळभोर होते हुए लगभग 25 किमी (करीब 1 घंटा). नज़दीकी प्रमुख रेलवे स्टेशन: पुणे जंक्शन. नज़दीकी हवाई अड्डा: पुणे."
    },
    tip: {
      en: "Theur is the closest temple to Pune, so it works well as a half-day trip or as the first or last stop of a circuit.",
      mr: "थेऊर हे पुण्याच्या सर्वात जवळचे मंदिर असल्याने अर्ध्या दिवसाच्या सहलीसाठी किंवा यात्रेतील पहिल्या-शेवटच्या थांब्यासाठी योग्य आहे.",
      hi: "थेऊर पुणे का सबसे नज़दीकी मंदिर है, इसलिए आधे दिन की यात्रा या यात्रा के पहले-आख़िरी पड़ाव के लिए उपयुक्त है."
    },
    aliases: ["theur", "theor", "thevur", "chintamani", "chintamani vinayak", "chintaman", "haveli", "loni kalbhor", "थेऊर", "थेवूर", "चिंतामणी", "चिंतामणि", "हवेली"]
  },

  {
    id: "lenyadri", order: 6, lat: 19.24, lng: 73.87, visitMin: 120, fromPune: 95, district: "pune",
    name: { en: "Shri Girijatmaj Ganpati Temple", mr: "श्री गिरिजात्मज गणपती मंदिर", hi: "श्री गिरिजात्मज गणपति मंदिर" },
    deity: { en: "Girijatmaj", mr: "गिरिजात्मज", hi: "गिरिजात्मज" },
    village: { en: "Lenyadri (near Junnar)", mr: "लेण्याद्री (जुन्नरजवळ)", hi: "लेण्याद्रि (जुन्नर के पास)" },
    districtName: { en: "Pune", mr: "पुणे", hi: "पुणे" },
    location: {
      en: "Lenyadri hill, Junnar taluka, Pune district, inside a Buddhist rock-cut cave.",
      mr: "लेण्याद्री डोंगर, जुन्नर तालुका, पुणे जिल्हा; बौद्ध लेण्यांमधील एका गुहेत.",
      hi: "लेण्याद्रि पहाड़ी, जुन्नर तालुका, पुणे ज़िला; एक बौद्ध शैलकृत गुफा के भीतर."
    },
    short: {
      en: "Girijatmaj at Lenyadri is carved into a Buddhist cave near Junnar and is reached by about 300 steps.",
      mr: "जुन्नरजवळील लेण्याद्री येथील गिरिजात्मज बौद्ध लेण्यातील एका गुहेत कोरलेला असून सुमारे ३०० पायऱ्या चढून जावे लागते.",
      hi: "जुन्नर के पास लेण्याद्रि के गिरिजात्मज एक बौद्ध गुफा में तराशे गए हैं, जहाँ लगभग 300 सीढ़ियाँ चढ़कर पहुँचा जाता है."
    },
    significance: {
      en: "Girijatmaj means 'son of Girija (Parvati)'. It is the only Ashtavinayak temple set inside a cave, and a place where devotion meets ancient rock-cut art.",
      mr: "गिरिजात्मज म्हणजे 'गिरिजेचा (पार्वतीचा) पुत्र'. अष्टविनायकांपैकी गुहेत वसलेले हे एकमेव मंदिर आहे; येथे भक्ती आणि प्राचीन लेणी-शिल्पकला यांचा संगम दिसतो.",
      hi: "गिरिजात्मज का अर्थ है 'गिरिजा (पार्वती) के पुत्र'. अष्टविनायकों में यह एकमात्र मंदिर गुफा के भीतर है, जहाँ भक्ति और प्राचीन शैलकला का संगम दिखता है."
    },
    history: {
      en: "The shrine is in Cave 7 of the Lenyadri group of about 30 Buddhist rock-cut caves, dug roughly in the early centuries CE. The caves are protected by the Archaeological Survey of India.",
      mr: "सुमारे ३० बौद्ध लेण्यांच्या लेण्याद्री समूहातील सातव्या क्रमांकाच्या गुहेत हे मंदिर आहे; या लेण्या साधारण इसवी सनाच्या सुरुवातीच्या शतकांत कोरल्या गेल्या. लेण्यांचे संरक्षण भारतीय पुरातत्त्व सर्वेक्षण करते.",
      hi: "यह मंदिर लगभग 30 बौद्ध गुफाओं वाले लेण्याद्रि समूह की गुफा क्रमांक 7 में है, जो मोटे तौर पर ईसा की आरंभिक शताब्दियों में तराशी गई थीं. गुफाओं का संरक्षण भारतीय पुरातत्व सर्वेक्षण करता है."
    },
    legend: {
      en: "Tradition says Parvati did penance in these hills for twelve years to have Ganesha as her son. Ganesha was born here as a child and is said to have lived here for fifteen years.",
      mr: "परंपरेनुसार पार्वतीने गणेश पुत्र म्हणून मिळावा यासाठी या डोंगरात बारा वर्षे तपश्चर्या केली. गणेश येथे बालरूपात जन्मला आणि पंधरा वर्षे येथे राहिला, असे सांगतात.",
      hi: "परंपरा के अनुसार पार्वती ने गणेशजी को पुत्र रूप में पाने के लिए इन पहाड़ियों में बारह वर्ष तप किया. गणेशजी का जन्म यहाँ बालरूप में हुआ और वे पंद्रह वर्ष यहाँ रहे, ऐसा कहा जाता है."
    },
    architecture: {
      en: "A single rock-cut cave reached by about 300 steps (commonly counted as 307). Its large hall has no pillars and daylight reaches it through the day.",
      mr: "एकाच खडकात कोरलेली गुहा; सुमारे ३०० पायऱ्या (साधारणपणे ३०७ मोजल्या जातात) चढून जावे लागते. मोठ्या सभागृहात खांब नाहीत आणि दिवसभर दिवसाचा प्रकाश येतो.",
      hi: "एक ही चट्टान में तराशी गई गुफा, जहाँ लगभग 300 सीढ़ियाँ (आम तौर पर 307 गिनी जाती हैं) चढ़कर पहुँचते हैं. इसके बड़े सभागृह में खंभे नहीं हैं और दिनभर प्राकृतिक रोशनी आती है."
    },
    festival: {
      en: "Ganesh Chaturthi and Ganesh Jayanti are the main festivals. Early mornings are the best time for a calm visit.",
      mr: "गणेश चतुर्थी आणि गणेश जयंती हे प्रमुख उत्सव आहेत. शांतपणे दर्शनासाठी सकाळची वेळ उत्तम.",
      hi: "गणेश चतुर्थी और गणेश जयंती मुख्य उत्सव हैं. शांति से दर्शन के लिए सुबह का समय सबसे अच्छा है."
    },
    reach: {
      en: "By road: about 95 km from Pune via Narayangaon and Junnar (around 2.5 hours). Nearest railway station: Pune Junction. Nearest airport: Pune. A doli (palanquin) may be available at the foot of the hill.",
      mr: "रस्त्याने: पुण्यापासून नारायणगाव-जुन्नरमार्गे सुमारे ९५ किमी (सुमारे २.५ तास). जवळचे रेल्वे स्थानक: पुणे जंक्शन. जवळचे विमानतळ: पुणे. डोंगराच्या पायथ्याशी डोलीची सोय असू शकते.",
      hi: "सड़क मार्ग: पुणे से नारायणगांव और जुन्नर होते हुए लगभग 95 किमी (करीब 2.5 घंटे). नज़दीकी रेलवे स्टेशन: पुणे जंक्शन. नज़दीकी हवाई अड्डा: पुणे. पहाड़ी की तलहटी में डोली (पालकी) मिल सकती है."
    },
    tip: {
      en: "Start early to avoid heat and crowds, carry water and wear shoes that are easy to remove. Combine with Ozar and Shivneri fort.",
      mr: "उन्हे आणि गर्दी टाळण्यासाठी लवकर निघा, पाणी सोबत ठेवा आणि सहज काढता येतील अशी पादत्राणे घाला. ओझर आणि शिवनेरी किल्ल्यासोबत हे पाहता येईल.",
      hi: "गर्मी और भीड़ से बचने के लिए जल्दी निकलें, पानी साथ रखें और आसानी से उतरने वाले जूते पहनें. ओझर और शिवनेरी किले के साथ इसे जोड़ सकते हैं."
    },
    aliases: ["lenyadri", "leṇyādri", "lenyadri", "lenadri", "girijatmaj", "girijatmaja", "junnar", "ganesh lena", "ganesh leni", "लेण्याद्री", "लेण्याद्रि", "लेन्याद्री", "गिरिजात्मज", "जुन्नर"]
  },

  {
    id: "ozar", order: 7, lat: 19.1942, lng: 73.9261, visitMin: 60, fromPune: 85, district: "pune",
    name: { en: "Shri Vighneshwar Ganpati Temple", mr: "श्री विघ्नेश्वर गणपती मंदिर", hi: "श्री विघ्नेश्वर गणपति मंदिर" },
    deity: { en: "Vighneshwar", mr: "विघ्नेश्वर", hi: "विघ्नेश्वर" },
    village: { en: "Ozar", mr: "ओझर", hi: "ओझर" },
    districtName: { en: "Pune", mr: "पुणे", hi: "पुणे" },
    location: {
      en: "Ozar, Junnar taluka, Pune district, on the bank of the Kukadi river.",
      mr: "ओझर, जुन्नर तालुका, पुणे जिल्हा; कुकडी नदीच्या काठावर.",
      hi: "ओझर, जुन्नर तालुका, पुणे ज़िला; कुकड़ी नदी के किनारे."
    },
    short: {
      en: "At Ozar on the Kukadi river, Ganesha is Vighneshwar, the conqueror of the demon Vighnasura and the remover of obstacles.",
      mr: "कुकडी नदीकाठच्या ओझर येथे गणपती विघ्नेश्वर, म्हणजे विघ्नासुराचा पराभव करणारा आणि विघ्ने दूर करणारा देव.",
      hi: "कुकड़ी नदी किनारे ओझर में गणेशजी विघ्नेश्वर हैं, जिन्होंने विघ्नासुर को हराया और जो बाधाएँ दूर करते हैं."
    },
    significance: {
      en: "Vighneshwar removes obstacles, so devotees pray here before important ventures, exams and journeys.",
      mr: "विघ्नेश्वर विघ्ने दूर करतो, म्हणून महत्त्वाच्या कामांपूर्वी, परीक्षेआधी आणि प्रवासापूर्वी भाविक येथे प्रार्थना करतात.",
      hi: "विघ्नेश्वर बाधाएँ दूर करते हैं, इसलिए भक्त महत्त्वपूर्ण कार्यों, परीक्षा और यात्रा से पहले यहाँ प्रार्थना करते हैं."
    },
    history: {
      en: "Chimaji Appa, brother of Peshwa Bajirao I, is credited with renovating the temple after his victory over the Portuguese at Vasai in 1739. The golden dome is associated with that restoration.",
      mr: "पेशवे पहिले बाजीराव यांचे बंधू चिमाजी अप्पा यांनी १७३९ मध्ये वसईत पोर्तुगीजांवर विजय मिळवल्यानंतर मंदिराचा जीर्णोद्धार केल्याचे मानले जाते. सोनेरी कळस त्या जीर्णोद्धाराशी जोडला जातो.",
      hi: "पेशवा बाजीराव प्रथम के भाई चिमाजी अप्पा ने 1739 में वसई में पुर्तगालियों पर विजय के बाद मंदिर का जीर्णोद्धार कराया, ऐसा माना जाता है. सुनहरा शिखर उसी जीर्णोद्धार से जुड़ा है."
    },
    legend: {
      en: "The demon Vighnasura was born from King Abhinandan's sacrifice and began to disturb rituals everywhere. Ganesha defeated him. When the demon surrendered, Ganesha agreed that the place would carry both their names, so he is Vighneshwar.",
      mr: "राजा अभिनंदन यांच्या यज्ञातून विघ्नासुर जन्मला आणि सर्वत्र धार्मिक कार्यांत अडथळे आणू लागला. गणेशाने त्याचा पराभव केला. असुर शरण आल्यावर गणेशाने या स्थानाला दोघांचे नाव राहील असे मान्य केले, म्हणून तो विघ्नेश्वर.",
      hi: "राजा अभिनंदन के यज्ञ से विघ्नासुर जन्मा और हर जगह अनुष्ठानों में बाधा डालने लगा. गणेशजी ने उसे हराया. असुर के शरण में आने पर गणेशजी ने माना कि इस स्थान पर दोनों का नाम रहेगा, इसलिए वे विघ्नेश्वर कहलाए."
    },
    architecture: {
      en: "A stone-walled enclosure with a paved courtyard, lamp towers and a golden dome over the shrine. The idol faces east with its trunk turned left, a ruby on the forehead and diamonds in the eyes.",
      mr: "दगडी तटबंदी, फरसबंद अंगण, दीपमाळा आणि गाभाऱ्यावर सोनेरी कळस असलेले मंदिर. मूर्ती पूर्वाभिमुख असून सोंड डावीकडे वळलेली आहे; कपाळावर माणिक आणि डोळ्यांत हिरे आहेत.",
      hi: "पत्थर की चारदीवारी, पक्का आँगन, दीपमालाएँ और गर्भगृह पर सुनहरा शिखर. मूर्ति पूर्वमुखी है, सूँड बाईं ओर मुड़ी है, माथे पर माणिक और आँखों में हीरे जड़े हैं."
    },
    festival: {
      en: "Ganesh Chaturthi and Ganesh Jayanti are the main festivals. Lamp towers look lovely when lit on festival evenings.",
      mr: "गणेश चतुर्थी आणि गणेश जयंती हे प्रमुख उत्सव आहेत. उत्सवाच्या संध्याकाळी दीपमाळा उजळल्यावर परिसर सुंदर दिसतो.",
      hi: "गणेश चतुर्थी और गणेश जयंती मुख्य उत्सव हैं. उत्सव की शाम को दीपमालाएँ जलने पर परिसर बहुत सुंदर दिखता है."
    },
    reach: {
      en: "By road: about 85 km from Pune via Narayangaon (around 2 hours), and about 15 km from Lenyadri. Nearest railway station: Pune Junction. Nearest airport: Pune.",
      mr: "रस्त्याने: पुण्यापासून नारायणगावमार्गे सुमारे ८५ किमी (सुमारे २ तास) आणि लेण्याद्रीपासून सुमारे १५ किमी. जवळचे रेल्वे स्थानक: पुणे जंक्शन. जवळचे विमानतळ: पुणे.",
      hi: "सड़क मार्ग: पुणे से नारायणगांव होते हुए लगभग 85 किमी (करीब 2 घंटे) और लेण्याद्रि से लगभग 15 किमी. नज़दीकी रेलवे स्टेशन: पुणे जंक्शन. नज़दीकी हवाई अड्डा: पुणे."
    },
    tip: {
      en: "Ozar and Lenyadri are only about 15 km apart, so visit them together, and add Shivneri fort if you have time.",
      mr: "ओझर आणि लेण्याद्री यांच्यात फक्त सुमारे १५ किमी अंतर आहे, त्यामुळे दोन्ही एकत्र पाहा; वेळ असल्यास शिवनेरी किल्लाही जोडा.",
      hi: "ओझर और लेण्याद्रि के बीच केवल लगभग 15 किमी की दूरी है, इसलिए दोनों साथ देखें; समय हो तो शिवनेरी किला भी जोड़ें."
    },
    aliases: ["ozar", "ojhar", "ozhar", "vighneshwar", "vighneshwara", "vighnahar", "vighnahara", "vigneshwar", "kukadi", "narayangaon", "ओझर", "विघ्नेश्वर", "विघ्नहर", "विघ्नहर्ता", "कुकडी", "कुकड़ी", "नारायणगाव"]
  },

  {
    id: "ranjangaon", order: 8, lat: 18.7514, lng: 74.2381, visitMin: 60, fromPune: 50, district: "pune",
    name: { en: "Shri Mahaganapati Temple", mr: "श्री महागणपती मंदिर", hi: "श्री महागणपति मंदिर" },
    deity: { en: "Mahaganapati", mr: "महागणपती", hi: "महागणपति" },
    village: { en: "Ranjangaon", mr: "रांजणगाव", hi: "रांजणगांव" },
    districtName: { en: "Pune", mr: "पुणे", hi: "पुणे" },
    location: {
      en: "Ranjangaon (Ganpati), Shirur taluka, Pune district, on the Pune-Ahilyanagar highway.",
      mr: "रांजणगाव (गणपतीचे), शिरूर तालुका, पुणे जिल्हा; पुणे-अहिल्यानगर महामार्गावर.",
      hi: "रांजणगांव (गणपति), शिरूर तालुका, पुणे ज़िला; पुणे-अहिल्यानगर राजमार्ग पर."
    },
    short: {
      en: "Mahaganapati of Ranjangaon is the last temple on the usual circuit, where Ganesha is worshipped as the mighty one before the battle with Tripurasura.",
      mr: "रांजणगावचा महागणपती हा नेहमीच्या यात्रेतील शेवटचा गणपती; त्रिपुरासुराशी युद्धापूर्वी येथे गणेशाची पूजा झाली, अशी कथा आहे.",
      hi: "रांजणगांव के महागणपति नियमित यात्रा के अंतिम गणेश हैं; कथा है कि त्रिपुरासुर से युद्ध से पहले यहाँ गणेशजी की पूजा की गई."
    },
    significance: {
      en: "Mahaganapati is associated with strength and with starting difficult tasks well. Pilgrims then return to Morgaon to complete the yatra.",
      mr: "महागणपती हा शक्ती आणि कठीण कामाची चांगली सुरुवात यांच्याशी जोडला जातो. यात्रा पूर्ण करण्यासाठी यात्रेकरू नंतर मोरगावला परततात.",
      hi: "महागणपति शक्ति और कठिन कार्य की अच्छी शुरुआत से जुड़े हैं. यात्रा पूरी करने के लिए यात्री इसके बाद मोरगांव लौटते हैं."
    },
    history: {
      en: "The temple is believed to be very old. Local tradition links the Peshwa Madhavrao with a cellar built to protect the original idol.",
      mr: "हे मंदिर फार प्राचीन असल्याचे मानले जाते. मूळ मूर्तीच्या रक्षणासाठी तळघर बांधल्याची आख्यायिका स्थानिक परंपरेत माधवराव पेशवे यांच्याशी जोडली जाते.",
      hi: "माना जाता है कि यह मंदिर बहुत प्राचीन है. स्थानीय परंपरा में मूल मूर्ति की रक्षा के लिए तहखाना बनवाने की कथा पेशवा माधवराव से जोड़ी जाती है."
    },
    legend: {
      en: "Before fighting the demon Tripurasura, Shiva forgot to pray to Ganesha and failed. He then worshipped Ganesha here and defeated the demon. Local tradition says an older form with ten trunks and twenty arms is kept hidden in a cellar.",
      mr: "त्रिपुरासुराशी लढण्यापूर्वी शंकर गणेशाची पूजा करायला विसरले आणि अपयशी ठरले. मग येथे गणेशाची पूजा करून त्यांनी असुराचा पराभव केला. स्थानिक परंपरेनुसार दहा सोंडा आणि वीस हात असलेले जुने रूप तळघरात ठेवले आहे.",
      hi: "त्रिपुरासुर से युद्ध से पहले शिवजी गणेश-पूजन भूल गए और असफल रहे. फिर यहाँ गणेशजी की पूजा कर उन्होंने असुर को हराया. स्थानीय परंपरा के अनुसार दस सूँड और बीस भुजाओं वाला पुराना रूप तहखाने में छिपा है."
    },
    architecture: {
      en: "The east-facing temple is said to be aligned so that the sun's rays fall on the idol at certain times of the year. The idol sits cross-legged on a lotus with Riddhi and Siddhi, trunk turned left.",
      mr: "पूर्वाभिमुख मंदिराची रचना अशी मानली जाते की वर्षातील ठराविक काळात सूर्यकिरण मूर्तीवर पडतात. मूर्ती कमळावर मांडी घालून बसलेली असून रिद्धी-सिद्धी बाजूला आहेत आणि सोंड डावीकडे वळलेली आहे.",
      hi: "पूर्वमुखी मंदिर की रचना ऐसी मानी जाती है कि वर्ष के कुछ समय सूर्य की किरणें मूर्ति पर पड़ती हैं. मूर्ति कमल पर पालथी मारकर बैठी है, रिद्धि-सिद्धि साथ हैं और सूँड बाईं ओर मुड़ी है."
    },
    festival: {
      en: "Ganesh Chaturthi and Ganesh Jayanti are the main festivals, and the Magh fair is also popular.",
      mr: "गणेश चतुर्थी आणि गणेश जयंती हे प्रमुख उत्सव आहेत; माघातील यात्राही लोकप्रिय आहे.",
      hi: "गणेश चतुर्थी और गणेश जयंती मुख्य उत्सव हैं; माघ का मेला भी लोकप्रिय है."
    },
    reach: {
      en: "By road: about 50 km from Pune on the Pune-Ahilyanagar highway (around 1.5 hours). Nearest big railway stations: Pune Junction and Daund Junction. Nearest airport: Pune.",
      mr: "रस्त्याने: पुणे-अहिल्यानगर महामार्गावर पुण्यापासून सुमारे ५० किमी (सुमारे १.५ तास). जवळची मोठी रेल्वे स्थानके: पुणे जंक्शन आणि दौंड जंक्शन. जवळचे विमानतळ: पुणे.",
      hi: "सड़क मार्ग: पुणे-अहिल्यानगर राजमार्ग पर पुणे से लगभग 50 किमी (करीब 1.5 घंटे). नज़दीकी बड़े रेलवे स्टेशन: पुणे जंक्शन और दौंड जंक्शन. नज़दीकी हवाई अड्डा: पुणे."
    },
    tip: {
      en: "Ranjangaon lies on the way between Pune and Ahilyanagar, so it is easy to add on the way to Morgaon and Siddhatek.",
      mr: "रांजणगाव पुणे आणि अहिल्यानगर यांच्या वाटेवर असल्याने मोरगाव आणि सिद्धटेकच्या प्रवासात ते सहज जोडता येते.",
      hi: "रांजणगांव पुणे और अहिल्यानगर के रास्ते में है, इसलिए मोरगांव और सिद्धटेक की यात्रा में इसे आसानी से जोड़ा जा सकता है."
    },
    aliases: ["ranjangaon", "ranjangav", "ranjan gaon", "mahaganapati", "mahaganpati", "maha ganapati", "shirur", "manipur", "रांजणगाव", "रांजणगांव", "रंजनगांव", "महागणपती", "महागणपति", "शिरूर"]
  }
];

/* ---------------- Nearby attractions ---------------- */
const ATTRACTIONS = [
  {
    id: "shivneri", cat: "fort", lat: 19.1998, lng: 73.8604, visitMin: 150, near: ["lenyadri", "ozar"],
    name: { en: "Shivneri Fort", mr: "शिवनेरी किल्ला", hi: "शिवनेरी किला" },
    desc: {
      en: "A hill fort near Junnar with seven gates, ponds and a temple of Goddess Shivai, set on a rocky hill with wide views.",
      mr: "जुन्नरजवळचा डोंगरी किल्ला; सात दरवाजे, तलाव आणि शिवाई देवीचे मंदिर असलेला, विस्तीर्ण दृश्य दिसणाऱ्या खडकाळ टेकडीवर वसलेला.",
      hi: "जुन्नर के पास का पहाड़ी किला, जिसमें सात द्वार, जलाशय और शिवाई देवी का मंदिर है; चट्टानी पहाड़ी से दूर तक का दृश्य दिखता है."
    },
    significance: {
      en: "Chhatrapati Shivaji Maharaj was born at this fort in 1630.",
      mr: "छत्रपती शिवाजी महाराजांचा जन्म १६३० मध्ये याच किल्ल्यावर झाला.",
      hi: "छत्रपति शिवाजी महाराज का जन्म 1630 में इसी किले में हुआ था."
    },
    aliases: ["shivneri", "shivner", "junnar fort", "शिवनेरी", "जुन्नर"]
  },
  {
    id: "naneghat", cat: "nature", lat: 19.283, lng: 73.741, visitMin: 120, near: ["lenyadri", "ozar"],
    name: { en: "Naneghat Pass", mr: "नाणेघाट", hi: "नाणेघाट" },
    desc: {
      en: "An ancient mountain pass in the Western Ghats with a rock-cut cistern, old inscriptions and dramatic cliff views, best in the cool, green season.",
      mr: "पश्चिम घाटातील प्राचीन घाटमार्ग; खडकात कोरलेले पाण्याचे टाके, जुने शिलालेख आणि नाट्यमय कडे; थंड, हिरव्या ऋतूत सर्वोत्तम.",
      hi: "पश्चिमी घाट का प्राचीन दर्रा, जहाँ चट्टान में कटा जलकुंड, पुराने शिलालेख और शानदार खड़ी चट्टानों के दृश्य हैं; ठंडे, हरे मौसम में सबसे अच्छा."
    },
    significance: {
      en: "It was a trade route between the Konkan coast and Junnar more than two thousand years ago, in the Satavahana period.",
      mr: "दोन हजारांहून अधिक वर्षांपूर्वी सातवाहन काळात कोकण किनारा आणि जुन्नर यांना जोडणारा हा व्यापारी मार्ग होता.",
      hi: "दो हज़ार से अधिक वर्ष पहले सातवाहन काल में यह कोंकण तट और जुन्नर को जोड़ने वाला व्यापारिक मार्ग था."
    },
    aliases: ["naneghat", "nane ghat", "nanaghat", "satavahana", "नाणेघाट", "नाणे घाट", "सातवाहन"]
  },
  {
    id: "sarasgad", cat: "fort", lat: 18.543, lng: 73.232, visitMin: 180, near: ["pali"],
    name: { en: "Sarasgad Fort", mr: "सरसगड किल्ला", hi: "सरसगढ़ किला" },
    desc: {
      en: "A hill fort rising right behind Pali, with a steep stepped climb, old gateways and views over the valley.",
      mr: "पालीच्या अगदी मागे उभा असलेला डोंगरी किल्ला; चढ पायऱ्यांचा, जुने दरवाजे आणि दरीचे सुंदर दृश्य.",
      hi: "पाली के ठीक पीछे खड़ा पहाड़ी किला, जिसकी चढ़ाई सीढ़ियों वाली है; पुराने प्रवेशद्वार और घाटी का सुंदर दृश्य मिलता है."
    },
    significance: {
      en: "It is one of the hill forts that watched over the Sahyadri passes between the Konkan and the plateau.",
      mr: "कोकण आणि देशावर यांना जोडणाऱ्या सह्याद्रीतील घाटमार्गांवर नजर ठेवणाऱ्या डोंगरी किल्ल्यांपैकी हा एक आहे.",
      hi: "यह उन पहाड़ी किलों में से एक है जो कोंकण और पठार के बीच सह्याद्रि के दर्रों पर नज़र रखते थे."
    },
    aliases: ["sarasgad", "sarasgarh", "sarasgad fort", "सरसगड", "सरसगढ़"]
  },
  {
    id: "karla", cat: "heritage", lat: 18.7833, lng: 73.47, visitMin: 120, near: ["pali", "mahad"],
    name: { en: "Karla Caves", mr: "कार्ले लेणी", hi: "कार्ले गुफाएँ" },
    desc: {
      en: "One of the largest and best-preserved rock-cut Buddhist prayer halls in India, near Lonavala, with a lofty pillared hall and carved facade.",
      mr: "लोणावळ्याजवळील, भारतातील सर्वात मोठ्या आणि उत्तम जतन केलेल्या बौद्ध खडक-कोरीव प्रार्थनागृहांपैकी एक; उंच स्तंभांचे सभागृह आणि कोरीव दर्शनी भाग.",
      hi: "लोनावला के पास भारत के सबसे बड़े और सबसे अच्छी तरह सुरक्षित शैलकृत बौद्ध प्रार्थना-कक्षों में से एक; ऊँचा स्तंभों वाला कक्ष और नक्काशीदार मुखभाग."
    },
    significance: {
      en: "The caves date back about two thousand years and lie on the old route that visitors from Pune take towards Pali and Mahad.",
      mr: "या लेण्यांना सुमारे दोन हजार वर्षांचा इतिहास आहे आणि पुण्याहून पाली-महडकडे जाणाऱ्या जुन्या मार्गावर त्या आहेत.",
      hi: "इन गुफाओं का इतिहास लगभग दो हज़ार वर्ष पुराना है और ये उस पुराने मार्ग पर हैं जिससे पुणे से पाली-महड जाने वाले यात्री गुज़रते हैं."
    },
    aliases: ["karla", "karle", "karla caves", "karle leni", "lonavala", "ekvira", "bhaja", "कार्ले", "कार्ला", "लोणावळा", "लोनावला", "एकवीरा"]
  },
  {
    id: "shaniwarwada", cat: "heritage", lat: 18.5195, lng: 73.8553, visitMin: 90, near: ["theur"],
    name: { en: "Shaniwar Wada", mr: "शनिवारवाडा", hi: "शनिवारवाडा" },
    desc: {
      en: "The grand fortified palace of the Peshwas in Pune, with massive gates, fountains and stone-walled grounds.",
      mr: "पुण्यातील पेशव्यांचा भव्य तटबंदीयुक्त राजवाडा; प्रचंड दरवाजे, कारंजी आणि दगडी तटबंदी असलेला परिसर.",
      hi: "पुणे में पेशवाओं का भव्य किलेबंद महल, जिसमें विशाल द्वार, फ़व्वारे और पत्थर की दीवारों वाला परिसर है."
    },
    significance: {
      en: "Built in 1732 as the seat of Peshwa power; much of its wooden structure burned in 1828.",
      mr: "१७३२ मध्ये पेशव्यांच्या सत्तेचे केंद्र म्हणून बांधला; १८२८ मध्ये त्यातील बराचसा लाकडी भाग जळून गेला.",
      hi: "1732 में पेशवा सत्ता के केंद्र के रूप में बना; 1828 में इसका अधिकांश लकड़ी का भाग जल गया."
    },
    aliases: ["shaniwar wada", "shaniwarwada", "shanivar wada", "peshwa palace", "pune", "शनिवारवाडा", "शनिवार वाडा", "पुणे", "पेशवा"]
  },
  {
    id: "bhigwan", cat: "nature", lat: 18.314, lng: 74.78, visitMin: 150, near: ["siddhatek", "morgaon"],
    name: { en: "Bhigwan Bird Sanctuary", mr: "भिगवण पक्षी अभयारण्य", hi: "भिगवण पक्षी अभयारण्य" },
    desc: {
      en: "Backwaters of the Ujani reservoir, famous for migratory birds such as flamingos. The best months are roughly November to February.",
      mr: "उजनी जलाशयाचे पाणलोट क्षेत्र; रोहित (फ्लेमिंगो) सारख्या स्थलांतरित पक्ष्यांसाठी प्रसिद्ध. सर्वोत्तम काळ साधारण नोव्हेंबर ते फेब्रुवारी.",
      hi: "उजनी जलाशय का बैकवॉटर, जो फ्लेमिंगो जैसे प्रवासी पक्षियों के लिए प्रसिद्ध है. सबसे अच्छा समय लगभग नवंबर से फ़रवरी है."
    },
    significance: {
      en: "A popular bird-watching spot for people travelling towards Siddhatek and Morgaon.",
      mr: "सिद्धटेक आणि मोरगावकडे जाणाऱ्यांसाठी पक्षीनिरीक्षणाचे लोकप्रिय ठिकाण.",
      hi: "सिद्धटेक और मोरगांव की ओर जाने वालों के लिए पक्षी-दर्शन का लोकप्रिय स्थान."
    },
    aliases: ["bhigwan", "bhigvan", "ujani", "flamingo", "bird sanctuary", "भिगवण", "उजनी", "रोहित", "फ्लेमिंगो"]
  },
  {
    id: "jejuri", cat: "temple", lat: 18.2763, lng: 74.1604, visitMin: 90, near: ["morgaon"],
    name: { en: "Jejuri Khandoba Temple", mr: "जेजुरी खंडोबा मंदिर", hi: "जेजुरी खंडोबा मंदिर" },
    desc: {
      en: "A hill-top temple of Khandoba, known as the 'golden city' for the turmeric (bhandara) offered by devotees, with tall stone lamp pillars.",
      mr: "खंडोबाचे डोंगरावरील मंदिर; भाविक उधळतात त्या भंडाऱ्यामुळे 'सोन्याची जेजुरी' म्हणून ओळखले जाते; उंच दगडी दीपमाळा आहेत.",
      hi: "खंडोबा का पहाड़ी मंदिर, जो भक्तों द्वारा चढ़ाई गई हल्दी (भंडारा) के कारण 'सोने की जेजुरी' कहलाता है; यहाँ ऊँचे पत्थर के दीपस्तंभ हैं."
    },
    significance: {
      en: "One of Maharashtra's most important Khandoba shrines, only about 15 km from Morgaon.",
      mr: "महाराष्ट्रातील सर्वात महत्त्वाच्या खंडोबा क्षेत्रांपैकी एक; मोरगावपासून फक्त सुमारे १५ किमी.",
      hi: "महाराष्ट्र के सबसे महत्त्वपूर्ण खंडोबा तीर्थों में से एक, मोरगांव से केवल लगभग 15 किमी दूर."
    },
    aliases: ["jejuri", "jejoori", "khandoba", "khandobachi jejuri", "सोन्याची जेजुरी", "जेजुरी", "खंडोबा"]
  }
];

/* ---------------- Gallery (built from the data above) ---------------- */
const GALLERY = [
  ...TEMPLES.map(t => ({ id: t.id, cat: "temple", img: "images/" + t.id + ".svg", name: t.name, place: t.village, link: "temple.html?id=" + t.id })),
  ...ATTRACTIONS.map(a => ({ id: a.id, cat: a.cat, img: "images/" + a.id + ".svg", name: a.name, place: a.name, link: "nearby.html#" + a.id, aliases: a.aliases }))
];
