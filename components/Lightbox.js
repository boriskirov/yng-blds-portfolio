// components/Lightbox.jsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Lightbox({
  isOpen,
  src,
  alt = "",
  onClose,
  onNext,
  onPrev,
}) {
  // ESC / ← / → keyboard handling
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !src) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-inner"
        onClick={(e) => e.stopPropagation()} // don't close when clicking inside
      >
        {onPrev && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-prev"
            onClick={onPrev}
          >
            ‹
          </button>
        )}

        <div className="lightbox-image-wrapper">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            className="lightbox-image"
            priority
          />
        </div>

        {onNext && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-next"
            onClick={onNext}
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
