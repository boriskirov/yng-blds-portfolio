import Image from "next/image";

export default function ProjectContentBlock({ title, text, src, alt, imageFirst = false }) {
  return (
    <div className="grid project-content">
      <div className={imageFirst ? "cs7 ce12" : "cs1 ce5"}>
        <h3 className="project-subsection-title">{title}</h3>
        <p className="project-text">{text}</p>
      </div>
      <div className={imageFirst ? "cs1 ce5" : "cs6 ce12"}>
        <div className="project-image-container">
          <Image
            src={src}
            alt={alt || ""}
            width={800}
            height={600}
            className="project-image"
          />
        </div>
      </div>
    </div>
  );
}
