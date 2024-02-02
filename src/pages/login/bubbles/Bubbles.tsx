import { useEffect } from "react";
import "./Bubbles.css";

function Bubbles() {
  useEffect(() => {
    const isDesktopScreen = window.matchMedia('(min-width: 1026px)').matches;
    if (!isDesktopScreen) return;

    const bubblesContainer = document.getElementById("bubbles-container");

    const createBubble = () => {
      if (!bubblesContainer) return;
      const bubble = document.createElement("div");
      const bubbleSize = Math.floor(Math.random() * 50) + 20;
      const bubblePosition = Math.floor(Math.random() * 100);
      bubble.style.left = `${bubblePosition}%`;
      bubble.style.width = `${bubbleSize}px`;
      bubble.style.height = `${bubbleSize}px`;
      bubble.className = "bubble";
      bubblesContainer.appendChild(bubble);
      setTimeout(() => {
        bubblesContainer.removeChild(bubble);
      }, 8000);
    }
    const bubbleInterval = setInterval(() => {
      createBubble();
    }, 800);

    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

  return (
    <div id="bubbles-container"></div>
  );
}

export default Bubbles;
