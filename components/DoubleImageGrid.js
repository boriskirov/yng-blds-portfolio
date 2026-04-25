import Image from "next/image";

export default function DoubleImageGrid({ images, caption }) {
  return (
    <div className="double-image-grid-wrapper">
      <div className="double-image-grid">
        {images.map((img, i) => (
          <div className="double-image-cell" key={i}>
            <Image
              src={img.src}
              alt={img.alt || ""}
              width={800}
              height={600}
              className="double-image"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      {caption && <p className="double-image-caption">{caption}</p>}
    </div>
  );
}
