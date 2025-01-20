import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const references = [
  {
    image: "/coffeebreak.png",
    title: "Kávézó",
    description: "Saját tervezésű weboldal.",
    link: "https://peszabolcs.github.io/landing-page/",
  },
  {
    image: "/orak.png",
    title: "Órabolt",
    description:
      "Egy egyetemi projekt keretein belül készíteni kellett egy webshopot.",
    link: "/php/index.php",
  },
  {
    image: "/eduventure.png",
    title: "EduVenture",
    description: "Első startup projektem",
    link: "https://edu-venture.hu",
  },
];

export default function References() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToIndex = (index, smooth = true) => {
    if (carouselRef.current && !isTransitioning) {
      setIsTransitioning(true);

      const container = carouselRef.current;
      const cardWidth = container.offsetWidth;
      const scrollAmount = index * cardWidth;

      container.scrollTo({
        left: scrollAmount,
        behavior: smooth ? "smooth" : "auto",
      });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const nextReference = () => {
    if (isTransitioning) return;

    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % references.length;

      // Ha az utolsó elemről az elsőre ugrunk
      if (newIndex === 0) {
        scrollToIndex(references.length - 1, false); // Először az utolsóra ugrunk animáció nélkül
        setTimeout(() => {
          scrollToIndex(0); // Majd simán az elsőre
        }, 50);
      } else {
        scrollToIndex(newIndex);
      }

      return newIndex;
    });
  };

  const prevReference = () => {
    if (isTransitioning) return;

    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + references.length) % references.length;

      // Ha az első elemről az utolsóra ugrunk
      if (newIndex === references.length - 1) {
        scrollToIndex(0, false); // Először az elsőre ugrunk animáció nélkül
        setTimeout(() => {
          scrollToIndex(references.length - 1); // Majd simán az utolsóra
        }, 50);
      } else {
        scrollToIndex(newIndex);
      }

      return newIndex;
    });
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="references-section">
      <div className="references-container">
        <h2 className="references-title">Referenciák</h2>
        <div className="references-subtitle">Néhány eddigi munkám</div>
        <div className="references-carousel-container">
          <button
            className="nav-button left"
            onClick={prevReference}
            aria-label="Previous reference"
          >
            <ChevronLeft />
          </button>
          <div
            className="references-carousel"
            ref={carouselRef}
            style={{ scrollSnapType: isTransitioning ? "none" : "x mandatory" }}
          >
            {references.map((reference, index) => (
              <div
                key={index}
                className="reference-card"
                style={{ width: "100%", flexShrink: 0 }}
              >
                <div className="reference-image-container">
                  <img
                    src={reference.image || "/placeholder.svg"}
                    alt={reference.title}
                    className="reference-image"
                  />
                </div>
                <div className="reference-content">
                  <h3 className="reference-title">{reference.title}</h3>
                  <p className="reference-description">
                    {reference.description}
                  </p>
                  <a
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    Megnyitás
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            className="nav-button right"
            onClick={nextReference}
            aria-label="Next reference"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="reference-indicators">
          {references.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to reference ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
