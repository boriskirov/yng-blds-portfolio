import { useState } from "react";
import Item from "../components/grid-item";
import Header from "../components/header";
import Metadata from "../components/metadata";
import Lightbox from "../components/Lightbox";

// Single source of truth for the Outdoors images
const outdoorsImages = [
  { src: "/outdoors/outdoors-44.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-1.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-2.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-26.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-36.jpg", width: 320, height: 240 },
  { src: "/outdoors/outdoors-42.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-19.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-5.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-38.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-39.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-40.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-41.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-33.jpg", width: 320, height: 240 },
  { src: "/outdoors/outdoors-35.jpg", width: 320, height: 240 },
  { src: "/outdoors/outdoors-18.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-37.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-6.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-27.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-28.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-4.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-30.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-12.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-25.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-15.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-17.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-24.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-31.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-32.jpg", width: 320, height: 240 },
  { src: "/outdoors/outdoors-29.png", width: 320, height: 240 },
  { src: "/outdoors/outdoors-34.jpg", width: 320, height: 240 },
];

export default function Outdoors() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const hasLightbox = lightboxIndex !== null;
  const currentImage =
    hasLightbox && outdoorsImages[lightboxIndex]
      ? outdoorsImages[lightboxIndex]
      : null;

  const goNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % outdoorsImages.length;
    });
  };

  const goPrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + outdoorsImages.length) % outdoorsImages.length;
    });
  };

  return (
    <div className="main-container grid about-bg">
      <Metadata
        title="Boris Kirov"
        description="Outdoors & Nature Photography"
        image="/avatar.png"
      />
      <Header />
      <main className="cs1 ce12">
        <div className="grid">
          <div className="cs1 ce12 grid-container">
            {outdoorsImages.map((img, index) => (
              <Item
                key={img.src}
                src={img.src}
                width={img.width}
                height={img.height}
                alt={"Outdoors image " + (index + 1)}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </main>

      <Lightbox
        isOpen={hasLightbox}
        src={currentImage ? currentImage.src : null}
        alt="Outdoors image"
        onClose={closeLightbox}
        onNext={goNext}
        onPrev={goPrev}
      />
    </div>
  );
}
