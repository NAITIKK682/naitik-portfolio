import { useEffect, useState } from "react";

//Star background will have the following components:
// id, size, x, y, opacity, animationDuration

// Meteors background will have the following components:
// id, size, x, y, delay, animationDuration

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // giving index value
        size: Math.random() * 3 + 1, // size of the stars to be random
        x: Math.random() * 100, // placement of the stars from  0-100 width of the page
        y: Math.random() * 100, // placement of the stars from 0-100 height of the page
        opacity: Math.random() * 0.5 + 0.5, // random opacity from 50% to 100% for stars
        animationDuration: Math.random() * 4 + 2, // pulsating faster or slower for stars
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, // giving index value
        size: Math.random() * 2 + 1, // size of the stars to be random
        x: Math.random() * 100, // placement of the stars from  0-100 width of the page
        y: Math.random() * 20, // placement of the stars from 0-100 height of the page
        delay: Math.random() * 15, // random opacity from 50% to 100% for stars
        animationDuration: Math.random() * 3 + 3, // pulsating faster or slower for stars
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px", // (* 50) => can be changed for you liking
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}
