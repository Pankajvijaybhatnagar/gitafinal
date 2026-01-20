import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'गीता प्रेरणा - Bhagwad Gita Divine Wisdom',
  description: 'Experience the timeless wisdom of the Bhagwad Gita with 18 chapters, 700 shlokas in Hindi, English and multiple languages',
  keywords: 'Bhagwad Gita, Geeta, Hindi, Sanskrit, Spiritual Wisdom, Krishna, Arjuna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'linear-gradient(135deg, #ff6b35, #dc2626)',
              color: '#fff',
              padding: '16px',
              borderRadius: '12px',
              fontWeight: '600',
            },
          }}
        />
      </body>
    </html>
  )
}
