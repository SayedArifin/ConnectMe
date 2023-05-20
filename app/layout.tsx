import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Connect Me',
  description: 'Connect Me is a convenient massage app that connects users with professional massage therapists for personalized and tailored experiences. With a user-friendly interface, it allows easy browsing of therapist profiles, reading reviews, and booking appointments. Say goodbye to the hassle of searching for a spa or clinic, and let Connect Me bring the benefits of relaxation and rejuvenation directly to you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
