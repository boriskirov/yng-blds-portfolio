import "../styles/styles.css";
import "../styles/pinterestgrid.css";
import "../styles/slider.css";
import "../styles/fluidigrid.css";
import "../styles/blog.css";

import { Quicksand } from "next/font/google";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
