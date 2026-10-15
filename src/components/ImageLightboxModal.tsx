import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxModalProps {
  image: {
    src: string;
    alt: string;
  } | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <p className="mt-3 text-stone-300 text-sm font-sans text-center max-w-2xl px-4">
          {image.alt}
        </p>
      </div>
    </div>
  );
};
