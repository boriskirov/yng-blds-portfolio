import "../styles/styles.css";
import "../styles/pinterestgrid.css";
import "../styles/overlapping.css";
import "../styles/slider.css";
import "../styles/fluidigrid.css";
import "../styles/blog.css";

import { Raleway } from "next/font/google";

const inter = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
