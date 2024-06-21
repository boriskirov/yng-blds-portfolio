import "../styles/fluidigrid.css";
import "../styles/styles.css";
import "../styles/pinterestgrid.css";
import "../styles/overlapping.css";
import "../styles/slider.css";

import { Space_Grotesk } from "@next/font/google";

const inter = Space_Grotesk({
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
