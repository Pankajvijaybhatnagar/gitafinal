'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Video, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import { chaptersData } from '@/lib/chaptersData';

/* ================================
   CHAPTER DETAIL CONTENT
================================ */
function ChapterDetailContent({ params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id, 10);
  const chapter = chaptersData.find(c => c.number === chapterId);
  const { t, language } = useLanguage();
  const [expandedShloka, setExpandedShloka] = useState<number | null>(null);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold saffron-text-gradient mb-4">
            Chapter Not Found
          </h1>
          <Link href="/chapters">
            <button className="px-6 py-3 rounded-full saffron-gradient-bg text-white font-semibold">
              Back to Chapters
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto">

          <Link href="/chapters">
            <motion.button
              className="flex items-center gap-2 text-saffron-600 font-semibold mb-6"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} />
              Back to Chapters
            </motion.button>
          </Link>

          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 rounded-full saffron-gradient-bg flex items-center justify-center text-white text-3xl font-bold">
              {chapter.number}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-hindi">
                {chapter.nameHindi}
              </h1>
              <p className="text-2xl text-saffron-600 font-semibold">
                {chapter.nameEnglish}
              </p>
            </div>
          </motion.div>

          <p className="text-xl italic mb-4">{chapter.subtitle}</p>

          <div className="flex gap-6 text-saffron-600">
            <span className="flex items-center gap-2">
              <BookOpen size={20} />
              {chapter.verses} {t.verses}
            </span>
            <span className="px-4 py-1 rounded-full saffron-gradient-bg text-white text-sm">
              {chapter.theme}
            </span>
          </div>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto glass-effect p-10 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6">
            {t.chapterOverview}
          </h2>
          <p className="text-lg leading-relaxed">
            {language === 'hi'
              ? chapter.description.hi
              : chapter.description.en}
          </p>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      {chapter.youtubeVideoId && (
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Video size={30} />
              <h2 className="text-3xl font-bold">{t.videoLectures}</h2>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <iframe
                className="w-full h-[500px]"
                src={`https://www.youtube.com/embed/${chapter.youtubeVideoId}`}
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ================= SHLOKAS ================= */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t.verses}</h2>

          <div className="space-y-6">
            {chapter.shlokas.map(shloka => (
              <div key={shloka.number} className="glass-effect rounded-3xl p-8">

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">
                    {t.shloka} {shloka.number}
                  </h3>
                  <button
                    onClick={() =>
                      setExpandedShloka(
                        expandedShloka === shloka.number
                          ? null
                          : shloka.number
                      )
                    }
                  >
                    {expandedShloka === shloka.number
                      ? <ChevronUp />
                      : <ChevronDown />}
                  </button>
                </div>

                <p className="text-2xl font-hindi mb-4">
                  {shloka.sanskrit}
                </p>

                <p className="italic mb-4">
                  {shloka.transliteration}
                </p>

                <p className="text-lg mb-4">
                  {language === 'hi'
                    ? shloka.translation.hi
                    : shloka.translation.en}
                </p>

                {expandedShloka === shloka.number && (
                  <div className="border-t pt-4 mt-4">
                    <p>
                      {language === 'hi'
                        ? shloka.commentary.hi
                        : shloka.commentary.en}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="mt-12 flex gap-4">
            {chapter.number > 1 && (
              <Link href={`/chapters/${chapter.number - 1}`} className="flex-1">
                <button className="w-full py-4 rounded-full saffron-gradient-bg text-white">
                  ← Previous Chapter
                </button>
              </Link>
            )}
            {chapter.number < 18 && (
              <Link href={`/chapters/${chapter.number + 1}`} className="flex-1">
                <button className="w-full py-4 rounded-full saffron-gradient-bg text-white">
                  Next Chapter →
                </button>
              </Link>
            )}
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
export default function ChapterDetailPage({ params }: { params: { id: string } }) {
  return (
    <LanguageProvider>
      <ChapterDetailContent params={params} />
    </LanguageProvider>
  );
}
