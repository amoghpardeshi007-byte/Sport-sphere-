import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  HelpCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Bookmark, 
  Maximize2 
} from 'lucide-react';
import { Chapter } from '../types/sports';

interface ChapterSectionProps {
  chapter: Chapter;
  onOpenDrill: (drillId: string) => void;
  onImageZoom?: (imageSrc: string, alt: string) => void;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({
  chapter,
  onOpenDrill,
  onImageZoom,
}) => {
  const [expandedQA, setExpandedQA] = useState<Record<string, boolean>>(() => {
    // Default open the first two Q&A items for effortless immediate reading
    const initial: Record<string, boolean> = {};
    chapter.qaItems.forEach((item, index) => {
      initial[item.id] = index < 2;
    });
    return initial;
  });

  const toggleQA = (id: string) => {
    setExpandedQA((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    chapter.qaItems.forEach((item) => {
      all[item.id] = true;
    });
    setExpandedQA(all);
  };

  const collapseAll = () => {
    const all: Record<string, boolean> = {};
    chapter.qaItems.forEach((item) => {
      all[item.id] = false;
    });
    setExpandedQA(all);
  };

  return (
    <article
      id={chapter.id}
      className="scroll-mt-24 pt-12 pb-16 border-b border-stone-200"
    >
      {/* Chapter Number & Top Index */}
      <div className="flex items-center justify-between text-xs text-stone-500 uppercase tracking-widest font-mono mb-2">
        <span>
          {chapter.chapterNumber
            ? `CHAPTER ${chapter.chapterNumber < 10 ? `0${chapter.chapterNumber}` : chapter.chapterNumber}`
            : 'SECTION OVERVIEW'}
        </span>
        <span className="text-stone-400">AEO Verified Structure</span>
      </div>

      {/* Chapter Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-stone-800 font-display uppercase tracking-tight mb-2">
        {chapter.title}
      </h3>

      {/* Primary Subheading (H2) in Question Format for AEO */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight leading-tight uppercase mb-6 text-balance">
        {chapter.h2Question}
      </h2>

      {/* Direct Answer Box (Optimized for AI Answer Engines & Search Featured Snippets) */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-5 sm:p-6 mb-8 text-stone-800 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Direct Answer / Quick Snippet</span>
        </div>
        <p className="text-base sm:text-lg font-sans text-stone-800 leading-relaxed">
          {chapter.directAnswerSnippet}
        </p>
      </div>

      {/* High-Fidelity Sports Image (if present for this chapter) */}
      {chapter.image && (
        <figure className="my-8 overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-xs">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 group">
            <img
              src={chapter.image.src}
              alt={chapter.image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-stone-800 text-stone-200 p-8 text-center">
                      <span class="text-lg font-display uppercase tracking-wider">${chapter.title}</span>
                    </div>
                  `;
                }
              }}
            />
            {onImageZoom && (
              <button
                onClick={() => onImageZoom(chapter.image!.src, chapter.image!.alt)}
                className="absolute top-3 right-3 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                title="View Full Resolution"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <figcaption className="p-3 bg-stone-50 border-t border-stone-200 text-xs sm:text-sm text-stone-600 font-sans italic flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>{chapter.image.caption}</span>
            <span className="not-italic text-stone-400 font-mono text-xs shrink-0">
              SPORTSPHERE Archive
            </span>
          </figcaption>
        </figure>
      )}

      {/* Question & Answer Content Grid (AEO Format) */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
            <HelpCircle className="w-4 h-4 text-stone-500" />
            <span>Comprehensive Questions & Answers</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-stone-500 font-sans">
            <button
              onClick={expandAll}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={collapseAll}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {chapter.qaItems.map((qa, index) => {
          const isOpen = !!expandedQA[qa.id];
          return (
            <div
              key={qa.id}
              className="border border-stone-200 rounded-lg bg-white overflow-hidden transition-all duration-200"
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggleQA(qa.id)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-stone-50/70 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-stone-400 mt-1 shrink-0">
                    Q{index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-sans leading-snug">
                    {qa.question}
                  </h3>
                </div>
                <div className="text-stone-400 mt-1 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-stone-700" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer Body */}
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-stone-100 bg-stone-50/30">
                  <div className="pl-6 sm:pl-7 border-l-2 border-stone-300 space-y-3">
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base font-sans">
                      {qa.answer}
                    </p>
                    {qa.keyTakeaway && (
                      <div className="text-xs sm:text-sm text-stone-600 bg-white p-3 rounded border border-stone-200 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-stone-900">Key Takeaway:</strong>{' '}
                          {qa.keyTakeaway}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pull Quote (if provided) */}
      {chapter.quote && (
        <blockquote className="my-10 py-6 px-6 sm:px-8 border-y border-stone-200 bg-stone-100/50 text-center">
          <p className="text-lg sm:text-xl font-serif italic text-stone-800 leading-relaxed">
            "{chapter.quote.text}"
          </p>
          <cite className="block mt-3 text-xs uppercase tracking-widest text-stone-500 font-sans not-italic">
            — {chapter.quote.author}
          </cite>
        </blockquote>
      )}

      {/* Anchor Text Links Section in the exact requested pattern: 'like: See all eggless cake flavours.' */}
      {chapter.anchorLinks.length > 0 && (
        <div className="mt-8 pt-6 border-t border-stone-200 bg-stone-100/60 rounded-lg p-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3">
            Related Drills, Tools & Field Guides
          </div>
          <div className="space-y-3">
            {chapter.anchorLinks.map((anchor) => (
              <div
                key={anchor.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-md border border-stone-200 hover:border-stone-400 transition-all shadow-2xs"
              >
                <div>
                  <button
                    onClick={() => onOpenDrill(anchor.id)}
                    className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-4 decoration-amber-400 hover:decoration-amber-800 transition-colors text-left cursor-pointer"
                  >
                    <span>{anchor.text}</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {anchor.description}
                  </p>
                </div>
                <button
                  onClick={() => onOpenDrill(anchor.id)}
                  className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded border border-stone-200 whitespace-nowrap self-start sm:self-center cursor-pointer"
                >
                  Open Drill Sheet
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
