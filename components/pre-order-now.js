import Link from "next/link";
import Image from "next/image";

import { Atkinson_Hyperlegible } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function PreOrderNow({ text }) {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        height: "74px",
        backgroundColor: "#f24646b2",
        color: "white",
        textAlign: "center",
        alignItems: "center",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <div
        className="cs1 ce12"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
          alignItems: "center",
        }}
      >
        <Link href="200-postcards">
          {" "}
          <h2
            style={{
              fontWeight: "500",
            }}
          >
            {text}
          </h2>
        </Link>
      </div>
    </div>
  );
}
