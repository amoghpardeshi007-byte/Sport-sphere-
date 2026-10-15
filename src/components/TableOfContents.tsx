import React from 'react';
import { Chapter } from '../types/sports';

interface TableOfContentsProps {
  chapters: Chapter[];
  activeChapterId: string;
  onSelectChapter: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  chapters,
  activeChapterId,
  onSelectChapter,
}) => {
  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-20 p-5 bg-white rounded-xl border border-stone-200 shadow-2xs max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-stone-500 mb-4 pb-2 border-b border-stone-200">
          <span>Contents Directory</span>
          <span className="font-mono text-[11px] text-stone-400">12 Chapters</span>
        </div>
        <nav className="space-y-1">
          {chapters.map((ch, idx) => {
            const isActive = ch.id === activeChapterId;
            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(ch.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-xs sm:text-sm font-sans transition-all flex items-start gap-2.5 cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white font-medium shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <span
                  className={`font-mono text-xs shrink-0 mt-0.5 ${
                    isActive ? 'text-amber-400 font-bold' : 'text-stone-400'
                  }`}
                >
                  {idx === 0
                    ? '00'
                    : idx === chapters.length - 1
                    ? '11'
                    : ch.chapterNumber && ch.chapterNumber < 10
                    ? `0${ch.chapterNumber}`
                    : ch.chapterNumber || idx}
                </span>
                <span className="line-clamp-1">{ch.title.split(':')[0]}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-stone-200 text-[11px] text-stone-500 font-sans leading-relaxed">
          <p>
            <strong>AEO Optimized:</strong> Every subheading and section is indexed with Schema.org FAQPage structured data for search engine answer bots.
          </p>
        </div>
      </div>
    </aside>
  );
};
