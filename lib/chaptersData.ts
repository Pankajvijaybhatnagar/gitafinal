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
    youtubeVideoId: "tPqJdm2_rNc",
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
          en: "This opening verse sets the stage for the Bhagavad Gita. Dhritarashtra, the blind king, asks his charioteer Sanjaya about the events on the battlefield, revealing his anxiety about the outcome.",
          hi: "यह प्रारंभिक श्लोक भगवद गीता के लिए मंच तैयार करता है। अंधे राजा धृतराष्ट्र अपने सारथी संजय से युद्धक्षेत्र की घटनाओं के बारे में पूछते हैं, जो परिणाम के बारे में उनकी चिंता को प्रकट करता है।"
        }
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
        }
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
    youtubeVideoId: "a0BV0SuOHWY",
    shlokas: []
  }
];
