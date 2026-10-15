import React from 'react';
import { Search, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCalculator: () => void;
  onSelectChapter: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenCalculator,
  onSelectChapter,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#introduction"
            onClick={(e) => {
              e.preventDefault();
              onSelectChapter('introduction');
            }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 font-display uppercase whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
          >
            SPORTSPHERE
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#rise-of-cricket-india"
              onClick={(e) => {
                e.preventDefault();
                onSelectChapter('rise-of-cricket-india');
              }}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Cricket in India
            </a>
            <a
              href="#football-global-phenomenon"
              onClick={(e) => {
                e.preventDefault();
                onSelectChapter('football-global-phenomenon');
              }}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Football
            </a>
            <a
              href="#fast-bowlers-speed"
              onClick={(e) => {
                e.preventDefault();
                onSelectChapter('fast-bowlers-speed');
              }}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Bowling Speed
            </a>
            <a
              href="#sports-nutrition"
              onClick={(e) => {
                e.preventDefault();
                onSelectChapter('sports-nutrition');
              }}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Sports Nutrition
            </a>
            <button
              onClick={onOpenCalculator}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-stone-500" />
              <span>Athletic Tools</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-stone-900 bg-stone-200/70 hover:bg-stone-300/80 rounded-md transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              title="Search Questions & Topics"
            >
              <Search className="w-3.5 h-3.5 text-stone-700" />
              <span className="hidden sm:inline">Search Guide</span>
              <kbd className="hidden lg:inline-block text-[10px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded border border-stone-300">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
