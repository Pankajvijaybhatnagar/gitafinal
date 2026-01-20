'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import { chaptersData } from '@/lib/chaptersData';

function ChaptersContent() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
   
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 saffron-gradient-bg opacity-20" />
        <div className="absolute inset-0 om-pattern" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold saffron-text-gradient mb-6 font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.allChapters}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl hover:text-yellow-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.allChaptersDesc}
          </motion.p>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chaptersData.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={`/chapters/${chapter.number}`}>
                  <motion.div
                    className="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-shadow cursor-pointer h-full relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 saffron-gradient-bg opacity-0 group-hover:opacity-10 transition-opacity" />
                    
                    {/* Chapter Number */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className="w-16 h-16 rounded-full saffron-gradient-bg flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {chapter.number}
                        </motion.div>
                        <ChevronRight className="hover:text-yellow-200 group-hover:translate-x-2 transition-transform" size={24} />
                      </div>

                      {/* Chapter Names */}
                      <h3 className="text-2xl font-bold text-saffron-300 mb-2 font-hindi">
                        {chapter.nameHindi}
                      </h3>
                      <p className="text-lg hover:text-yellow-200 font-semibold mb-3">
                        {chapter.nameEnglish}
                      </p>
                      <p className="text-sm text-white italic mb-4">
                        {chapter.subtitle}
                      </p>

                      {/* Verses Count */}
                      <div className="flex items-center gap-2 text-sm hover:text-yellow-200 mb-4">
                        <BookOpen size={16} />
                        <span>{chapter.verses} {t.verses}</span>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed line-clamp-3">
                        {language === 'hi' ? chapter.description.hi : chapter.description.en}
                      </p>

                      {/* Theme Badge */}
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-saffron-500 to-deepred-600 text-white">
                          {chapter.theme}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ChaptersPage() {
  return (
    <LanguageProvider>
      <ChaptersContent />
    </LanguageProvider>
  );
}
