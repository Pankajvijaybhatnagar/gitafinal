# 🚀 Quick Start Guide - गीता प्रेरणा

## Setup in 3 Simple Steps

### Step 1: Install Dependencies
```bash
cd gita-website
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit: http://localhost:3000

## 🎯 What You'll See

### Home Page (/)
- Beautiful hero section with Om symbol
- Feature cards
- Interactive chapter selector
- Animated saffron-red gradient backgrounds

### Chapters Page (/chapters)
- Grid of all 18 chapters
- Click any chapter to view details

### Chapter Detail (/chapters/1, /chapters/2, etc.)
- Chapter overview
- YouTube video lecture
- Shlokas with translations and commentary
- Navigation to previous/next chapters

### Gallery (/gallery)
- Spiritual images and artworks
- Lightbox view on click

### Donate (/donate)
- Donation amounts selection
- Payment method options
- Impact information

### Admin Panel (/admin)
- Login with password: admin123
- Manage chapters, shlokas, videos, gallery
- Settings configuration

## 🌐 Change Language

Click the globe icon in header and select:
- English
- हिंदी (Hindi)
- संस्कृत (Sanskrit)

## 📝 Add Your First Shloka

1. Go to http://localhost:3000/admin
2. Login with password: admin123
3. Click "Chapters & Shlokas"
4. Click "Add Shloka"
5. Fill in the form
6. Click "Save Shloka"

## 🎨 Color Theme

The entire website uses saffron-red gradient:
- Primary: #FF6B35 (Saffron)
- Secondary: #F97316 (Orange)
- Accent: #DC2626 (Red)
- Deep: #991B1B (Dark Red)

## 📦 Production Build

```bash
npm run build
npm start
```

## 🔧 Key Files to Edit

- **Add Content**: `lib/chaptersData.ts`
- **Add Translations**: `lib/translations.ts`
- **Customize Colors**: `tailwind.config.js` and `app/globals.css`
- **Modify Header**: `components/Header.tsx`
- **Modify Footer**: `components/Footer.tsx`

## 🎬 YouTube Video Integration

To add video to a chapter:
1. Get YouTube video ID (from URL: youtube.com/watch?v=VIDEO_ID)
2. Go to Admin Panel > Videos
3. Select chapter and paste video ID
4. Save

Or edit directly in `lib/chaptersData.ts`:
```typescript
{
  number: 1,
  // ... other fields
  youtubeVideoId: "tPqJdm2_rNc", // Add this line
}
```

## 📱 Mobile Responsive

The website automatically adapts to:
- Mobile phones (320px+)
- Tablets (768px+)
- Laptops (1024px+)
- Desktops (1920px+)

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Then run again
npm run dev
```

### Dependencies issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📚 Learn More

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

## 🙏 Enjoy Building!

**ॐ शान्ति शान्ति शान्तिः**

Happy coding! If you have questions, refer to the main README.md file.
