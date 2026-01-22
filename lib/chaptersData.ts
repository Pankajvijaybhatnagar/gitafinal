export interface Shloka {
  number: number;
  sanskrit: string;
  transliteration: string;
  translation: {
    en: string;
    hi: string;
  };
  commentary: {
    en: string;
    hi: string;
  };
  audioUrl?: string; // Optional audio URL for Sanskrit recitation
}

export interface Chapter {
  number: number;
  nameHindi: string;
  nameEnglish: string;
  nameSanskrit: string;
  subtitle: string;
  verses: number;
  theme: string;
  description: {
    en: string;
    hi: string;
  };
  keyTeachings?: {
    en: string[];
    hi: string[];
  };
  youtubeVideoId?: string;
  shlokas: Shloka[];
}

export const chaptersData: Chapter[] = [
  {
    number: 1,
    nameHindi: "अर्जुन विषाद योग",
    nameEnglish: "Arjuna Vishada Yoga",
    nameSanskrit: "अर्जुनविषादयोगः",
    subtitle: "The Yoga of Arjuna's Dejection",
    verses: 47,
    theme: "Confusion and despair",
    description: {
      en: "Arjuna's moral dilemma on the battlefield of Kurukshetra, questioning the righteousness of war against his own kinsmen.",
      hi: "कुरुक्षेत्र के युद्ध के मैदान में अर्जुन की नैतिक दुविधा, अपने ही परिजनों के खिलाफ युद्ध की धार्मिकता पर सवाल उठाते हुए।"
    },
    keyTeachings: {
      en: [
        "Moral dilemmas are part of human existence",
        "Emotional attachment can cloud judgment",
        "The importance of seeking divine guidance in crisis",
        "Understanding one's duty (dharma) is essential"
      ],
      hi: [
        "नैतिक दुविधाएं मानव अस्तित्व का हिस्सा हैं",
        "भावनात्मक लगाव निर्णय को धुंधला कर सकता है",
        "संकट में दिव्य मार्गदर्शन प्राप्त करने का महत्व",
        "अपने कर्तव्य (धर्म) को समझना आवश्यक है"
      ]
    },
    youtubeVideoId: "ey6s1L7WJT4",
    shlokas: [
      {
        number: 1,
        sanskrit: "धृतराष्ट्र उवाच। धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।",
        transliteration: "dhritarashtra uvacha | dharma-kshetre kuru-kshetre samaveta yuyutsavah | mamakah pandavash chaiva kimakurvata sanjaya ||",
        translation: {
          en: "Dhritarashtra said: O Sanjaya, after gathering on the holy field of Kurukshetra, desiring to fight, what did my sons and the sons of Pandu do?",
          hi: "धृतराष्ट्र ने कहा: हे संजय, धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र होकर मेरे और पांडु के पुत्रों ने क्या किया?"
        },
        commentary: {
          en: "This opening verse sets the stage for the Bhagwad Gita. Dhritarashtra, the blind king, asks his charioteer Sanjaya about the events on the battlefield, revealing his anxiety about the outcome.",
          hi: "यह प्रारंभिक श्लोक भगवद गीता के लिए मंच तैयार करता है। अंधे राजा धृतराष्ट्र अपने सारथी संजय से युद्धक्षेत्र की घटनाओं के बारे में पूछते हैं, जो परिणाम के बारे में उनकी चिंता को प्रकट करता है।"
        },
        audioUrl: "/audio/chapter-1/verse-1.mp3"
      }
    ]
  },
  {
    number: 2,
    nameHindi: "सांख्य योग",
    nameEnglish: "Sankhya Yoga",
    nameSanskrit: "सांख्ययोगः",
    subtitle: "The Yoga of Knowledge",
    verses: 72,
    theme: "Knowledge of the self",
    description: {
      en: "Krishna teaches Arjuna about the eternal soul, the nature of reality, and the path of selfless action.",
      hi: "कृष्ण अर्जुन को शाश्वत आत्मा, वास्तविकता की प्रकृति और निस्वार्थ कर्म के मार्ग के बारे में सिखाते हैं।"
    },
    keyTeachings: {
      en: [
        "The soul is eternal and indestructible",
        "The body is temporary and subject to change",
        "Perform your duty without attachment to results",
        "Equanimity in success and failure leads to peace",
        "Knowledge of the self liberates from grief"
      ],
      hi: [
        "आत्मा शाश्वत और अविनाशी है",
        "शरीर अस्थायी और परिवर्तन के अधीन है",
        "फल की आसक्ति के बिना अपना कर्तव्य निभाएं",
        "सफलता और असफलता में समभाव शांति की ओर ले जाता है",
        "आत्म-ज्ञान दुःख से मुक्त करता है"
      ]
    },
    youtubeVideoId: "4YfY3jW8MQM",
    shlokas: [
      {
        number: 47,
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
        transliteration: "karmany evadhikaras te ma phaleshu kadachana | ma karma-phala-hetur bhur ma te sango 'stv akarmani ||",
        translation: {
          en: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
          hi: "तुम्हारा कर्म करने में अधिकार है, परन्तु फल में कभी नहीं। कर्मफल का हेतु मत बनो और न ही कर्म न करने में आसक्त होओ।"
        },
        commentary: {
          en: "This is one of the most famous verses of the Gita, teaching the principle of Karma Yoga - performing one's duty without attachment to results.",
          hi: "यह गीता के सबसे प्रसिद्ध श्लोकों में से एक है, जो कर्म योग के सिद्धांत को सिखाता है - फल की आसक्ति के बिना अपने कर्तव्य का पालन करना।"
        },
        audioUrl: "/audio/chapter-2/verse-47.mp3"
      }
    ]
  },
  {
    number: 3,
    nameHindi: "कर्म योग",
    nameEnglish: "Karma Yoga",
    nameSanskrit: "कर्मयोगः",
    subtitle: "The Yoga of Action",
    verses: 43,
    theme: "Path of selfless action",
    description: {
      en: "The importance of performing one's duty without attachment to results and the concept of selfless service.",
      hi: "परिणामों के प्रति आसक्ति के बिना अपने कर्तव्य को निभाने का महत्व और निस्वार्थ सेवा की अवधारणा।"
    },
    keyTeachings: {
      en: [
        "Action is inevitable and necessary for existence",
        "Perform duties as a service to others and to God",
        "Work without selfish motives and ego",
        "Lead by example through righteous action",
        "Sacrifice and selfless service purify the mind"
      ],
      hi: [
        "कर्म अनिवार्य और अस्तित्व के लिए आवश्यक है",
        "दूसरों और भगवान की सेवा के रूप में कर्तव्यों का पालन करें",
        "स्वार्थी उद्देश्यों और अहंकार के बिना काम करें",
        "धार्मिक कर्म के माध्यम से उदाहरण प्रस्तुत करें",
        "त्याग और निस्वार्थ सेवा मन को शुद्ध करती है"
      ]
    },
    youtubeVideoId: "wxdHciSZe8U",
    shlokas: []
  },
  {
    number: 4,
    nameHindi: "ज्ञान कर्म संन्यास योग",
    nameEnglish: "Jnana Karma Sanyasa Yoga",
    nameSanskrit: "ज्ञानकर्मसंन्यासयोगः",
    subtitle: "The Yoga of Wisdom and Action",
    verses: 42,
    theme: "Divine manifestation",
    description: {
      en: "Divine incarnations, the significance of sacrifice, and the relationship between knowledge and action.",
      hi: "दिव्य अवतार, बलिदान का महत्व, और ज्ञान और कर्म के बीच संबंध।"
    },
    keyTeachings: {
      en: [
        "God incarnates to protect righteousness and destroy evil",
        "Divine knowledge must be received from a qualified teacher",
        "Action performed in knowledge does not bind",
        "Sacrifice purifies and elevates consciousness",
        "Transcendental knowledge burns all karmic reactions"
      ],
      hi: [
        "भगवान धर्म की रक्षा और बुराई को नष्ट करने के लिए अवतार लेते हैं",
        "दिव्य ज्ञान एक योग्य शिक्षक से प्राप्त होना चाहिए",
        "ज्ञान में किया गया कर्म बांधता नहीं है",
        "यज्ञ चेतना को शुद्ध और उन्नत करता है",
        "आध्यात्मिक ज्ञान सभी कर्म प्रतिक्रियाओं को जला देता है"
      ]
    },
    youtubeVideoId: "5JLxN_Tcdis",
    shlokas: []
  },
  {
    number: 5,
    nameHindi: "कर्म संन्यास योग",
    nameEnglish: "Karma Sanyasa Yoga",
    nameSanskrit: "कर्मसंन्यासयोगः",
    subtitle: "The Yoga of Renunciation",
    verses: 29,
    theme: "Renunciation through action",
    description: {
      en: "The path of renunciation and the yoga of action, explaining their complementary nature.",
      hi: "संन्यास का मार्ग और कर्म योग, उनकी पूरक प्रकृति की व्याख्या।"
    },
    keyTeachings: {
      en: [
        "Both renunciation and action lead to liberation",
        "Action yoga is easier and safer than complete renunciation",
        "See God in all beings and all beings in God",
        "Control of mind and senses leads to tranquility",
        "True knowledge brings equality of vision"
      ],
      hi: [
        "संन्यास और कर्म दोनों मुक्ति की ओर ले जाते हैं",
        "कर्म योग पूर्ण संन्यास से आसान और सुरक्षित है",
        "सभी प्राणियों में भगवान को और भगवान में सभी प्राणियों को देखें",
        "मन और इंद्रियों का नियंत्रण शांति की ओर ले जाता है",
        "सच्चा ज्ञान समदर्शिता लाता है"
      ]
    },
    youtubeVideoId: "P-OMH-VJXf0",
    shlokas: []
  },
  {
    number: 6,
    nameHindi: "ध्यान योग",
    nameEnglish: "Dhyana Yoga",
    nameSanskrit: "ध्यानयोगः",
    subtitle: "The Yoga of Meditation",
    verses: 47,
    theme: "Meditation and mind control",
    description: {
      en: "The practice of meditation, controlling the mind, and achieving inner peace and self-realization.",
      hi: "ध्यान का अभ्यास, मन को नियंत्रित करना, और आंतरिक शांति और आत्म-साक्षात्कार प्राप्त करना।"
    },
    keyTeachings: {
      en: [
        "The mind must be trained through practice and detachment",
        "Moderation in all activities supports yoga practice",
        "A controlled mind is your best friend, uncontrolled is your worst enemy",
        "Yoga is broken in birth but can be resumed in the next life",
        "The supreme yogi is one who is devoted to God with love"
      ],
      hi: [
        "मन को अभ्यास और वैराग्य के माध्यम से प्रशिक्षित किया जाना चाहिए",
        "सभी गतिविधियों में संयम योग अभ्यास का समर्थन करता है",
        "एक नियंत्रित मन आपका सबसे अच्छा मित्र है, अनियंत्रित सबसे बुरा शत्रु है",
        "योग जन्म में टूट जाता है लेकिन अगले जन्म में फिर से शुरू किया जा सकता है",
        "सर्वोच्च योगी वह है जो प्रेम के साथ भगवान को समर्पित है"
      ]
    },
    youtubeVideoId: "uK_TL8Cm_rI",
    shlokas: []
  },
  {
    number: 7,
    nameHindi: "ज्ञान विज्ञान योग",
    nameEnglish: "Jnana Vijnana Yoga",
    nameSanskrit: "ज्ञानविज्ञानयोगः",
    subtitle: "The Yoga of Knowledge and Wisdom",
    verses: 30,
    theme: "Divine knowledge",
    description: {
      en: "The distinction between material and spiritual knowledge, and the nature of the Supreme.",
      hi: "भौतिक और आध्यात्मिक ज्ञान के बीच अंतर, और परमात्मा की प्रकृति।"
    },
    keyTeachings: {
      en: [
        "Knowledge of God includes both theoretical and practical understanding",
        "Material nature consists of three modes that bind the soul",
        "God is the source of all creation",
        "Four types of people worship God with different motivations",
        "Direct realization of God is rare and precious"
      ],
      hi: [
        "भगवान का ज्ञान सैद्धांतिक और व्यावहारिक दोनों समझ को शामिल करता है",
        "भौतिक प्रकृति में तीन गुण होते हैं जो आत्मा को बांधते हैं",
        "भगवान सभी सृष्टि के स्रोत हैं",
        "चार प्रकार के लोग विभिन्न प्रेरणाओं से भगवान की पूजा करते हैं",
        "भगवान की प्रत्यक्ष प्राप्ति दुर्लभ और मूल्यवान है"
      ]
    },
    youtubeVideoId: "w3l-zxYQ3Po",
    shlokas: []
  },
  {
    number: 8,
    nameHindi: "अक्षर ब्रह्म योग",
    nameEnglish: "Aksara Brahma Yoga",
    nameSanskrit: "अक्षरब्रह्मयोगः",
    subtitle: "The Yoga of the Imperishable Absolute",
    verses: 28,
    theme: "Path to the Supreme",
    description: {
      en: "The imperishable Brahman, the supreme destination, and the moment of death's significance.",
      hi: "अविनाशी ब्रह्म, परम गंतव्य, और मृत्यु के क्षण का महत्व।"
    },
    keyTeachings: {
      en: [
        "Constant remembrance of God leads to attaining Him",
        "The state of mind at death determines the next life",
        "Different paths exist for souls after leaving the body",
        "Regular practice makes remembrance natural at death",
        "Devotion to Krishna ensures return to the spiritual world"
      ],
      hi: [
        "भगवान का निरंतर स्मरण उन्हें प्राप्त करने की ओर ले जाता है",
        "मृत्यु के समय मन की स्थिति अगले जीवन को निर्धारित करती है",
        "शरीर छोड़ने के बाद आत्माओं के लिए विभिन्न मार्ग मौजूद हैं",
        "नियमित अभ्यास मृत्यु के समय स्मरण को स्वाभाविक बनाता है",
        "कृष्ण की भक्ति आध्यात्मिक संसार में वापसी सुनिश्चित करती है"
      ]
    },
    youtubeVideoId: "bxULfbHKfjo",
    shlokas: []
  },
  {
    number: 9,
    nameHindi: "राज विद्या राज गुह्य योग",
    nameEnglish: "Raja Vidya Raja Guhya Yoga",
    nameSanskrit: "राजविद्याराजगुह्ययोगः",
    subtitle: "The Yoga of Royal Knowledge",
    verses: 34,
    theme: "Supreme secret",
    description: {
      en: "The most confidential knowledge about devotion and God's immanence in all creation.",
      hi: "भक्ति और सभी सृष्टि में भगवान की उपस्थिति के बारे में सबसे गोपनीय ज्ञान।"
    },
    keyTeachings: {
      en: [
        "This knowledge is the king of all knowledge",
        "God pervades everything yet remains transcendent",
        "Simple devotion is more powerful than complex rituals",
        "God accepts offerings made with love",
        "Those who worship with devotion never perish"
      ],
      hi: [
        "यह ज्ञान सभी ज्ञान का राजा है",
        "भगवान सब कुछ व्याप्त करते हैं फिर भी परमात्मा बने रहते हैं",
        "सरल भक्ति जटिल अनुष्ठानों से अधिक शक्तिशाली है",
        "भगवान प्रेम से दी गई भेंट स्वीकार करते हैं",
        "जो भक्ति के साथ पूजा करते हैं वे कभी नष्ट नहीं होते"
      ]
    },
    youtubeVideoId: "HqQ-5vR0yDw",
    shlokas: []
  },
  {
    number: 10,
    nameHindi: "विभूति योग",
    nameEnglish: "Vibhuti Yoga",
    nameSanskrit: "विभूतियोगः",
    subtitle: "The Yoga of Divine Glories",
    verses: 42,
    theme: "Divine manifestations",
    description: {
      en: "The divine manifestations and glories of the Supreme in the material world.",
      hi: "भौतिक जगत में परमात्मा की दिव्य अभिव्यक्तियाँ और महिमा।"
    },
    keyTeachings: {
      en: [
        "God is present in the most excellent of all categories",
        "Recognizing divine presence in creation leads to devotion",
        "God is the source of all opulences",
        "Knowledge of God's glories increases love for Him",
        "Everything wonderful in creation is a spark of divine glory"
      ],
      hi: [
        "भगवान सभी श्रेणियों के सबसे उत्कृष्ट में मौजूद हैं",
        "सृष्टि में दिव्य उपस्थिति को पहचानना भक्ति की ओर ले जाता है",
        "भगवान सभी ऐश्वर्यों के स्रोत हैं",
        "भगवान की महिमा का ज्ञान उनके लिए प्रेम बढ़ाता है",
        "सृष्टि में सब कुछ अद्भुत दिव्य महिमा की चिंगारी है"
      ]
    },
    youtubeVideoId: "nV4L8Hj7Pos",
    shlokas: []
  },
  {
    number: 11,
    nameHindi: "विश्वरूप दर्शन योग",
    nameEnglish: "Vishvarupa Darshana Yoga",
    nameSanskrit: "विश्वरूपदर्शनयोगः",
    subtitle: "The Yoga of the Universal Form",
    verses: 55,
    theme: "Cosmic vision",
    description: {
      en: "Krishna reveals His universal form to Arjuna, displaying the entire cosmos within Him.",
      hi: "कृष्ण अर्जुन को अपना विश्वरूप दिखाते हैं, उनमें संपूर्ण ब्रह्मांड को प्रदर्शित करते हुए।"
    },
    keyTeachings: {
      en: [
        "God's form is beyond material comprehension",
        "Divine vision is required to see God's universal form",
        "Everything exists within the Supreme",
        "God is both immanent and transcendent",
        "Pure devotion is superior to being awed by power"
      ],
      hi: [
        "भगवान का रूप भौतिक समझ से परे है",
        "भगवान के विश्वरूप को देखने के लिए दिव्य दृष्टि की आवश्यकता है",
        "सब कुछ परमात्मा के भीतर अस्तित्व में है",
        "भगवान अंतर्निहित और परमात्मा दोनों हैं",
        "शुद्ध भक्ति शक्ति से विस्मित होने से बेहतर है"
      ]
    },
    youtubeVideoId: "DZKx5N0-xGM",
    shlokas: []
  },
  {
    number: 12,
    nameHindi: "भक्ति योग",
    nameEnglish: "Bhakti Yoga",
    nameSanskrit: "भक्तियोगः",
    subtitle: "The Yoga of Devotion",
    verses: 20,
    theme: "Path of devotion",
    description: {
      en: "The path of devotion and love towards God as the highest form of yoga.",
      hi: "भगवान के प्रति भक्ति और प्रेम का मार्ग योग के सर्वोच्च रूप के रूप में।"
    },
    keyTeachings: {
      en: [
        "Devotion to the personal form of God is the easiest path",
        "True devotees are dear to everyone and everyone is dear to them",
        "Equanimity and compassion are marks of devotion",
        "Even small steps in devotion lead to great results",
        "God reciprocates with those who love Him"
      ],
      hi: [
        "भगवान के व्यक्तिगत रूप की भक्ति सबसे आसान मार्ग है",
        "सच्चे भक्त सभी को प्रिय होते हैं और सभी उन्हें प्रिय होते हैं",
        "समभाव और करुणा भक्ति के चिह्न हैं",
        "भक्ति में छोटे कदम भी महान परिणाम की ओर ले जाते हैं",
        "भगवान उनके साथ प्रतिक्रिया करते हैं जो उनसे प्रेम करते हैं"
      ]
    },
    youtubeVideoId: "EkN7w-LPCRY",
    shlokas: []
  },
  {
    number: 13,
    nameHindi: "क्षेत्र क्षेत्रज्ञ विभाग योग",
    nameEnglish: "Kshetra Kshetrajna Vibhaga Yoga",
    nameSanskrit: "क्षेत्रक्षेत्रज्ञविभागयोगः",
    subtitle: "The Yoga of the Field and Knower",
    verses: 35,
    theme: "Matter and spirit",
    description: {
      en: "The distinction between the body (field) and the soul (knower of the field).",
      hi: "शरीर (क्षेत्र) और आत्मा (क्षेत्र के ज्ञाता) के बीच अंतर।"
    },
    keyTeachings: {
      en: [
        "The body is the field, the soul is the knower",
        "Knowledge means understanding this distinction",
        "Humility and detachment are signs of true knowledge",
        "The Supreme Soul witnesses from within all bodies",
        "Realizing the difference between matter and spirit brings liberation"
      ],
      hi: [
        "शरीर क्षेत्र है, आत्मा ज्ञाता है",
        "ज्ञान का अर्थ है इस अंतर को समझना",
        "विनम्रता और वैराग्य सच्चे ज्ञान के संकेत हैं",
        "परमात्मा सभी शरीरों के भीतर से साक्षी है",
        "पदार्थ और आत्मा के बीच अंतर को समझना मुक्ति लाता है"
      ]
    },
    youtubeVideoId: "4OcEy7m_Qk4",
    shlokas: []
  },
  {
    number: 14,
    nameHindi: "गुणत्रय विभाग योग",
    nameEnglish: "Gunatraya Vibhaga Yoga",
    nameSanskrit: "गुणत्रयविभागयोगः",
    subtitle: "The Yoga of Three Modes",
    verses: 27,
    theme: "Three modes of nature",
    description: {
      en: "The three modes of material nature (gunas) and their influence on living beings.",
      hi: "प्रकृति के तीन गुण (सत्व, रजस, तमस) और जीवों पर उनका प्रभाव।"
    },
    keyTeachings: {
      en: [
        "Three gunas influence all living beings",
        "Sattva binds through happiness and knowledge",
        "Rajas binds through attachment to action and results",
        "Tamas binds through ignorance and laziness",
        "Transcending the gunas through devotion brings liberation"
      ],
      hi: [
        "तीन गुण सभी जीवों को प्रभावित करते हैं",
        "सत्व सुख और ज्ञान के माध्यम से बांधता है",
        "रजस कर्म और परिणामों की आसक्ति के माध्यम से बांधता है",
        "तमस अज्ञान और आलस्य के माध्यम से बांधता है",
        "भक्ति के माध्यम से गुणों को पार करना मुक्ति लाता है"
      ]
    },
    youtubeVideoId: "cq5jzN_G1Zc",
    shlokas: []
  },
  {
    number: 15,
    nameHindi: "पुरुषोत्तम योग",
    nameEnglish: "Purushottama Yoga",
    nameSanskrit: "पुरुषोत्तमयोगः",
    subtitle: "The Yoga of the Supreme Person",
    verses: 20,
    theme: "Supreme being",
    description: {
      en: "The Supreme Person who transcends both the perishable and imperishable.",
      hi: "परम पुरुष जो नाशवान और अविनाशी दोनों से परे हैं।"
    },
    keyTeachings: {
      en: [
        "The material world is like an inverted tree with roots above",
        "One must cut attachment to this world with determination",
        "The Supreme Person is beyond the perishable and imperishable",
        "Knowing Krishna as Purushottama brings complete knowledge",
        "Such knowledge leads to worship with full heart"
      ],
      hi: [
        "भौतिक संसार ऊपर की जड़ों वाले उल्टे पेड़ की तरह है",
        "इस संसार की आसक्ति को दृढ़ता से काटना चाहिए",
        "परम पुरुष नाशवान और अविनाशी दोनों से परे है",
        "कृष्ण को पुरुषोत्तम के रूप में जानना पूर्ण ज्ञान लाता है",
        "ऐसा ज्ञान पूर्ण हृदय से पूजा की ओर ले जाता है"
      ]
    },
    youtubeVideoId: "8pUz0vMm_ro",
    shlokas: []
  },
  {
    number: 16,
    nameHindi: "दैवासुर सम्पद विभाग योग",
    nameEnglish: "Daivasura Sampad Vibhaga Yoga",
    nameSanskrit: "दैवासुरसम्पद्विभागयोगः",
    subtitle: "The Yoga of Divine and Demonic",
    verses: 24,
    theme: "Divine vs demonic traits",
    description: {
      en: "The divine and demonic qualities in human beings and their consequences.",
      hi: "मनुष्यों में दैवीय और आसुरी गुण और उनके परिणाम।"
    },
    keyTeachings: {
      en: [
        "Divine qualities include fearlessness, purity, and compassion",
        "Demonic qualities include pride, anger, and arrogance",
        "Following scriptures leads to elevation",
        "Ignoring scriptures leads to degradation",
        "Self-knowledge helps in cultivating divine qualities"
      ],
      hi: [
        "दैवीय गुणों में निर्भयता, पवित्रता और करुणा शामिल हैं",
        "आसुरी गुणों में अभिमान, क्रोध और घमंड शामिल हैं",
        "शास्त्रों का पालन उन्नति की ओर ले जाता है",
        "शास्त्रों की उपेक्षा अधोगति की ओर ले जाती है",
        "आत्म-ज्ञान दैवीय गुणों को विकसित करने में मदद करता है"
      ]
    },
    youtubeVideoId: "0cqSj6Gu4hk",
    shlokas: []
  },
  {
    number: 17,
    nameHindi: "श्रद्धात्रय विभाग योग",
    nameEnglish: "Shraddhatraya Vibhaga Yoga",
    nameSanskrit: "श्रद्धात्रयविभागयोगः",
    subtitle: "The Yoga of Three Kinds of Faith",
    verses: 28,
    theme: "Types of faith",
    description: {
      en: "The three types of faith corresponding to the three gunas and their expressions.",
      hi: "तीन प्रकार की श्रद्धा जो तीन गुणों से संबंधित हैं और उनकी अभिव्यक्तियाँ।"
    },
    keyTeachings: {
      en: [
        "Faith is inherent in all beings according to their nature",
        "Three types of faith correspond to three gunas",
        "Food in goodness promotes health and happiness",
        "True austerity includes control of body, speech, and mind",
        "Charity should be given to the right person at the right time"
      ],
      hi: [
        "श्रद्धा सभी प्राणियों में उनकी प्रकृति के अनुसार निहित है",
        "तीन प्रकार की श्रद्धा तीन गुणों से संबंधित है",
        "सात्विक भोजन स्वास्थ्य और सुख को बढ़ावा देता है",
        "सच्ची तपस्या में शरीर, वाणी और मन का नियंत्रण शामिल है",
        "दान सही व्यक्ति को सही समय पर दिया जाना चाहिए"
      ]
    },
    youtubeVideoId: "YlNzEqobMgc",
    shlokas: []
  },
  {
    number: 18,
    nameHindi: "मोक्ष संन्यास योग",
    nameEnglish: "Moksha Sanyasa Yoga",
    nameSanskrit: "मोक्षसंन्यासयोगः",
    subtitle: "The Yoga of Liberation",
    verses: 78,
    theme: "Ultimate liberation",
    description: {
      en: "The culmination of all teachings, the path to final liberation, and complete surrender.",
      hi: "सभी शिक्षाओं की परिणति, अंतिम मुक्ति का मार्ग, और पूर्ण समर्पण।"
    },
    keyTeachings: {
      en: [
        "Renunciation means giving up attachment, not action itself",
        "All actions should be performed as duty without desire",
        "Understanding the three types of knowledge, action, and doer",
        "Complete surrender to God is the ultimate teaching",
        "Faith in scriptures and the teacher leads to liberation"
      ],
      hi: [
        "संन्यास का अर्थ है आसक्ति का त्याग, न कि कर्म का",
        "सभी कर्म कर्तव्य के रूप में इच्छा के बिना किए जाने चाहिए",
        "तीन प्रकार के ज्ञान, कर्म और कर्ता को समझना",
        "भगवान के प्रति पूर्ण समर्पण अंतिम शिक्षा है",
        "शास्त्रों और गुरु में विश्वास मुक्ति की ओर ले जाता है"
      ]
    },
    youtubeVideoId: "a0BV0SuOHWY",
    shlokas: []
  }
];