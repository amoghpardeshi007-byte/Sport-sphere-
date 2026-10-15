import React, { useState } from 'react';
import { X, Check, Copy, AlertTriangle, ShieldCheck, Dumbbell, Clock, Target } from 'lucide-react';
import { DrillResource } from '../types/sports';

interface DrillModalProps {
  drill: DrillResource | null;
  onClose: () => void;
}

export const DrillModal: React.FC<DrillModalProps> = ({ drill, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!drill) return null;

  const handleCopy = () => {
    const textContent = `
${drill.title}
Category: ${drill.category} | Level: ${drill.level} | Duration: ${drill.duration}

Overview:
${drill.overview}

Target Focus:
${drill.targetFocus.map((f) => `- ${f}`).join('\n')}

Step-by-Step Routine:
${drill.steps
  .map(
    (s) =>
      `Step ${s.stepNumber}: ${s.title}\n${s.description}${s.setsReps ? `\nTarget Sets/Reps: ${s.setsReps}` : ''}`
  )
  .join('\n\n')}

Coaching Cues:
${drill.coachingTips.map((tip) => `- ${tip}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-start justify-between gap-4 bg-stone-50">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 uppercase tracking-widest font-mono mb-1">
              <span>{drill.category}</span>
              <span aria-hidden="true">·</span>
              <span>{drill.level}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {drill.duration}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-stone-900">
              {drill.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-200/60 transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-stone-800 text-sm sm:text-base font-sans">
          {/* Overview */}
          <div>
            <p className="text-stone-700 leading-relaxed">{drill.overview}</p>
          </div>

          {/* Target Focus */}
          <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
              <Target className="w-4 h-4 text-amber-700" />
              <span>Target Biomechanical & Skill Focus</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
              {drill.targetFocus.map((focus, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Training Protocol */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
              <Dumbbell className="w-4 h-4 text-stone-700" />
              <span>Step-by-Step Execution Sequence</span>
            </div>
            <div className="space-y-4">
              {drill.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-4 rounded-lg border border-stone-200 bg-white"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-stone-900 text-base">
                      {step.stepNumber}. {step.title}
                    </h3>
                    {step.setsReps && (
                      <span className="text-xs font-mono font-medium bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-200 whitespace-nowrap">
                        {step.setsReps}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coaching Cues */}
          <div className="border-t border-stone-200 pt-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Pro Coaching Cues</span>
            </div>
            <ul className="space-y-2 text-sm text-stone-700">
              {drill.coachingTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold shrink-0">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Alert (if any) */}
          {drill.safetyWarning && (
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs sm:text-sm text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Clinical Note:</strong> {drill.safetyWarning}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Routine</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
