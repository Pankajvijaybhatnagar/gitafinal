'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { BookOpen, Sparkles, Heart, Users, ChevronRight, Scroll, Star, Flame, Languages, Video, ChevronLeft, Plus, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import { chaptersData } from '@/lib/chaptersData';

function HomeContent() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <BookOpen size={40} />,
      title: t.allChapters,
      description: "CompleteBhagwad Gita with detailed explanations"
    },
    {
      icon: <Languages size={40} />,
      title: "Multiple Languages",
      description: "Hindi, English, Sanskrit and more"
    },
    {
      icon: <Heart size={40} />,
      title: t.wisdom,
      description: "Key teachings and profound insights"
    },
    {
      icon: <Users size={40} />,
      title: "For Everyone",
      description: "Accessible spiritual knowledge for all"
    }
  ];

  const popularVerses = [
    {
      verse: "Verse 2.47",
      chapter: "Karma Yoga",
      description: "Emphasizes performing one's duty without attachment to the results.",
      link: "/chapters/2#verse-47"
    },
    {
      verse: "Verse 4.7",
      chapter: "Avatar Vani",
      description: "Krishna declares He incarnates whenever righteousness declines.",
      link: "/chapters/4#verse-7"
    },
    {
      verse: "Verse 4.8",
      chapter: "Avatar Vani",
      description: "Explains the purpose of His incarnations: to protect the good and destroy the wicked.",
      link: "/chapters/4#verse-8"
    },
    {
      verse: "Verse 18.66",
      chapter: "Moksha",
      description: "Urges to abandon all dharmas and surrender to Krishna.",
      link: "/chapters/18#verse-66"
    },
    {
      verse: "Verse 9.22",
      chapter: "Raja Vidya",
      description: "Krishna promises to provide and preserve for those devoted to Him.",
      link: "/chapters/9#verse-22"
    },
    {
      verse: "Verse 6.35",
      chapter: "Dhyana Yoga",
      description: "The mind is restless but can be controlled through practice.",
      link: "/chapters/6#verse-35"
    }
  ];

  const faqs = [
    {
      question: "How many chapters are in  the Bhagwad Gita?",
      answer: " the Bhagwad Gita contains 18 chapters with a total of 700 verses (shlokas). It is part of the Indian epic Mahabharata and presents a conversation between Lord Krishna and Arjuna on the battlefield of Kurukshetra."
    },
    {
      question: "Who wrote  the Bhagwad Gita?",
      answer: " the Bhagwad Gita was composed by Sage Vyasa (also known as Ved Vyasa) as part of the great epic Mahabharata. The dialogue itself is between Lord Krishna and the warrior prince Arjuna, with Sanjaya narrating it to King Dhritarashtra."
    },
    {
      question: "What are the benefits of reading  the Bhagwad Gita?",
      answer: "Reading  the Bhagwad Gita provides spiritual guidance, helps develop mental clarity and peace, offers solutions to life's challenges, teaches the path of righteousness (dharma), promotes self-realization, and provides wisdom on how to live a meaningful and purposeful life. It addresses universal questions about duty, action, devotion, and liberation."
    },
    {
      question: "Is  the Bhagwad Gita available with commentaries?",
      answer: "Yes, our platform provides  the Bhagwad Gita with detailed commentaries and explanations. Each verse is accompanied by translations in multiple languages and comprehensive interpretations to help you understand the deeper meanings and philosophical concepts presented in the sacred text."
    },
    {
      question: "Can I readBhagwad Gita in Hindi and English?",
      answer: "Absolutely! Our platform offers  the Bhagwad Gita in multiple languages including Hindi, English, and Sanskrit. You can switch between languages to read the verses in your preferred language and compare translations for better understanding."
    },
    {
      question: "What is the main message of  the Bhagwad Gita?",
      answer: "The main message of  the Bhagwad Gita is to perform one's duty (dharma) selflessly without attachment to results, understand the eternal nature of the soul, develop devotion to the Supreme, and attain liberation (moksha) through knowledge, action, and devotion. It teaches the balance between spiritual wisdom and worldly responsibilities."
    },
    {
      question: "What are the different yogas explained  in Bhagwad Gita?",
      answer: " the Bhagwad Gita explains several paths (yogas) to spiritual realization: Karma Yoga (the path of selfless action), Bhakti Yoga (the path of devotion), Jnana Yoga (the path of knowledge), Dhyana Yoga (the path of meditation), and Raja Yoga (the royal path combining all aspects). Each path is suitable for different temperaments and can lead to the ultimate goal of self-realization."
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Image Section */}
      <section className="relative h-screen overflow-hidden">
        <img 
          className="absolute inset-0 w-full h-full object-cover"
          src="/himg.jpeg" 
          alt="Bhagavad Gita" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-6xl opacity-30 text-amber-200"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ॐ
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 text-4xl opacity-30 text-amber-200 font-hindi"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          श्री कृष्ण
        </motion.div>
      </section>

      {/* Hero Section - White Background with Pattern */}
      <section className="relative bg-orange-100 min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 om-pattern opacity-10" />
        
        {/* Floating Mor Image */}
        <motion.div
          className="absolute top-32 left-10 text-4xl opacity-20 text-red-900"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src="/mor.png" alt="Peacock Feather" />
        </motion.div>
        
        {/* Floating Text */}
        <motion.div
          className="absolute bottom-20 right-10 text-4xl opacity-20 text-red-900 font-hindi"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          श्री कृष्ण कृपा 
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Om Symbol */}
          <motion.div
            className="text-6xl mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          >
            <span className="saffron-text-gradient font-hindi">श्री कृष्ण कृपा</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 saffron-text-gradient font-display"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.siteName}
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl mb-8 text-red-900 font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.tagline}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-red-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience the timeless wisdom of  the Bhagwad Gita. 
            Explore divine teachings that illuminate the path to self-realization and inner peace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/chapters">
              <motion.button
                className="px-10 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-gold-500 to-gold-700 text-deepred-900 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(255, 215, 0, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t.exploreChapters}
              </motion.button>
            </Link>

            <Link href="/donate">
              <motion.button
                className="px-10 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-gold-600 to-gold-700 text-deepred-900 shadow-2xl flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(255, 165, 0, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart size={24} />
                {t.donate}
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-gold-500 rounded-full"
                animate={{
                  y: [0, 16, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Cream Background */}
      <section className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold saffron-text-gradient mb-4 font-display">
              {t.features}
            </h2>
            <p className="text-2xl text-amber-700">Special Features</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow cursor-pointer border-2 border-amber-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(251, 191, 36, 0.6)',
                }}
              >
                <motion.div
                  className="text-amber-600 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-amber-900 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Verses Section - Deep Saffron Background */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-orange-900 to-red-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-amber-300 mb-4 font-display">
              Popular Verses
            </h2>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              Explore timeless wisdom from Lord Krishna on karma yoga, bhakti, dharma, and moksha
            </p>
          </motion.div>

          {/* Scrolling Container */}
          <div className="relative">
            {/* Left Arrow */}
            <motion.button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-red-900 shadow-xl flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-red-900 shadow-xl flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Verses Cards */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {popularVerses.map((item, index) => (
                <motion.div
                  key={index}
                  className="min-w-[350px] snap-start"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={item.link}>
                    <div className="bg-orange-800/60 backdrop-blur-md rounded-2xl p-6 h-full border-2 border-amber-400/30 hover:border-amber-300 transition-all cursor-pointer group shadow-lg hover:shadow-2xl">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                          {item.verse}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600/40 text-amber-200 border border-amber-400/30">
                          {item.chapter}
                        </span>
                      </div>
                      
                      <p className="text-amber-100 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center text-amber-300 group-hover:text-amber-200 transition-colors">
                        <span className="text-sm font-semibold">Read full verse</span>
                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 18 Chapters Showcase Section - Light Peach Background */}
      <section className="py-24 px-6 bg-gradient-to-b from-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Scroll className="text-amber-600" size={48} />
              <h2 className="text-5xl md:text-6xl font-bold saffron-text-gradient font-display">
                {t.allChapters}
              </h2>
              <Scroll className="text-amber-600" size={48} />
            </div>
            <p className="text-2xl text-amber-700 mb-4">{t.allChaptersDesc}</p>
            <p className="text-lg text-amber-900 max-w-3xl mx-auto">
              Explore the complete journey of spiritual enlightenment through all eighteen chapters
            </p>
          </motion.div>

          {/* Chapter Display */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-0">
              {/* Left Side - Chapter Content */}
              <motion.div
                className="p-8 md:p-12 bg-orange-50"
                key={selectedChapter}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Chapter Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {selectedChapter}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-amber-700 mb-1 font-hindi">
                        {chaptersData[selectedChapter - 1].nameHindi}
                      </h3>
                      <p className="text-xl text-amber-900 font-semibold">
                        {chaptersData[selectedChapter - 1].nameEnglish}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-amber-800 italic mb-2">
                    {chaptersData[selectedChapter - 1].subtitle}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-amber-700">
                    <span className="flex items-center gap-1">
                      <BookOpen size={16} />
                      {chaptersData[selectedChapter - 1].verses} {t.verses}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={16} />
                      {chaptersData[selectedChapter - 1].theme}
                    </span>
                  </div>
                </div>

                {/* Chapter Description */}
                <div className="mb-8 p-6 bg-white rounded-2xl border-2 border-amber-200 shadow-md">
                  <div className="flex items-start gap-3 mb-4">
                    <Flame className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 mb-2 uppercase tracking-wide">
                        {t.chapterOverview}
                      </h4>
                      <p className="text-lg text-amber-900 leading-relaxed">
                        {chaptersData[selectedChapter - 1].description.en}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <Link href={`/chapters/${selectedChapter}`}>
                  <motion.button
                    className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-red-500 to-red-700 text-white shadow-xl flex items-center gap-2"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(251, 191, 36, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.readMore}
                    <ChevronRight size={20} />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Right Side - Chapter Grid Navigation */}
              <div className="bg-gradient-to-br from-red-900 to-red-900 p-8 md:p-12">
                <div className="sticky top-8">
                  <div className="bg-red-500/50 backdrop-blur-sm px-6 py-3 rounded-t-2xl text-center mb-6 border-2 border-amber-400">
                    <h4 className="text-xl font-bold text-white">Chapter {selectedChapter}</h4>
                  </div>
                  
                  <motion.div
                    className="grid grid-cols-6 gap-2 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {chaptersData.map((chapter) => (
                      <motion.button
                        key={chapter.number}
                        variants={itemVariants}
                        onClick={() => setSelectedChapter(chapter.number)}
                        className={`aspect-square rounded-xl font-bold text-lg transition-all duration-300 ${
                          selectedChapter === chapter.number
                            ? 'bg-gradient-to-br from-red-600 to-red-500 text-red-900 shadow-lg scale-110'
                            : 'bg-orange-800/50 backdrop-blur-sm text-amber-200 hover:bg-orange-700/70 shadow-md border border-amber-500/30'
                        }`}
                        whileHover={{
                          scale: selectedChapter === chapter.number ? 1.1 : 1.05,
                          rotate: selectedChapter === chapter.number ? 0 : 3,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {chapter.number}
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Chapter List */}
                  <div className="bg-orange-800/40 backdrop-blur-md rounded-2xl p-4 shadow-lg max-h-[400px] overflow-y-auto border-2 border-amber-500/30">
                    {chaptersData.map((chapter) => (
                      <motion.button
                        key={chapter.number}
                        onClick={() => setSelectedChapter(chapter.number)}
                        className={`w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 ${
                          selectedChapter === chapter.number
                            ? 'bg-gradient-to-r from-red-600 to-red-600 text-red-900 shadow-md'
                            : 'hover:bg-orange-700/50 text-amber-100 border border-amber-500/20'
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg">{chapter.number}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">
                              {chapter.nameEnglish}
                            </p>
                            <p className="text-xs opacity-75">
                              {chapter.verses} {t.verses}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section - Warm Beige Background */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="absolute inset-0 om-pattern opacity-5" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-8 text-amber-600">ॐ</div>
            <blockquote className="text-3xl md:text-4xl font-light text-amber-700 mb-6 leading-relaxed font-hindi">
              "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
            </blockquote>
            <p className="text-xl md:text-2xl text-amber-900 font-light">
              You have the right to perform your duty, but not to the fruits of your actions
            </p>
            <p className="text-lg text-amber-800 mt-6">
              —Bhagwad Gita 2.47
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "18", label: t.allChapters },
              { number: "700", label: t.verses },
              { number: "∞", label: t.wisdom }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-amber-100 shadow-xl border-2 border-amber-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                <motion.div
                  className="text-6xl md:text-7xl font-bold saffron-text-gradient mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-700 mb-2">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shloka of the Day Section - Peach/Cream Background */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Subscription Form */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-orange-100 to-amber-100">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4 font-display">
                    Shloka of the Day
                  </h2>
                  <p className="text-lg text-amber-900 mb-8 leading-relaxed">
                    Have the eternal wisdom of the Gita delivered to your inbox each morning
                  </p>

                  {/* Subscription Form */}
                  <div className="space-y-4 mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-6 py-4 rounded-full bg-white border-2 border-amber-300 focus:border-amber-500 outline-none text-amber-900 placeholder-amber-400 transition-all shadow-md"
                      />
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-6 py-4 rounded-full bg-white border-2 border-amber-300 focus:border-amber-500 outline-none text-amber-900 placeholder-amber-400 transition-all shadow-md"
                      />
                    </div>

                    <motion.button
                      className="w-full px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-xl flex items-center justify-center gap-2"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 20px 40px rgba(251, 191, 36, 0.4)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Sparkles size={20} />
                      Subscribe
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-2 text-amber-800">
                    <Sparkles size={16} className="text-amber-600" />
                    <p className="text-sm">
                      Join thousands of seekers on this spiritual journey
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Featured Image */}
              <div className="relative min-h-[400px] lg:min-h-full">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="/himg.jpeg"
                    alt="Krishna and Arjuna on Kurukshetra"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Quote Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <blockquote className="text-white/90 italic text-lg mb-3 leading-relaxed">
                        "The mind is restless and difficult to restrain, but it is subdued by practice."
                      </blockquote>
                      <p className="text-amber-300 font-semibold">
                        —Bhagwad Gita 6.35
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Deep Saffron/Red Background */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-800 to-red-900">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-amber-200 mb-6 font-display">
              {t.beginJourney}
            </h2>
            <p className="text-xl text-amber-100 mb-12 leading-relaxed">
              Dive into the profound teachings of  the Bhagwad Gita and discover wisdom that transcends time
            </p>
            <Link href="/chapters">
              <motion.button
                className="px-12 py-5 rounded-full text-2xl font-semibold bg-gradient-to-r from-amber-400 to-amber-600 text-red-900 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(251, 191, 36, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t.startReading} →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Light Cream Background */}
      <section className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold saffron-text-gradient mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-amber-700">
              Everything you need to know about  the Bhagwad Gita
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden border-2 border-amber-200 shadow-lg"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-amber-50 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-amber-700 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openFAQ === index ? (
                      <Minus size={24} className="text-amber-600" />
                    ) : (
                      <Plus size={24} className="text-amber-600" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-4" />
                        <p className="text-amber-900 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}