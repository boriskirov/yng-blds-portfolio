import "../styles/fluidigrid.css";
import "../styles/styles.css";
import "../styles/pinterestgrid.css";

import { Atkinson_Hyperlegible } from "@next/font/google";
import { PT_Serif } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
