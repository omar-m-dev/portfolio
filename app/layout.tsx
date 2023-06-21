import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/globals.scss'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Omar.dev',
  description: 'Omar Mohamed | Software Engineer',
  viewport: { width: 'device-width', initialScale: 1 },
  twitter: {
    site: '@omarr_dev',
    card: 'summary',
    title: 'Omar Mohamed | Software Engineer',
    description:
      'Hey! I$apos;m Omar Mohamed. I$apos;m a Full-Stack Web Developer.',
    creator: '@omarr_dev',
    images: ['/thumbnail.png'],
  },
  openGraph: {
    title: 'Omar Mohamed | Software Engineer',
    type: 'article',
    url: '/',
    images: ['/thumbnail.png'],
    description:
      'Hey! I$apos;m Omar Mohamed. I$apos;m a Full-Stack Web Developer.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="max-w-[100vw] bg-primary text-sm text-typography">
        {children}
      </body>
    </html>
  )
}
