import React from 'react';
import { ArrowUp, BookOpen, ShieldCheck } from 'lucide-react';
import { Chapter } from '../types/sports';

interface FooterProps {
  chapters: Chapter[];
  onSelectChapter: (id: string) => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  chapters,
  onSelectChapter,
  onOpenCalculator,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          {/* Brand & Editorial Column */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
              SPORTSPHERE
            </h2>
            <p className="text-sm text-stone-400 font-sans leading-relaxed max-w-md">
              The authoritative compendium on athletic conditioning, biomechanics, nutrition, sports psychology, and the emerging future of competitive athletics. Crafted for athletes, coaches, and sports enthusiasts worldwide.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>AEO Schema.org FAQPage Validated</span>
            </div>
          </div>

          {/* Quick Chapters Column */}
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-stone-400 mb-4">
              Featured Chapters
            </div>
            <ul className="space-y-2 text-sm">
              {chapters.slice(1, 6).map((ch) => (
                <li key={ch.id}>
                  <button
                    onClick={() => onSelectChapter(ch.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer text-stone-300"
                  >
                    {ch.title.split(':')[0]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Resources Column */}
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-stone-400 mb-4">
              Athletic Resources
            </div>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Macro & Hydration Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fast Bowling Workload Caps
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Agility Testing Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectChapter('future-of-sports')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Future of Sports
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 SPORTSPHERE Athletics Compendium. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="italic">
              Stay motivated. Train smart. Play with passion.
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
