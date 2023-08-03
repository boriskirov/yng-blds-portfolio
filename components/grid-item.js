import Image from "next/image";

export default function Item(src) {
  return (
    <div className="grid-item">
      <Image
        className="card "
        src={src}
        width={320}
        height={240}
        placeholder="blur"
        blurDataURL="/image-loader.png"
      />
    </div>
  );
}
