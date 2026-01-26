import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

//Star background will have the following components:
// id, size, x, y, opacity, animationDuration, depth (for parallax)

// Meteors background will have the following components:
// id, size, x, y, delay, animationDuration

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax Setup: Deep space moves with scroll
  const { scrollY } = useScroll();
  const ySpring = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const generateStars = useCallback(() => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000 // Slightly increased density for depth layers
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const depth = Math.random(); // 0 is far, 1 is near
      newStars.push({
        id: i, // giving index value
        size: depth * 2 + 0.5, // Far stars are tiny, Near stars are larger
        x: Math.random() * 100, // placement of the stars from  0-100 width of the page
        y: Math.random() * 100, // placement of the stars from 0-100 height of the page
        opacity: Math.random() * 0.5 + 0.2, // random opacity
        depth: depth, // For parallax calculations
        animationDuration: Math.random() * 3 + 2, // pulsating faster or slower for stars
        twinkleDelay: Math.random() * 5,
      });
    }

    setStars(newStars);
  }, []);

  const generateMeteors = useCallback(() => {
    const numberOfMeteors = 6;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, // giving index value
        size: Math.random() * 1.5 + 0.5, // size of the stars to be random
        x: Math.random() * 100, // placement of the stars from  0-100 width of the page
        y: Math.random() * 40, // Higher start point for meteors
        delay: Math.random() * 20, // increased spread for rare impact
        animationDuration: Math.random() * 2 + 2, // Fast, cinematic speed
      });
    }

    setMeteors(newMeteors);
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    const handleMouseMove = (e) => {
      // Normalize mouse position to -1 to 1
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [generateStars, generateMeteors]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#030014]">
      {/* Ambient Nebula Haze */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_70%)]" />

      {/* Stars Layer */}
      {stars.map((star) => {
        // Calculate Parallax: Near stars move more than far stars
        const mouseMoveX = mousePosition.x * (star.depth * 20);
        const mouseMoveY = mousePosition.y * (star.depth * 20);

        return (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              boxShadow: star.depth > 0.8 ? "0 0 8px 1px rgba(255,255,255,0.4)" : "none",
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1],
              x: mouseMoveX,
              y: mouseMoveY,
            }}
            transition={{
              opacity: {
                duration: star.animationDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.twinkleDelay,
              },
              scale: {
                duration: star.animationDuration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 },
            }}
          />
        );
      })}

      {/* Meteors Layer */}
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute"
          style={{
            left: meteor.x + "%",
            top: meteor.y + "%",
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [-200, 800],
            y: [200, -800],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: meteor.animationDuration,
            repeat: Infinity,
            delay: meteor.delay,
            ease: "easeIn",
          }}
        >
          {/* Meteor Head & Cinematic Tail */}
          <div 
            className="relative bg-gradient-to-r from-transparent via-blue-400 to-white rounded-full blur-[1px]"
            style={{
              width: meteor.size * 100 + "px",
              height: "1.5px",
              transform: "rotate(-45deg)",
              boxShadow: "0 0 15px 2px rgba(96, 165, 250, 0.5)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}