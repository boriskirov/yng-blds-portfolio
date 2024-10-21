import Image from "next/image";

export default function Item(src) {
  return (
    <div className="grid-item">
      <Image
        className="card"
        src={src}
        width={1080}
        height={1080}
        placeholder="blur"
        blurDataURL="/image-loader.png"
      />
    </div>
  );
}
