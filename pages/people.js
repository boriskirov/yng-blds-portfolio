import { useState } from "react";
import Link from "next/link";
import Item from "../components/grid-item";
import Header from "../components/header";
import Metadata from "../components/metadata";
import Lightbox from "../components/Lightbox";

// Master list of images on this page
const peopleImages = [
  {
    src: "/life/life-71.jpg",
    width: 320,
    height: 240,
    href: "/projects/power-of-love-of-power", // this one is a link, not zoomable
    zoomable: false,
  },
  { src: "/life/life-74.jpg", width: 320, height: 240 },
  { src: "/life/life-81.png", width: 320, height: 240 },
  { src: "/life/life-86.jpg", width: 320, height: 240 },
  { src: "/life/life-77.png", width: 320, height: 240 },
  { src: "/life/life-78.png", width: 320, height: 240 },
  { src: "/life/life-80.png", width: 320, height: 240 },
  { src: "/life/life-75.jpg", width: 320, height: 240 },
  { src: "/life/life-83.png", width: 320, height: 240 },
  { src: "/life/life-76.jpg", width: 320, height: 240 },
  { src: "/life/life-35.png", width: 320, height: 240 },
  { src: "/life/life-68.jpg", width: 320, height: 240 },
  { src: "/life/life-82.png", width: 320, height: 240 },
  { src: "/life/life-38.png", width: 320, height: 240 },
  { src: "/life/life-79.png", width: 320, height: 240 },
  { src: "/life/life-67.png", width: 320, height: 240 },
  { src: "/life/life-85.jpg", width: 320, height: 240 },
  { src: "/life/life-72.png", width: 320, height: 240 },
  { src: "/life/life-40.png", width: 320, height: 240 },
  { src: "/life/life-53.png", width: 320, height: 240 },
  { src: "/life/life-30.png", width: 320, height: 240 },
  { src: "/life/life-69.jpg", width: 320, height: 240 },
  { src: "/life/life-61.jpg", width: 320, height: 240 },
  { src: "/life/life-56.png", width: 320, height: 240 },
  { src: "/life/life-66.png", width: 320, height: 240 },
  { src: "/life/life-50.png", width: 320, height: 240 },
  { src: "/life/life-33.png", width: 320, height: 240 },
  { src: "/life/life-84.png", width: 320, height: 240 },
  { src: "/life/life-70.jpg", width: 320, height: 240 },
  { src: "/life/life-45.png", width: 320, height: 240 },
  { src: "/life/life-60.jpg", width: 320, height: 240 },
  { src: "/life/life-55.png", width: 320, height: 240 },
  { src: "/life/life-1.jpg", width: 320, height: 240 },
  { src: "/life/life-58.png", width: 320, height: 240 },
  { src: "/life/life-37.jpg", width: 320, height: 240 },
  { src: "/life/life-62.jpg", width: 320, height: 240 },
  { src: "/life/life-63.jpg", width: 320, height: 240 },
  { src: "/life/life-54.png", width: 320, height: 240 },
  { src: "/life/life-12.png", width: 320, height: 240 },
  { src: "/life/life-64.jpg", width: 320, height: 240 },
  { src: "/life/life-59.png", width: 320, height: 240 },
  { src: "/life/life-46.png", width: 320, height: 240 },
  { src: "/life/life-47.png", width: 320, height: 240 },
  { src: "/life/life-36.png", width: 320, height: 240 },
  { src: "/life/life-34.png", width: 320, height: 240 },
  { src: "/life/life-51.png", width: 320, height: 240 },
];

export default function People() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    // only open for zoomable images
    if (peopleImages[index] && peopleImages[index].zoomable === false) return;
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const hasLightbox = lightboxIndex !== null;
  const currentImage =
    hasLightbox && peopleImages[lightboxIndex]
      ? peopleImages[lightboxIndex]
      : null;

  // Next/prev that skip non-zoomable items (like the linked first one)
  const goNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;

      let idx = prev;
      for (let i = 0; i < peopleImages.length; i++) {
        idx = (idx + 1) % peopleImages.length;
        if (peopleImages[idx].zoomable !== false) {
          return idx;
        }
      }
      return prev;
    });
  };

  const goPrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;

      let idx = prev;
      for (let i = 0; i < peopleImages.length; i++) {
        idx = (idx - 1 + peopleImages.length) % peopleImages.length;
        if (peopleImages[idx].zoomable !== false) {
          return idx;
        }
      }
      return prev;
    });
  };

  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="Boris Kirov"
        description="Life & Portrait Photography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            {peopleImages.map((img, index) => {
              const item = (
                <Item
                  key={img.src}
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={"Life & portrait image " + (index + 1)}
                  onClick={img.href ? undefined : () => openLightbox(index)}
                />
              );

              // If this image has a link, wrap it in <Link> instead of making it zoomable
              if (img.href) {
                return (
                  <Link href={img.href} key={img.src}>
                    {item}
                  </Link>
                );
              }

              return item;
            })}
          </div>
        </div>
      </main>

      <Lightbox
        isOpen={hasLightbox}
        src={currentImage ? currentImage.src : null}
        alt="Life & portrait image"
        onClose={closeLightbox}
        onNext={goNext}
        onPrev={goPrev}
      />
    </div>
  );
}
