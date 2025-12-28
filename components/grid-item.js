// components/grid-item.jsx
"use client";

import Image from "next/image";

export default function Item({ src, width, height, alt = "", onClick }) {
  return (
    <button type="button" className="grid-item-button" onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="grid-item-image card"
        placeholder="blur"
        blurDataURL="/image-loader.png"
      />
    </button>
  );
}
