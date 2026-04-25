import Image from "next/image";

export default function ProjectGallery({ images }) {
  return (
    <div className="grid project-gallery">
      {images.map((img, i) => (
        <div key={i} className={`cs${img.col || 1} ce${img.colEnd || 3}`}>
          <div className="project-image-container">
            <Image
              src={img.src}
              alt={img.alt || ""}
              width={800}
              height={600}
              className="project-image"
            />
            {img.caption && (
              <span className="project-image-caption">{img.caption}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
