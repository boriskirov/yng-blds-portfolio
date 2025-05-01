import { useState, useRef, useEffect } from "react";

export default function AutoOrientedImage({ src, alt }) {
  const [orientation, setOrientation] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      // Image was already loaded before React mounted
      const { naturalWidth, naturalHeight } = imgRef.current;
      setOrientation(naturalWidth > naturalHeight ? "landscape" : "portrait");
    }
  }, [src]); // Re-run when image changes

  const handleLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setOrientation(naturalWidth > naturalHeight ? "landscape" : "portrait");
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={handleLoad}
      className={`blog-image ${orientation || ""}`}
      style={{ maxWidth: "100%", borderRadius: "2px" }}
    />
  );
}
