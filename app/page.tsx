'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BookOpen, Sparkles, Heart, Users, ChevronRight, Scroll, Star, Flame, Languages, Video } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import { chaptersData } from '@/lib/chaptersData';

function HomeContent() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const { t } = useLanguage();

  const features = [
    {
      icon: <BookOpen size={40} />,
      title: t.allChapters,
      description: "Complete Bhagavad Gita with detailed explanations"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 om-pattern opacity-10" />
        
        {/* Floating Om Symbols */}
        <motion.div
          className="absolute top-32 left-10 text-8xl opacity-20 text-gold-500"
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
          ॐ
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-8xl opacity-20 text-gold-600"
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
          ॐ
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Om Symbol */}
          <motion.div
            className="text-9xl mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          >
            <span className="saffron-text-gradient">ॐ</span>
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
            className="text-3xl md:text-5xl mb-8 text-gold-500 font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.tagline}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-saffron-50 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience the timeless wisdom of the Bhagavad Gita. 
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

      {/* Features Section */}
      <section className="py-24 px-6">
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
            <p className="text-2xl text-gold-500">Special Features</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer border-2 border-gold-600/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(255, 215, 0, 0.6)',
                }}
              >
                <motion.div
                  className="text-gold-500 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gold-500 mb-2">
                  {feature.title}
                </h3>
                <p className="text-saffron-50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 18 Chapters Showcase Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Scroll className="text-gold-500" size={48} />
              <h2 className="text-5xl md:text-6xl font-bold saffron-text-gradient font-display">
                {t.allChapters}
              </h2>
              <Scroll className="text-gold-500" size={48} />
            </div>
            <p className="text-2xl text-gold-500 mb-4">{t.allChaptersDesc}</p>
            <p className="text-lg text-saffron-50 max-w-3xl mx-auto">
              Explore the complete journey of spiritual enlightenment through all eighteen chapters
            </p>
          </motion.div>

          {/* Chapter Display */}
          <motion.div
            className="glass-effect rounded-3xl shadow-2xl overflow-hidden border-4 border-gold-600/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-0">
              {/* Left Side - Chapter Content */}
              <motion.div
                className="p-8 md:p-12"
                key={selectedChapter}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Chapter Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 flex items-center justify-center text-deepred-900 font-bold text-2xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {selectedChapter}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-gold-500 mb-1 font-hindi">
                        {chaptersData[selectedChapter - 1].nameHindi}
                      </h3>
                      <p className="text-xl text-saffron-50 font-semibold">
                        {chaptersData[selectedChapter - 1].nameEnglish}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-saffron-100 italic mb-2">
                    {chaptersData[selectedChapter - 1].subtitle}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gold-600">
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
                <div className="mb-8 p-6 glass-effect rounded-2xl border-2 border-gold-600/30 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Flame className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-sm font-semibold text-gold-600 mb-2 uppercase tracking-wide">
                        {t.chapterOverview}
                      </h4>
                      <p className="text-lg text-saffron-50 leading-relaxed">
                        {chaptersData[selectedChapter - 1].description.en}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <Link href={`/chapters/${selectedChapter}`}>
                  <motion.button
                    className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-gold-500 to-gold-700 text-deepred-900 shadow-xl flex items-center gap-2"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.readMore}
                    <ChevronRight size={20} />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Right Side - Chapter Grid Navigation */}
              <div className="bg-gradient-to-br from-saffron-700/50 to-deepred-800/50 p-8 md:p-12">
                <div className="sticky top-8">
                  <div className="bg-gold-600/30 backdrop-blur-sm px-6 py-3 rounded-t-2xl text-center mb-6 border-2 border-gold-500/50">
                    <h4 className="text-xl font-bold text-gold-500">Chapter {selectedChapter}</h4>
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
                            ? 'bg-gradient-to-br from-gold-500 to-gold-700 text-deepred-900 shadow-lg scale-110'
                            : 'glass-effect text-gold-500 hover:bg-gold-600/30 shadow-md border border-gold-600/30'
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
                  <div className="glass-effect rounded-2xl p-4 shadow-lg max-h-[400px] overflow-y-auto border-2 border-gold-600/30">
                    {chaptersData.map((chapter) => (
                      <motion.button
                        key={chapter.number}
                        onClick={() => setSelectedChapter(chapter.number)}
                        className={`w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 ${
                          selectedChapter === chapter.number
                            ? 'bg-gradient-to-r from-gold-500 to-gold-700 text-deepred-900 shadow-md'
                            : 'hover:bg-gold-600/20 text-saffron-50 border border-gold-600/20'
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

      {/* Quote Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 om-pattern opacity-5" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-8 text-gold-500">ॐ</div>
            <blockquote className="text-3xl md:text-4xl font-light text-gold-500 mb-6 leading-relaxed font-hindi">
              "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
            </blockquote>
            <p className="text-xl md:text-2xl text-saffron-50 font-light">
              You have the right to perform your duty, but not to the fruits of your actions
            </p>
            <p className="text-lg text-saffron-100 mt-6">
              — Bhagavad Gita 2.47
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "18", label: t.allChapters },
              { number: "700", label: t.verses },
              { number: "∞", label: t.wisdom }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-3xl glass-effect shadow-lg border-2 border-gold-600/30"
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
                <h3 className="text-2xl font-bold text-gold-500 mb-2">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold saffron-text-gradient mb-6 font-display">
              {t.beginJourney}
            </h2>
            <p className="text-xl text-gold-500 mb-12 leading-relaxed">
              Dive into the profound teachings of the Bhagavad Gita and discover wisdom that transcends time
            </p>
            <Link href="/chapters">
              <motion.button
                className="px-12 py-5 rounded-full text-2xl font-semibold bg-gradient-to-r from-gold-500 to-gold-700 text-deepred-900 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(255, 215, 0, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t.startReading} →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
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
