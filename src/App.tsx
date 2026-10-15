/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CHAPTERS_DATA } from './data/sportsData';
import { DRILL_RESOURCES } from './data/drillResources';
import { DrillResource } from './types/sports';
import { Header } from './components/Header';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Hero } from './components/Hero';
import { TableOfContents } from './components/TableOfContents';
import { ChapterSection } from './components/ChapterSection';
import { DrillModal } from './components/DrillModal';
import { AthleteCalculatorModal } from './components/AthleteCalculatorModal';
import { SearchModal } from './components/SearchModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState<string>(CHAPTERS_DATA[0].id);
  const [selectedDrill, setSelectedDrill] = useState<DrillResource | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const chapter of CHAPTERS_DATA) {
        const el = document.getElementById(chapter.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveChapterId(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectChapter = (id: string) => {
    setActiveChapterId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDrill = (drillId: string) => {
    const drill = DRILL_RESOURCES[drillId];
    if (drill) {
      setSelectedDrill(drill);
    } else {
      // Fallback drill info if key differs
      setSelectedDrill({
        id: drillId,
        title: drillId.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        category: 'Sports Science & Conditioning',
        level: 'All Levels',
        duration: '30-45 Minutes',
        overview: 'Comprehensive training progression designed to reinforce proper movement biomechanics, sport-specific energy pathways, and structural injury prevention.',
        targetFocus: ['Biomechanical alignment', 'Dynamic stabilization', 'Kinetic energy chain transfer'],
        steps: [
          {
            stepNumber: 1,
            title: 'Movement Pattern Calibration',
            description: 'Execute controlled sport-specific movement patterns with focus on alignment and posture.',
            setsReps: '3 sets of 10 repetitions'
          },
          {
            stepNumber: 2,
            title: 'Progressive Overload Integration',
            description: 'Increase movement tempo and velocity while strictly preserving technical precision.',
            setsReps: '4 sets of 6-8 repetitions'
          }
        ],
        coachingTips: [
          'Prioritize movement quality and precision over speed or excessive load.',
          'Always incorporate adequate rest between maximal exertion efforts.'
        ]
      });
    }
  };

  const handleImageZoom = (src: string, alt: string) => {
    setZoomedImage({ src, alt });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950 flex flex-col">
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Primary Top Bar Contract */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onSelectChapter={handleSelectChapter}
      />

      {/* Editorial Hero Section */}
      <Hero
        chapters={CHAPTERS_DATA}
        onSelectChapter={handleSelectChapter}
        onOpenDrill={handleOpenDrill}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Main Guide Content Layout (Two-Column Asymmetric Layout on Desktop) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Reading Column */}
          <div className="flex-1 max-w-4xl min-w-0">
            {CHAPTERS_DATA.map((chapter) => (
              <ChapterSection
                key={chapter.id}
                chapter={chapter}
                onOpenDrill={handleOpenDrill}
                onImageZoom={handleImageZoom}
              />
            ))}
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <TableOfContents
            chapters={CHAPTERS_DATA}
            activeChapterId={activeChapterId}
            onSelectChapter={handleSelectChapter}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        chapters={CHAPTERS_DATA}
        onSelectChapter={handleSelectChapter}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Modals & Drawers */}
      <DrillModal
        drill={selectedDrill}
        onClose={() => setSelectedDrill(null)}
      />

      <AthleteCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        chapters={CHAPTERS_DATA}
        onSelectChapter={handleSelectChapter}
      />

      <ImageLightboxModal
        image={zoomedImage}
        onClose={() => setZoomedImage(null)}
      />
    </div>
  );
}
