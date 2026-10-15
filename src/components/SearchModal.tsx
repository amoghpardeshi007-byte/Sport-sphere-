import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, ArrowRight, HelpCircle, BookOpen } from 'lucide-react';
import { Chapter } from '../types/sports';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  chapters,
  onSelectChapter,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: {
      chapterId: string;
      chapterTitle: string;
      questionTitle: string;
      answerExcerpt: string;
    }[] = [];

    chapters.forEach((chapter) => {
      chapter.qaItems.forEach((qa) => {
        if (
          qa.question.toLowerCase().includes(q) ||
          qa.answer.toLowerCase().includes(q) ||
          chapter.title.toLowerCase().includes(q)
        ) {
          results.push({
            chapterId: chapter.id,
            chapterTitle: chapter.title,
            questionTitle: qa.question,
            answerExcerpt: qa.answer.slice(0, 140) + '...',
          });
        }
      });
    });

    return results.slice(0, 8);
  }, [query, chapters]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            placeholder="Search questions, sports, drills, bowling speed, nutrition..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-base font-sans text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-600 px-2 py-1 rounded border border-stone-200 cursor-pointer shrink-0"
          >
            Esc
          </button>
        </div>

        {/* Results or Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="p-4 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Common Sports Topics to Explore
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Bowling Speed',
                  'Sports Nutrition',
                  'Agility Drills',
                  'Cricket in India',
                  'Basketball BEEF Form',
                  'Football Tactics',
                  'Sports Psychology',
                  'Stress Fractures',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-md transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-stone-500 text-sm">
              No matching answers found for "{query}". Try searching for broader terms like "fitness", "cricket", "food", or "speed".
            </div>
          ) : (
            searchResults.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  onSelectChapter(item.chapterId);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-lg border border-stone-200 hover:border-amber-400 hover:bg-amber-50/40 transition-colors group cursor-pointer block"
              >
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-1">
                  <span>{item.chapterTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700 transition-colors" />
                </div>
                <div className="font-semibold text-stone-900 text-sm sm:text-base font-sans group-hover:text-amber-900">
                  {item.questionTitle}
                </div>
                <p className="text-xs text-stone-600 line-clamp-2 mt-1 font-sans">
                  {item.answerExcerpt}
                </p>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
