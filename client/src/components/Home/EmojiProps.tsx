import React, { useState, useRef, useEffect } from "react";

export default function EmojiButton() {
  const [showEmojis, setShowEmojis] = useState(false);
  const emojis = ["🎩", "🕶️", "🌭","🏳️‍🌈", "💻", "💋"];
  const [positions, setPositions] = useState({});
  const emojiRefs = useRef([]);
  const dragging = useRef(null);
  const threshold = 5;

  const handleToggle = (e) => {
    e.preventDefault();
    setShowEmojis((prev) => !prev);
  };

  const handleMouseDown = (e, index) => {
    const emoji = emojiRefs.current[index];
    const rect = emoji.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    dragging.current = {
      index,
      startX: e.clientX + scrollX,
      startY: e.clientY + scrollY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      hasMoved: false,
    };
    document.body.classList.add("disable-select");
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    e.preventDefault(); // prevent text selection
    const drag = dragging.current;
    if (!drag) return;

    const deltaX = e.clientX - drag.startX;
    const deltaY = e.clientY - drag.startY;

    if (!drag.hasMoved && Math.sqrt(deltaX ** 2 + deltaY ** 2) < threshold) {
      return;
    }

    drag.hasMoved = true;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    setPositions((prev) => ({
      ...prev,
      [drag.index]: {
        x: e.clientX + scrollX - drag.offsetX,
        y: e.clientY + scrollY - drag.offsetY,
      },
    }));
  };

  const handleMouseUp = () => {
    dragging.current = null;
    document.body.classList.remove("disable-select");
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("disable-select");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const allMoved = emojis.every((_, i) => positions[i] !== undefined);

  return (
    <>
      <div className="diamond-wrapper">
          <button
            className="diamond-button"
            aria-label="diamond button"
            onClick={handleToggle}
          >
            <div className="image-container">
              <img
                className="diamond-image"
                src="/static/images/diamond.png"
                id="diamond-image"
              />
              <div className="text-overlay">
                <p className="diamond-text" id="diamond-text">
                  fun props
                </p>
              </div>
            </div>
          </button>
        {/* show panel only if not all emojis have moved */}
        {showEmojis && !allMoved && (
          <div className="emoji-panel">
            {emojis.map((emoji, index) =>
              positions[index] === undefined ? (
                <div
                  key={index}
                  ref={(el) => (emojiRefs.current[index] = el)}
                  onMouseDown={(e) => handleMouseDown(e, index)}
                  className="emoji-bar-emoji"
                >
                  {emoji}
                </div>
              ) : null
            )}
          </div>
        )}
      </div>

      {/* FLOATING EMOJIS OUTSIDE THE HEADER */}
      <div className="emoji-float-layer">
        {emojis.map((emoji, index) => {
          const pos = positions[index];
          if (!pos) return null;
          return (
            <div
              key={index}
              ref={(el) => (emojiRefs.current[index] = el)}
              onMouseDown={(e) => handleMouseDown(e, index)}
              style={{
                position: "absolute",
                top: pos.y,
                left: pos.x,
                fontSize: "40px",
                cursor: "grab",
                zIndex: 1000,
              }}
            >
              {emoji}
            </div>
          );
        })}
      </div>
    </>
  );
}
