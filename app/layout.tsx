import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../component/header/page'; // adjust the path if needed

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AOS Portfolio',
  description: 'Portfolio showcasing my work and skills in Software Engineering',
  icons: {
    icon: '/AOS.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#1c2226] text-white">
        <div className="px-16">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
