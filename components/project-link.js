// components/project-link.jsx
import Link from "next/link";
import Image from "next/image";

export default function ProjectLink({
  id,
  src,
  alt = "",
  width,
  height,
  title,
  description,
  cta,
  icon,
}) {
  return (
    <div className="project-link-card">
      <Link href={`/projects/${id}`} className="project-link">
        <div className="project-link-image-wrapper">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="project-link-image"
            placeholder="blur"
            blurDataURL="/image-loader.png"
          />
        </div>
        <div className="project-link-overlay">
          <div className="project-link-content">
            <span className="project-link-description">{description}</span>
            <h3 className="project-link-title">{title}</h3>
            <span className="project-link-cta">
              {cta}
              <Image
                src={icon}
                alt="Arrow Right"
                width={16}
                height={16}
                className="project-link-icon"
              />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
