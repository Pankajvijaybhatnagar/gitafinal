'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 saffron-gradient-bg opacity-95" />
      <div className="absolute inset-0 om-pattern opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-white">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">ॐ</span>
              <h3 className="text-2xl font-bold font-display">{t.siteName}</h3>
            </div>
            <p className="text-orange-100 leading-relaxed">
              {t.tagline}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Heart className="text-red-300" size={20} />
              <span className="text-orange-100">{t.supportDesc}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    {t.home}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/chapters">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    {t.chapters}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    {t.gallery}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/donate">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    {t.donate}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Chapters */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-display">{t.chapters}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/chapters/1">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    Chapter 1
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/chapters/2">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    Chapter 2
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/chapters/3">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    Chapter 3
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/chapters">
                  <span className="text-orange-100 hover:text-white transition-colors cursor-pointer">
                    View All {t.chapters} →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-display">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-orange-100">info@gitaprerna.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-orange-100">+91 123 456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-orange-100">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-300/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-orange-100 text-center md:text-left">
              © {currentYear} {t.siteName}. All rights reserved.
            </p>
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-orange-100">Made with</span>
              <Heart className="text-red-300 fill-current" size={18} />
              <span className="text-orange-100">for Divine Wisdom</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
