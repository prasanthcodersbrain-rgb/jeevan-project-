import React, { useState, useEffect, useCallback } from "react";
import HeroSlideOne from "./HeroSlideOne";
import HeroSlideTwo from "./HeroSlideTwo";
import HeroSlideThree from "./HeroSlideThree";

const SLIDES = [HeroSlideOne, HeroSlideTwo, HeroSlideThree];
const SLIDE_DURATION = 6000; // ms per slide

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  const goTo = useCallback((idx) => {
    setActiveIdx(idx);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <div className="hero__track">
        {SLIDES.map((SlideComponent, idx) => (
          <div
            key={idx}
            className={`hero-scene-${idx + 1}${
              idx === activeIdx ? " hero-scene--active" : " hero-scene--inactive"
            }`}
          >
            <SlideComponent />
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="hero__dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot${idx === activeIdx ? " hero__dot--active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
