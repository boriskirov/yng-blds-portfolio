import Image from "next/image";

export default function ProjectImage({ src, alt, caption }) {
  return (
    <div className="project-image-container">
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={600}
        className="project-image"
      />
      {caption && <span className="project-image-caption">{caption}</span>}
    </div>
  );
}
