export default function ProjectInfo({ title, description, text }) {
  return (
    <div className="grid project-info">
      <div className="cs1 ce4">
        <h2 className="project-section-title">{title}</h2>
        <p className="project-description">{description}</p>
      </div>
      {text && (
        <div className="cs5 ce8">
          <p className="project-text">{text}</p>
        </div>
      )}
    </div>
  );
}
