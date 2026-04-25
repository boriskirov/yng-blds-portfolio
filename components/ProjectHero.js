import Image from "next/image";

export default function ProjectHero({ src, alt, title, subtitle }) {
  return (
    <div className="project-hero">
      <Image
        src={src}
        alt={alt || ""}
        width={1920}
        height={1080}
        className="project-hero-image"
        priority
      />
      <div className="project-hero-overlay">
        <h1 className="project-title">{title}</h1>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
