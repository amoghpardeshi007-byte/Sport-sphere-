export interface QAItem {
  id: string;
  question: string;
  answer: string;
  keyTakeaway?: string;
}

export interface AnchorLink {
  id: string;
  text: string;
  category: 'cricket' | 'football' | 'fitness' | 'nutrition' | 'basketball' | 'tech' | 'psychology' | 'grassroots' | 'future';
  description: string;
}

export interface DrillResource {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  overview: string;
  targetFocus: string[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    setsReps?: string;
  }[];
  coachingTips: string[];
  safetyWarning?: string;
}

export interface Chapter {
  id: string;
  chapterNumber?: number;
  title: string;
  h2Question: string;
  directAnswerSnippet: string;
  introduction?: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
    figureNumber: number;
  };
  qaItems: QAItem[];
  anchorLinks: AnchorLink[];
  quote?: {
    text: string;
    author: string;
  };
}
