'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; native: string }[] = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'sa', name: 'Sanskrit', native: 'संस्कृत' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-saffron-300/30">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl om-pulse">ॐ</span>
              <div>
                <h1 className="text-2xl font-bold saffron-text-gradient font-display">
                  {t.siteName}
                </h1>
                <p className="text-xs text-gray-50">Bhagwad Gita</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <motion.span
                className="text-gray-50 hover:text-yellow-200 font-semibold transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {t.home}
              </motion.span>
            </Link>
            <Link href="/chapters">
              <motion.span
                className="text-gray-50 hover:text-yellow-200 font-semibold transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {t.chapters}
              </motion.span>
            </Link>
            <Link href="/gallery">
              <motion.span
                className="text-gray-50 hover:text-yellow-200 font-semibold transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {t.gallery}
              </motion.span>
            </Link>
            <Link href="/donate">
              <motion.span
                className="text-gray-50 hover:text-yellow-200 font-semibold transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {t.donate}
              </motion.span>
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-saffron-500 to-deepred-600 text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={18} />
                <span className="uppercase">{language}</span>
              </motion.button>

              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 glass-effect rounded-2xl shadow-2xl overflow-hidden border-2 border-saffron-300"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-saffron-50 transition-colors ${
                        language === lang.code
                          ? 'bg-gradient-to-r from-saffron-500 to-deepred-600 text-white'
                          : 'text-gray-50'
                      }`}
                    >
                      <div className="font-semibold">{lang.native}</div>
                      <div className="text-xs opacity-70">{lang.name}</div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Admin Link */}
            <Link href="/admin">
              <motion.button
                className="px-6 py-2 rounded-full bg-white border-2 border-saffron-500 text-saffron-700 font-semibold hover:bg-saffron-500 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.admin}
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-50"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <span className="block py-2 text-gray-50 hover:text-yellow-200 font-semibold">
                  {t.home}
                </span>
              </Link>
              <Link href="/chapters" onClick={() => setIsMenuOpen(false)}>
                <span className="block py-2 text-gray-50 hover:text-yellow-200 font-semibold">
                  {t.chapters}
                </span>
              </Link>
              <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>
                <span className="block py-2 text-gray-50 hover:text-yellow-200 font-semibold">
                  {t.gallery}
                </span>
              </Link>
              <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                <span className="block py-2 text-gray-50 hover:text-yellow-200 font-semibold">
                  {t.donate}
                </span>
              </Link>
              <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                <span className="block py-2 text-gray-50 hover:text-yellow-200 font-semibold">
                  {t.admin}
                </span>
              </Link>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-saffron-300">
                <p className="text-sm text-deepred-700 mb-2 font-semibold">{t.selectLanguage}</p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                        language === lang.code
                          ? 'bg-gradient-to-r from-saffron-500 to-deepred-600 text-white'
                          : 'bg-saffron-50 text-gray-50'
                      }`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
