'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Play, Pause, ChevronLeft, ChevronRight, Home, BookOpen, Info } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import { chaptersData } from '@/lib/chaptersData';

/* ================================
   AUDIO PLAYER COMPONENT
================================ */
function AudioPlayer({ audioUrl }: { audioUrl?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!audioUrl) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-xl p-4 flex items-center gap-4 shadow-xl border border-purple-500/30">
      <audio ref={audioRef} src={audioUrl} />
      
      <motion.button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="ml-1 text-white" />}
      </motion.button>

      <div className="flex-1 flex items-center gap-3">
        <span className="text-xs text-amber-300 font-semibold whitespace-nowrap">
          {formatTime(currentTime)}
        </span>
        <div className="flex-1 h-2 bg-indigo-950/50 rounded-full overflow-hidden border border-purple-500/30">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-100 shadow-lg"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <span className="text-xs text-amber-300 font-semibold whitespace-nowrap">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}

/* ================================
   VERSE DETAIL CONTENT
================================ */
function VerseDetailContent({ params }: { params: { chapterId: string; verseId: string } }) {
  const chapterId = parseInt(params.chapterId, 10);
  const verseId = parseInt(params.verseId, 10);
  const { language } = useLanguage();
  const [showChapterInfo, setShowChapterInfo] = useState(true);
  
  const chapter = chaptersData.find(c => c.number === chapterId);
  
  // Check if chapter exists
  if (!chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
        <Header />
        <div className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
                {language === 'hi' ? 'अध्याय नहीं मिला' : 'Chapter Not Found'}
              </h1>
              <p className="text-xl text-amber-700 mb-8">
                {language === 'hi' 
                  ? 'आप जो अध्याय खोज रहे हैं वह मौजूद नहीं है।' 
                  : 'The chapter you are looking for does not exist.'}
              </p>
            </motion.div>
            <Link href="/chapters">
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'hi' ? 'सभी अध्यायों पर वापस जाएं' : 'Back to All Chapters'}
              </motion.button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Check if verse number is valid
  if (verseId < 1 || verseId > chapter.verses) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
        <Header />
        <div className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
                {language === 'hi' ? 'अमान्य श्लोक संख्या' : 'Invalid Verse Number'}
              </h1>
              <p className="text-xl text-amber-700 mb-4">
                {language === 'hi' 
                  ? `अध्याय ${chapterId} में केवल ${chapter.verses} श्लोक हैं।` 
                  : `Chapter ${chapterId} only has ${chapter.verses} verses.`}
              </p>
              <p className="text-lg text-amber-600 mb-8">
                {language === 'hi'
                  ? `कृपया 1 से ${chapter.verses} के बीच का श्लोक चुनें।`
                  : `Please choose a verse between 1 and ${chapter.verses}.`}
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/chapters/${chapterId}`}>
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'hi' ? 'अध्याय पर वापस जाएं' : 'Back to Chapter'}
                </motion.button>
              </Link>
              <Link href="/chapters">
                <motion.button
                  className="px-8 py-4 rounded-full bg-white border-2 border-amber-500 text-amber-700 font-semibold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === 'hi' ? 'सभी अध्याय' : 'All Chapters'}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Try to find the verse in shlokas array
  const verse = chapter.shlokas.find(v => v.number === verseId);

  // If verse data doesn't exist yet (shlokas array is empty or verse not found)
  if (!verse) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <section className="pt-28 pb-6 px-6 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 text-sm text-amber-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                <Home size={16} />
              </Link>
              <span>/</span>
              <Link href="/chapters" className="hover:text-white transition-colors">
                {language === 'hi' ? 'अध्याय' : 'Chapters'}
              </Link>
              <span>/</span>
              <Link href={`/chapters/${chapterId}`} className="hover:text-white transition-colors">
                {language === 'hi' ? `अध्याय ${chapterId}` : `Chapter ${chapterId}`}
              </Link>
              <span>/</span>
              <span className="text-white font-semibold">
                {language === 'hi' ? `श्लोक ${verseId}` : `Verse ${verseId}`}
              </span>
            </div>

            {/* Page Title */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-amber-300 mb-2">
                  Bhagavad Gita: Chapter {chapterId}, Verse {verseId}
                </h1>
                <p className="text-xl text-amber-200 font-hindi">
                  {chapter.nameHindi}
                </p>
              </div>
              
              <Link href={`/chapters/${chapterId}`}>
                <motion.button
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen size={20} />
                  {language === 'hi' ? 'सभी श्लोक' : 'All Verses'}
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
          <div className="text-center max-w-3xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-amber-300"
            >
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen size={48} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                  {language === 'hi' ? 'श्लोक डेटा जल्द आ रहा है' : 'Verse Data Coming Soon'}
                </h2>
                <p className="text-lg text-amber-700 mb-6">
                  {language === 'hi' 
                    ? `अध्याय ${chapterId}, श्लोक ${verseId} का पूर्ण विवरण जल्द ही उपलब्ध होगा। इस अध्याय में कुल ${chapter.verses} श्लोक हैं।`
                    : `Complete details for Chapter ${chapterId}, Verse ${verseId} will be available soon. This chapter contains ${chapter.verses} verses in total.`}
                </p>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                  <p className="text-amber-800 font-semibold mb-2">
                    {language === 'hi' ? 'इस बीच आप कर सकते हैं:' : 'In the meantime, you can:'}
                  </p>
                  <ul className="text-left text-amber-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{language === 'hi' ? 'अन्य उपलब्ध श्लोक देखें' : 'View other available verses'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{language === 'hi' ? 'अध्याय अवलोकन पढ़ें' : 'Read the chapter overview'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{language === 'hi' ? 'वीडियो व्याख्यान देखें' : 'Watch the video lecture'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href={`/chapters/${chapterId}`}>
                  <motion.button
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-xl w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'hi' ? 'अध्याय देखें' : 'View Chapter'}
                  </motion.button>
                </Link>
                <Link href="/chapters">
                  <motion.button
                    className="px-8 py-4 rounded-full bg-white border-2 border-amber-500 text-amber-700 font-semibold shadow-xl w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'hi' ? 'सभी अध्याय' : 'All Chapters'}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // If we reach here, verse exists! Show the full verse page
  const prevVerse = verseId > 1 ? verseId - 1 : null;
  const nextVerse = verseId < chapter.verses ? verseId + 1 : null;

  // HARDCODED CONTENT FROM IMAGES FOR CHAPTER 1, VERSE 1
  const chapterOverview = {
    title: "Chapter 1: Arjun Vishad Yog",
    subtitle: "Lamenting the Consequences of War",
    paragraphs: [
      "The Bhagavad Gita, or the song of God, was revealed by Lord Shree Krishna to Arjun on the threshold of the epic war of Mahabharata. A decisive battle between two sets of cousins, the Kauravas and the Pandavas, was just about to commence on the battlefield of Kurukshetra. A detailed account of the reasons that led to such a colossal war; is given under Introduction-The Setting of the Bhagavad Gita.",
      "The Bhagavad Gita is primarily a conversation between Lord Shree Krishna and Arjun. However, the first chapter begins with a dialogue between King Dhritarashtra and his minister Sanjay. Dhritarashtra being blind, could not leave his palace in Hastinapur but was eager to know the ongoings of the battlefield.",
      "Sanjay was a disciple of Sage Ved Vyas, the author of the epic Mahabharata and several other Hindu scriptures. Sage Ved Vyas possessed a mystic ability to see and hear events occurring in distant places. He had bestowed upon Sanjay the miraculous power of distant vision. Therefore, Sanjay could see and hear, what transpired on the battleground of Kurukshetra, and gave a first-hand account to King Dhritarashtra while still being in his palace."
    ]
  };

  const verseContent = {
    sanskrit: "धृतराष्ट्र उवाच ।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥१॥",
    transliteration: "dhṛitarāśhtra uvācha\ndharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",
    audioUrl: "/audio/chapter1/verse1.mp3", // This should be actual audio URL
    wordMeanings: [
      { word: "dhṛitarāśhtraḥ uvācha", meaning: "Dhritarashtra said" },
      { word: "dharma-kṣhetre", meaning: "the land of dharma" },
      { word: "kuru-kṣhetre", meaning: "at Kurukshetra" },
      { word: "samavetāḥ", meaning: "having gathered" },
      { word: "yuyutsavaḥ", meaning: "desiring to fight" },
      { word: "māmakāḥ", meaning: "my sons" },
      { word: "pāṇḍavāḥ", meaning: "the sons of Pandu" },
      { word: "cha", meaning: "and" },
      { word: "eva", meaning: "certainly" },
      { word: "kim", meaning: "what" },
      { word: "akurvata", meaning: "did they do" },
      { word: "sañjaya", meaning: "Sanjay" }
    ],
    translation: "BG 1.1: Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",
    commentary: [
      "The two armies had gathered on the battlefield of Kurukshetra, well prepared to fight a war that was inevitable. Still, in this verse, King Dhritarashtra asked Sanjay, what his sons and his brother Pandu's sons were doing on the battlefield? It was apparent that they would fight, then why did he ask such a question?",
      "The blind King Dhritarashtra's fondness for his own sons had clouded his spiritual wisdom and deviated him from the path of virtue. He had usurped the kingdom of Hastinapur from the rightful heirs; the Pandavas, sons of his brother Pandu. Feeling guilty of the injustice he had done towards his nephews, his conscience worried him about the outcome of this battle.",
      "The words dharma kṣhetre, the land of dharma (virtuous conduct) used by Dhritarashtra depict the dilemma he was experiencing. Kurukshetra is described as kurukṣhetraṁ deva yajanam in the Shatapath Brahman, the Vedic textbook detailing rituals. It means \"Kurukshetra is the sacrificial arena of the celestial gods.\" Hence, it was regarded as the sacred land that nourished dharma.",
      "Dhritarashtra feared that the holy land might influence the minds of his sons. If it aroused the faculty of discrimination, they might turn away from killing their cousins and negotiate a truce. A peaceful settlement meant that the Pandavas would continue being a hindrance for them. He felt great displeasure at these possibilities, instead preferred that this war transpires. He was uncertain of the consequences of the war, yet desired to determine the fate of his sons. Therefore, he asked Sanjay about the activities of the two armies on the battleground."
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="pt-28 pb-8 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div 
            className="flex items-center gap-3 text-sm text-amber-200/80 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/" className="hover:text-amber-300 transition-colors flex items-center gap-2">
              <Home size={16} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/chapters" className="hover:text-amber-300 transition-colors">
              Chapters
            </Link>
            <span>/</span>
            <Link href={`/chapters/${chapterId}`} className="hover:text-amber-300 transition-colors">
              Chapter {chapterId}
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Verse {verseId}</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent mb-4">
              Bhagavad Gita: Chapter {chapterId}, Verse {verseId}
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200/90 font-hindi mb-6">
              {chapterOverview.subtitle}
            </p>
          </motion.div>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setShowChapterInfo(!showChapterInfo)}
            className="mt-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-amber-400/30 text-amber-200 font-semibold flex items-center gap-2 hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Info size={18} />
            {showChapterInfo ? 'Hide' : 'Show'} Chapter Overview
          </motion.button>
        </div>
      </section>

      {/* Chapter Overview Section (Collapsible) */}
      {showChapterInfo && (
        <motion.section
          className="px-6 py-12 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b border-amber-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3">
                  {chapterOverview.title}
                </h2>
                <p className="text-xl md:text-2xl text-orange-300 font-semibold">
                  {chapterOverview.subtitle}
                </p>
              </div>

              {/* Content */}
              <div className="space-y-6 text-slate-200">
                {chapterOverview.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-base md:text-lg leading-relaxed text-justify"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Verse Detail Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Sanskrit & Transliteration Card */}
          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-500/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg mb-6">
                <h2 className="text-2xl font-bold text-white">संस्कृत श्लोक</h2>
              </div>
            </div>

            {/* Sanskrit Text */}
            <div className="text-center mb-10">
              <p className="text-3xl md:text-5xl font-hindi leading-loose text-amber-100 mb-8 whitespace-pre-line">
                {verseContent.sanskrit}
              </p>
            </div>

            {/* Audio Player */}
            <div className="mb-8">
              <AudioPlayer audioUrl={verseContent.audioUrl} />
            </div>

            {/* Transliteration */}
            <div className="pt-8 border-t border-amber-500/20">
              <h3 className="text-center text-sm font-bold text-amber-400 uppercase tracking-wider mb-6">
                Transliteration
              </h3>
              <p className="text-xl md:text-2xl italic text-orange-200 leading-relaxed text-center whitespace-pre-line">
                {verseContent.transliteration}
              </p>
            </div>

            {/* Word Meanings */}
            <div className="mt-10 pt-8 border-t border-amber-500/20">
              <h3 className="text-center text-sm font-bold text-amber-400 uppercase tracking-wider mb-6">
                Word Meanings
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {verseContent.wordMeanings.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/20"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-amber-300 font-semibold italic">{item.word}</span>
                    <span className="text-slate-400 mx-2">—</span>
                    <span className="text-slate-200">{item.meaning}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Translation Section */}
          <motion.div
            className="bg-gradient-to-br from-orange-900/40 to-amber-900/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg">
                <h2 className="text-2xl font-bold text-white">Translation</h2>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-2xl p-6 md:p-8 border border-orange-500/20 backdrop-blur-sm">
              <p className="text-lg md:text-xl leading-relaxed text-amber-100">
                {verseContent.translation}
              </p>
            </div>
          </motion.div>

          {/* Commentary Section */}
          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-500/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg">
                <h2 className="text-2xl font-bold text-white">Commentary</h2>
              </div>
            </div>

            <div className="space-y-6">
              {verseContent.commentary.map((paragraph, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/50 rounded-2xl p-6 border border-purple-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <p className="text-base md:text-lg leading-relaxed text-slate-200 text-justify">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-red-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full shadow-lg">
                <h2 className="text-2xl font-bold text-white">Watch Swamiji Explain This Verse</h2>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/30">
              <div className="aspect-video bg-slate-950 flex items-center justify-center">
                {chapter.youtubeVideoId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${chapter.youtubeVideoId}?start=${(verseId - 1) * 120}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                ) : (
                  <div className="text-slate-500 text-center p-8">
                    <Play size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Video coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {prevVerse && (
              <Link href={`/chapters/${chapterId}/verses/${prevVerse}`}>
                <motion.div
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl border border-amber-500/30 hover:border-amber-500/60 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02, x: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:-translate-x-2 transition-transform">
                      <ChevronLeft size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-amber-400 font-semibold mb-1">Previous Verse</p>
                      <p className="text-xl font-bold text-white">Verse {prevVerse}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            )}

            {nextVerse && (
              <Link href={`/chapters/${chapterId}/verses/${nextVerse}`} className={!prevVerse ? 'md:col-start-2' : ''}>
                <motion.div
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl border border-amber-500/30 hover:border-amber-500/60 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-end gap-4">
                    <div className="text-right">
                      <p className="text-sm text-amber-400 font-semibold mb-1">Next Verse</p>
                      <p className="text-xl font-bold text-white">Verse {nextVerse}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:translate-x-2 transition-transform">
                      <ChevronRight size={28} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href={`/chapters/${chapterId}`}>
              <motion.button
                className="px-10 py-4 rounded-full bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white font-semibold text-lg shadow-2xl inline-flex items-center gap-3 border border-amber-500/30 hover:border-amber-500/60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={20} />
                Back to Chapter {chapterId}
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================================
   PAGE EXPORT
================================ */
export default function VerseDetailPage({ params }: { params: { chapterId: string; verseId: string } }) {
  return (
    <LanguageProvider>
      <VerseDetailContent params={params} />
    </LanguageProvider>
  );
}