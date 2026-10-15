import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { Chapter } from '../types/sports';

interface HeroProps {
  chapters: Chapter[];
  onSelectChapter: (id: string) => void;
  onOpenDrill: (drillId: string) => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  chapters,
  onSelectChapter,
  onOpenCalculator,
}) => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle / Header metadata with zero-pill discipline */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 uppercase tracking-widest font-sans mb-4">
          <span className="font-semibold text-stone-900">SPORTSPHERE COMPENDIUM</span>
          <span aria-hidden="true">·</span>
          <span>12 Chapters</span>
          <span aria-hidden="true">·</span>
          <span>AEO Question-Answer Engine Optimized</span>
          <span aria-hidden="true">·</span>
          <span>14 Min Read</span>
        </div>

        {/* Hero Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 font-display tracking-tight uppercase leading-[0.98] text-balance">
            The Ultimate Guide to Sports, Fitness, Training & the Future of Athletics
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            Sports are more than just games. They teach discipline, teamwork, leadership, confidence, and determination. Explore our comprehensive, question-answered guide covering popular sports, fast bowling speed biomechanics, tactical agility, athlete nutrition, sports psychology, and cutting-edge performance technology.
          </p>
        </div>

        {/* Quick Action Ribbon */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onSelectChapter('introduction')}
            className="px-4 py-2.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Full Guide</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
          <button
            onClick={onOpenCalculator}
            className="px-4 py-2.5 text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Interactive Nutrition & Workload Tools</span>
          </button>
        </div>

        {/* Hero Visual Asset */}
        <div className="mt-10 overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-200">
            <img
              src="/src/assets/images/sportsphere_hero_athletics_1791989518471.jpg"
              alt="Elite athletes sprinting on professional athletic track under stadium lights"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-stone-800 text-stone-100 p-8 text-center">
                      <span class="text-3xl font-display font-bold uppercase tracking-wider mb-2">SPORTSPHERE ATHLETICS</span>
                      <p class="text-sm text-stone-400 max-w-md">Precision sports science, dynamic movement, and the modern future of global athletics.</p>
                    </div>
                  `;
                }
              }}
            />
          </div>
          <div className="p-3 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 gap-2">
            <p className="italic">
              Frontispiece — High-performance athletes executing acceleration phases on competition track.
            </p>
            <span className="text-stone-400 font-mono shrink-0">Photo: SPORTSPHERE Field Lens</span>
          </div>
        </div>

        {/* Quick Chapter Selector Strip */}
        <div className="mt-10 pt-6 border-t border-stone-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
            Quick Chapter Navigation
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(ch.id)}
                className="px-3 py-1.5 text-xs font-medium bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-900 rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="text-stone-400 font-mono text-[11px]">
                  {idx === 0 ? 'Intro' : idx === chapters.length - 1 ? 'End' : `0${ch.chapterNumber || idx}`}
                </span>
                <span>{ch.title.split(':')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
