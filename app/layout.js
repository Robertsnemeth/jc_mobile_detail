import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Navbar from './components/navbar';
import Footer from './components/footer';

const nunito = Nunito_Sans({ subsets: ['latin'], weight: '200'})

export const metadata = {
  title: 'JC Mobile Detailing',
  description: 'Mobile Auto Detaling out of Enumclaw, WA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className='scroll-smooth'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
