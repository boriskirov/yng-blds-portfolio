import "../styles/fluidigrid.css";
import "../styles/styles.css";
import "../styles/pinterestgrid.css";
import "../styles/overlapping.css";

import { Atkinson_Hyperlegible } from "@next/font/google";

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
