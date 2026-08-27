"use client";

import Link from 'next/link';
import { Shield, HardDrive, Tag, ArrowRight, Zap, Lock, Search } from 'lucide-react';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
              <span className="text-white dark:text-black font-black text-lg">R</span>
            </div>
            RomMap
          </div>
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 hidden sm:block">Features</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Intelligent Storage Explorer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Organize, analyze, and securely curate your drives with Notion-like simplicity. Map your digital world in seconds.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center mt-10">
              <Link
                href="/register"
                className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex justify-center items-center text-lg gap-3"
              >
                Get RomMap Free <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Master Your Storage Space</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                RomMap provides a suite of advanced tools to help you reclaim gigabytes of wasted space without the risk of deleting important system files.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Curation</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Automatically categorize your storage space. RomMap visualizes your drive data so you can quickly identify large, forgotten files and unnecessary clutter in a beautiful, intuitive interface.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Deletion Risk Advisor</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Never accidentally break your OS again. Our AI-assisted risk advisor warns you before you delete critical Windows system files or frequently accessed application assets.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-6">
                  <Tag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Creation-Mode Tagging</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tag files and folders with intuitive, custom, color-coded labels directly from your file system. Filter your entire computer instantly based on project tags.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Deep Search Indexing</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Find any file across any drive in milliseconds. RomMap builds a lightweight, background index of your files without draining your CPU or RAM.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lightning Fast UX</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Built natively for Windows with zero bloat. Experience buttery smooth animations and transitions inspired by top-tier productivity tools like Notion.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">100% Offline & Private</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  RomMap is a completely offline desktop application. It never connects to external servers, meaning your file metadata and storage habits remain entirely on your local machine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-black dark:bg-white rounded flex items-center justify-center">
              <span className="text-white dark:text-black font-black text-xs">R</span>
            </div>
            RomMap
          </div>
          <div>
            &copy; {new Date().getFullYear()} RomMap. All rights reserved. No marketing emails, ever.
          </div>
        </div>
      </footer>
    </div>
  );
}
