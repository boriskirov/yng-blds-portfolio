import { useEffect, useState } from "react";
import LikeButton from "./LikeButton";

export default function StickyLikeBar({ pageId, message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setVisible(false);
        return;
      }

      const progress = window.scrollY / scrollableHeight;
      setVisible(progress >= 0.8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-like-bar ${visible ? "is-visible" : ""}`}>
      <span className="sticky-like-bar-message">{message}</span>
      <LikeButton pageId={pageId} />
    </div>
  );
}
