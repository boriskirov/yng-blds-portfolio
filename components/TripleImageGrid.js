import Image from "next/image";

export default function TripleImageGrid({ images, caption }) {
  return (
    <div className="triple-image-grid-wrapper">
      <div className="triple-image-grid">
        {images.map((img, i) => (
          <div className="triple-image-cell" key={i}>
            <Image
              src={img.src}
              alt={img.alt || ""}
              width={600}
              height={600}
              className="triple-image"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <p className="triple-image-caption project-description">{caption}</p>
    </div>
  );
}
