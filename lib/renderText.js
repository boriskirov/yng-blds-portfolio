// lib/renderText.js
export function renderText(textArray = []) {
  const lineSpans = [];

  textArray.forEach((textItem, i) => {
    const { annotations = {}, text, plain_text } = textItem;
    const { bold, italic, underline, strikethrough, code } = annotations;
    const link = text?.link?.url;

    // Split each plain_text into lines
    const lines = plain_text.split("\n");

    lines.forEach((line, j) => {
      let content = line;

      // Apply text styles
      if (code) content = <code>{content}</code>;
      if (bold) content = <strong>{content}</strong>;
      if (italic) content = <em>{content}</em>;
      if (underline) content = <u>{content}</u>;
      if (strikethrough) content = <s>{content}</s>;

      if (link) {
        content = (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            {content}
          </a>
        );
      }

      lineSpans.push(
        <span key={`${i}-${j}`}>
          {content}
        </span>
      );
    });
  });

  return <p className="mb-4 leading-relaxed">{lineSpans}</p>;
}
