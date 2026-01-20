'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BookOpen, 
  Image as ImageIcon, 
  Video, 
  Users, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Upload
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/LanguageContext';
import toast from 'react-hot-toast';

function AdminContent() {
  const [activeTab, setActiveTab] = useState('chapters');
  const [isAddingContent, setIsAddingContent] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Login handler
  const handleLogin = () => {
    // Simple authentication - in production use proper auth
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast.success('Welcome to Admin Panel!');
    } else {
      toast.error('Invalid password');
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 saffron-gradient-bg opacity-20" />
        <div className="absolute inset-0 om-pattern" />
        
        <motion.div
          className="relative z-10 glass-effect rounded-3xl p-12 max-w-md w-full shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">ॐ</span>
            <h1 className="text-4xl font-bold saffron-text-gradient mb-2 font-display">
              Admin Panel
            </h1>
            <p className="text-saffron-600">Content Management System</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-deepred-900 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Enter admin password"
                className="w-full p-4 rounded-2xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
              />
            </div>

            <motion.button
              onClick={handleLogin}
              className="w-full py-4 rounded-full text-lg font-semibold text-white shadow-lg saffron-gradient-bg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>

            <p className="text-sm text-deepred-700/70 text-center">
              Demo Password: admin123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  const tabs = [
    { id: 'chapters', name: 'Chapters & Shlokas', icon: <BookOpen size={20} /> },
    { id: 'gallery', name: 'Gallery', icon: <ImageIcon size={20} /> },
    { id: 'videos', name: 'Videos', icon: <Video size={20} /> },
    { id: 'users', name: 'Users', icon: <Users size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Admin Header */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 saffron-gradient-bg opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold saffron-text-gradient mb-4 font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Admin Dashboard
          </motion.h1>
          <p className="text-xl text-saffron-600">
            Manage your Gita Prerna website content
          </p>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[250px,1fr] gap-8">
            {/* Sidebar */}
            <div className="glass-effect rounded-3xl p-6 h-fit shadow-lg">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'saffron-gradient-bg text-white shadow-md'
                        : 'text-deepred-800 hover:bg-saffron-50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-saffron-200">
                <button
                  onClick={() => {
                    setIsAuthenticated(false);
                    toast.success('Logged out successfully');
                  }}
                  className="w-full px-4 py-3 rounded-xl font-semibold text-deepred-800 hover:bg-red-50 transition-all"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="glass-effect rounded-3xl p-8 shadow-lg">
              {/* Chapters & Shlokas Tab */}
              {activeTab === 'chapters' && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold saffron-text-gradient font-display">
                      Chapters & Shlokas Management
                    </h2>
                    <motion.button
                      onClick={() => setIsAddingContent(!isAddingContent)}
                      className="flex items-center gap-2 px-6 py-3 rounded-full saffron-gradient-bg text-white font-semibold shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isAddingContent ? <X size={20} /> : <Plus size={20} />}
                      {isAddingContent ? 'Cancel' : 'Add Shloka'}
                    </motion.button>
                  </div>

                  {isAddingContent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-saffron-200"
                    >
                      <h3 className="text-xl font-bold text-deepred-900 mb-4">Add New Shloka</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-deepred-900 font-semibold mb-2">
                              Chapter Number
                            </label>
                            <select className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none">
                              {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
                                <option key={num} value={num}>
                                  Chapter {num}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-deepred-900 font-semibold mb-2">
                              Shloka Number
                            </label>
                            <input
                              type="number"
                              placeholder="e.g., 1"
                              className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-deepred-900 font-semibold mb-2">
                            Sanskrit Text
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Enter Sanskrit shloka"
                            className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none font-hindi"
                          />
                        </div>

                        <div>
                          <label className="block text-deepred-900 font-semibold mb-2">
                            Transliteration
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Enter transliteration"
                            className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-deepred-900 font-semibold mb-2">
                              English Translation
                            </label>
                            <textarea
                              rows={3}
                              placeholder="Enter English translation"
                              className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-deepred-900 font-semibold mb-2">
                              Hindi Translation
                            </label>
                            <textarea
                              rows={3}
                              placeholder="हिंदी अनुवाद दर्ज करें"
                              className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none font-hindi"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-deepred-900 font-semibold mb-2">
                              English Commentary
                            </label>
                            <textarea
                              rows={4}
                              placeholder="Enter English commentary"
                              className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-deepred-900 font-semibold mb-2">
                              Hindi Commentary
                            </label>
                            <textarea
                              rows={4}
                              placeholder="हिंदी टिप्पणी दर्ज करें"
                              className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none font-hindi"
                            />
                          </div>
                        </div>

                        <motion.button
                          onClick={() => {
                            toast.success('Shloka added successfully!');
                            setIsAddingContent(false);
                          }}
                          className="w-full py-4 rounded-full text-lg font-semibold text-white shadow-lg saffron-gradient-bg flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Save size={20} />
                          Save Shloka
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {/* Existing Shlokas List */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-deepred-900">Existing Shlokas</h3>
                    {[1, 2].map((num) => (
                      <div
                        key={num}
                        className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-saffron-200"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-deepred-900">
                              Chapter {num} - Shloka {num}
                            </h4>
                            <p className="text-sm text-saffron-600">Last updated: Today</p>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 rounded-lg bg-saffron-100 text-saffron-700 hover:bg-saffron-200">
                              <Edit size={18} />
                            </button>
                            <button className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                        <p className="text-deepred-700/80 text-sm">
                          Click edit to modify this shloka's content...
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Tab */}
              {activeTab === 'gallery' && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold saffron-text-gradient font-display">
                      Gallery Management
                    </h2>
                    <motion.button
                      onClick={() => toast.success('Image upload feature coming soon!')}
                      className="flex items-center gap-2 px-6 py-3 rounded-full saffron-gradient-bg text-white font-semibold shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Upload size={20} />
                      Upload Image
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className="relative aspect-square rounded-2xl overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-saffron-gradient-bg" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button className="p-3 rounded-full bg-white text-saffron-700 hover:bg-saffron-100">
                            <Edit size={18} />
                          </button>
                          <button className="p-3 rounded-full bg-white text-red-700 hover:bg-red-100">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos Tab */}
              {activeTab === 'videos' && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold saffron-text-gradient font-display">
                      Video Management
                    </h2>
                    <motion.button
                      onClick={() => setIsAddingContent(!isAddingContent)}
                      className="flex items-center gap-2 px-6 py-3 rounded-full saffron-gradient-bg text-white font-semibold shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isAddingContent ? <X size={20} /> : <Plus size={20} />}
                      {isAddingContent ? 'Cancel' : 'Add Video'}
                    </motion.button>
                  </div>

                  {isAddingContent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-saffron-200"
                    >
                      <h3 className="text-xl font-bold text-deepred-900 mb-4">Add YouTube Video</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-deepred-900 font-semibold mb-2">
                            Chapter Number
                          </label>
                          <select className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none">
                            {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
                              <option key={num} value={num}>
                                Chapter {num}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-deepred-900 font-semibold mb-2">
                            YouTube Video ID
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., dQw4w9WgXcQ"
                            className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                          />
                          <p className="text-sm text-deepred-700/70 mt-2">
                            Extract the ID from YouTube URL: youtube.com/watch?v=<strong>VIDEO_ID</strong>
                          </p>
                        </div>

                        <motion.button
                          onClick={() => {
                            toast.success('Video added successfully!');
                            setIsAddingContent(false);
                          }}
                          className="w-full py-4 rounded-full text-lg font-semibold text-white shadow-lg saffron-gradient-bg flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Save size={20} />
                          Save Video
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-deepred-900">Chapter Videos</h3>
                    {[1, 2, 3].map((num) => (
                      <div
                        key={num}
                        className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-saffron-200"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-bold text-deepred-900">
                              Chapter {num} Video
                            </h4>
                            <p className="text-sm text-saffron-600">
                              Video ID: tPqJdm2_rNc
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 rounded-lg bg-saffron-100 text-saffron-700 hover:bg-saffron-200">
                              <Edit size={18} />
                            </button>
                            <button className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-3xl font-bold saffron-text-gradient mb-8 font-display">
                    Website Settings
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-saffron-200">
                      <h3 className="text-xl font-bold text-deepred-900 mb-4">Site Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-deepred-900 font-semibold mb-2">
                            Site Name
                          </label>
                          <input
                            type="text"
                            defaultValue="गीता प्रेरणा - Gita Prerna"
                            className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-deepred-900 font-semibold mb-2">
                            Contact Email
                          </label>
                          <input
                            type="email"
                            defaultValue="info@gitaprerna.com"
                            className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-deepred-900 font-semibold mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            defaultValue="+91 123 456 7890"
                            className="w-full p-3 rounded-xl border-2 border-saffron-200 focus:border-saffron-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => toast.success('Settings saved successfully!')}
                      className="w-full py-4 rounded-full text-lg font-semibold text-white shadow-lg saffron-gradient-bg flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Save size={20} />
                      Save All Settings
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Users Tab */}
              {activeTab === 'users' && (
                <div>
                  <h2 className="text-3xl font-bold saffron-text-gradient mb-8 font-display">
                    User Management
                  </h2>
                  <div className="text-center py-12">
                    <Users className="mx-auto text-saffron-600 mb-4" size={64} />
                    <p className="text-xl text-deepred-700/70">
                      User management features coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AdminPage() {
  return (
    <LanguageProvider>
      <AdminContent />
    </LanguageProvider>
  );
}
