import React from "react";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <iframe
        src="https://www.youtube.com/embed/JX4BT3lXJwY?autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=JX4BT3lXJwY"
        id="herovideo"
        title="heroVideo"
      />
    </div>
  );
}
