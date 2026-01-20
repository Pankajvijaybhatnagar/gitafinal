'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';

function GalleryContent() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample gallery images - Admin can add more through admin panel
  const galleryImages = [
    {
      id: 1,
      title: "Krishna and Arjuna",
      titleHindi: "कृष्ण और अर्जुन",
      description: "The divine conversation on the battlefield",
      url: "https://images.unsplash.com/photo-1604608672516-f1b6087d3833?w=800",
    },
    {
      id: 2,
      title: "Om Symbol",
      titleHindi: "ॐ प्रतीक",
      description: "The sacred symbol of divine consciousness",
      url: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800",
    },
    {
      id: 3,
      title: "Meditation",
      titleHindi: "ध्यान",
      description: "The path to inner peace",
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    },
    {
      id: 4,
      title: "Spiritual Journey",
      titleHindi: "आध्यात्मिक यात्रा",
      description: "The quest for enlightenment",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    },
    {
      id: 5,
      title: "Temple Art",
      titleHindi: "मंदिर कला",
      description: "Divine architecture and spirituality",
      url: "https://images.unsplash.com/photo-1609771276182-c1ca9bfa9ad4?w=800",
    },
    {
      id: 6,
      title: "Yoga Practice",
      titleHindi: "योग अभ्यास",
      description: "Unity of body, mind and spirit",
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 saffron-gradient-bg opacity-20" />
        <div className="absolute inset-0 om-pattern" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <ImageIcon className="mx-auto text-saffron-600" size={64} />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold saffron-text-gradient mb-6 font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.gallery}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-saffron-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Divine moments captured in art and imagery
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="glass-effect rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-1 font-hindi">
                        {image.titleHindi}
                      </h3>
                      <p className="text-lg text-orange-100 font-semibold mb-2">
                        {image.title}
                      </p>
                      <p className="text-sm text-orange-200">
                        {image.description}
                      </p>
                    </div>
                    <motion.div
                      className="w-full h-full bg-saffron-gradient-bg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          <motion.div
            className="mt-12 glass-effect rounded-3xl p-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-deepred-700/70 mb-4">
              More divine images and artworks will be added regularly by our admin team
            </p>
            <p className="text-saffron-600 font-semibold">
              Check back soon for updates!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-saffron-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full"
          >
            <div className="glass-effect rounded-3xl overflow-hidden">
              <div className="aspect-video bg-saffron-gradient-bg" />
              <div className="p-6 bg-white/90">
                <h3 className="text-2xl font-bold saffron-text-gradient mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-deepred-700">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <LanguageProvider>
      <GalleryContent />
    </LanguageProvider>
  );
}
