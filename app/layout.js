import { Inter } from 'next/font/google'
import './globals.css'
import Mode from './Mode'

export const metadata = {
  title: 'Next Forest - Whitelim ',
  description: 'Whitelim Protfolio - Next fotest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Mode children={children} />
    </html>
  )
}
