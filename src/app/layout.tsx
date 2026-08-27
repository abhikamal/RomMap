import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RomMap - Intelligent Storage Explorer',
  description: 'Smart Curation, Deletion Risk Advisor, Creation-Mode Tagging.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
