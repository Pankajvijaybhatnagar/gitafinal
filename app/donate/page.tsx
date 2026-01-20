'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, CreditCard, Building, Smartphone, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';
import toast from 'react-hot-toast';

function DonateContent() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const predefinedAmounts = [100, 500, 1000, 2000, 5000, 10000];

  const handleDonate = () => {
    const donationAmount = amount || customAmount;
    if (!donationAmount || !paymentMethod) {
      toast.error('Please select an amount and payment method');
      return;
    }
    toast.success(`Thank you for your donation of ₹${donationAmount}! Redirecting to payment...`);
    // Here you would integrate with actual payment gateway
  };

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
            <Heart className="mx-auto text-saffron-600" size={64} />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold saffron-text-gradient mb-6 font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.support}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-saffron-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.supportDesc}
          </motion.p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Donation Impact */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold saffron-text-gradient mb-6 font-display">
                Your Contribution Makes a Difference
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { amount: '₹500', impact: 'Helps maintain our servers for 1 month' },
                  { amount: '₹2000', impact: 'Supports content creation and translations' },
                  { amount: '₹5000', impact: 'Funds educational programs and outreach' },
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-saffron-200">
                    <p className="text-2xl font-bold saffron-text-gradient mb-2">{item.amount}</p>
                    <p className="text-sm text-deepred-700">{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-deepred-900 mb-4">Select Donation Amount</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                {predefinedAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setAmount(amt.toString());
                      setCustomAmount('');
                    }}
                    className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all ${
                      amount === amt.toString()
                        ? 'saffron-gradient-bg text-white shadow-lg scale-105'
                        : 'bg-orange-50 text-deepred-800 hover:bg-saffron-100 border-2 border-saffron-200'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-deepred-900 font-semibold mb-2">
                  Or enter custom amount (₹)
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount('');
                  }}
                  placeholder="Enter amount"
                  className="w-full p-4 rounded-2xl border-2 border-saffron-200 focus:border-saffron-500 outline-none text-lg"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-deepred-900 mb-4">Select Payment Method</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard size={32} /> },
                  { id: 'upi', name: 'UPI', icon: <Smartphone size={32} /> },
                  { id: 'bank', name: 'Net Banking', icon: <Building size={32} /> },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${
                      paymentMethod === method.id
                        ? 'border-saffron-500 bg-saffron-50'
                        : 'border-saffron-200 bg-white hover:border-saffron-400'
                    }`}
                  >
                    <div className="text-saffron-600">{method.icon}</div>
                    <span className="font-semibold text-deepred-900">{method.name}</span>
                    {paymentMethod === method.id && (
                      <Check className="text-saffron-600" size={24} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <motion.button
              onClick={handleDonate}
              className="w-full py-5 rounded-full text-2xl font-semibold text-white shadow-2xl saffron-gradient-bg flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="fill-current" size={28} />
              Donate {(amount || customAmount) && `₹${amount || customAmount}`}
            </motion.button>

            <p className="text-center text-sm text-deepred-700/70 mt-6">
              Your donation is secure and will be used to spread the divine wisdom of Bhagavad Gita
            </p>
          </motion.div>

          {/* Why Donate Section */}
          <motion.div
            className="mt-12 glass-effect rounded-3xl p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold saffron-text-gradient mb-6 font-display text-center">
              Why Your Support Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Free Access for All',
                  description: 'Keep the divine wisdom accessible to everyone, regardless of their financial situation.',
                },
                {
                  title: 'Content Creation',
                  description: 'Support the creation of new translations, commentaries, and educational materials.',
                },
                {
                  title: 'Technology & Maintenance',
                  description: 'Help us maintain and improve our platform with better features and performance.',
                },
                {
                  title: 'Global Outreach',
                  description: 'Spread the teachings of Bhagavad Gita to seekers around the world.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-saffron-200">
                  <h3 className="text-xl font-bold text-deepred-900 mb-3">{item.title}</h3>
                  <p className="text-deepred-700/80">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function DonatePage() {
  return (
    <LanguageProvider>
      <DonateContent />
    </LanguageProvider>
  );
}
