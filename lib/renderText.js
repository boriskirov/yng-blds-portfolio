// lib/renderText.js
import React from "react";

export function renderText(textArray) {
  return textArray.map((textItem, index) => {
    const { annotations, text, plain_text } = textItem;
    const { bold, italic, underline, strikethrough, code } = annotations || {};
    const link = text?.link?.url;

    let content = <>{plain_text}</>;

    if (code) {
      content = <code className="bg-gray-100 px-1 rounded">{content}</code>;
    }
    if (bold) {
      content = <strong>{content}</strong>;
    }
    if (italic) {
      content = <em>{content}</em>;
    }
    if (underline) {
      content = <u>{content}</u>;
    }
    if (strikethrough) {
      content = <s>{content}</s>;
    }

    if (link) {
      content = (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="post-link"
        >
          {content}
        </a>
      );
    }

    return <React.Fragment key={index}>{content}</React.Fragment>;
  });
}
