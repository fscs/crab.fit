import { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import Egg from '/src/components/Egg/Egg'
import Settings from '/src/components/Settings/Settings'
import TranslateDialog from '/src/components/TranslateDialog/TranslateDialog'
import { fallbackLng } from '/src/i18n/options'
import { useTranslation } from '/src/i18n/server'

import './global.css'

const karla = localFont({ src: './fonts/karla.ttf' })

export const metadata: Metadata = {
  metadataBase: new URL('https://crab.fit'),
  title: {
    absolute: 'Crab Fit',
    template: '%s - Crab Fit',
  },
  keywords: ['crab', 'fit', 'crabfit', 'schedule', 'availability', 'availabilities', 'when2meet', 'doodle', 'meet', 'plan', 'time', 'timezone'],
  description: 'Enter your availability to find a time that works for everyone!',
  manifest: 'manifest.json',
  openGraph: {
    title: 'Crab Fit',
    description: 'Enter your availability to find a time that works for everyone!',
    url: '/',
  },
  icons: {
    icon: 'favicon.ico',
    apple: 'logo192.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F79E00',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { resolvedLanguage } = await useTranslation([])

  return <html lang={resolvedLanguage ?? fallbackLng}>
    <body className={karla.className}>
      <Settings />
      <Egg />
      <TranslateDialog />

      {children}
    </body>
  </html>
}

export default RootLayout
