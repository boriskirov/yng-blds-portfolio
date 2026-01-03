import "../styles/styles.css";
import "../styles/pinterestgrid.css";
import "../styles/slider.css";
import "../styles/fluidigrid.css";
import "../styles/blog.css";

import { Funnel_Sans } from "next/font/google";

const inter = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
