import Image from "next/image";

export default function ProjectFullWidth({ src, alt }) {
  return (
    <div className="project-full-width">
      <Image
        src={src}
        alt={alt || ""}
        width={1920}
        height={800}
        className="project-image-full"
      />
    </div>
  );
}
