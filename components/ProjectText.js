export default function ProjectText({ title, text }) {
  return (
    <div className="project-text-block">
      {title && <h3 className="project-subsection-title">{title}</h3>}
      <p className="project-text">{text}</p>
    </div>
  );
}
