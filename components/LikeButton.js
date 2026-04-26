// filepath: components/LikeButton.js
import { useState, useEffect } from "react";

export default function LikeButton({ pageId }) {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    fetch(`/api/likes?pageId=${pageId}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [pageId]);

  const handleLike = async () => {
    setAnimating(true);
    try {
      const res = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageId }),
      });
      const data = await res.json();
      setLikes(data.likes);
    } catch (err) {
      console.error("Failed to like:", err);
    }
    setTimeout(() => setAnimating(false), 300);
  };

  if (loading) {
    return <span className="like-button">♥ ...</span>;
  }

  return (
    <button
      className={`like-button ${animating ? "animating" : ""}`}
      onClick={handleLike}
      type="button"
    >
      ♥ {likes}
    </button>
  );
}
