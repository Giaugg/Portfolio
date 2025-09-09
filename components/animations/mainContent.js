"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import CircuitBackground from "./CircuitBackground";
import Portal from "./portal";

const optionsData = {
  start: [
    {
      text: "Hi, I'm Rich! Welcome to my Portfolio.\n Click to see my CV",
      img: "/images/me.png",
      link: "/cv",
    },
  ],
  projects: [
    {
      text: "Project: Ecommerce sales project (PHP).",
      img: "/images/project1.jpg",
      link: "/project1",
    },
    {
      text: "Project: Cafe manager order drinks at table (ReactJS + NestJS).",
      img: "/images/project2.jpg",
      link: "/project2",
    },
    {
      text: "Project: Portfolio about myself using ReactJS and animation.",
      img: "/images/portfolio.png",
      link: "/project3",
    },
  ],
  skills: [
    {
      text: "Skill: Proficient in React & JSX.",
      img: "/images/skill1.jpg",
      link: "/skills1",
    },
    {
      text: "Skill: Advanced JavaScript & ES6.",
      img: "/images/skill2.jpg",
      link: "/skills2",
    },
    {
      text: "Skill: Node.js backend development.",
      img: "/images/skill3.jpg",
      link: "/skills3",
    },
  ],
  contact: [
    {
      text: "Contact: Facebook Lê Hữu Giàu",
      img: "/images/fb1.jpg",
      link: "https://www.facebook.com/giau15052004",
      target: "_blank",
    },
    {
      text: "Contact: GitHub Profile",
      img: "/images/githup2.png",
      link: "https://github.com/giaugg",
      target: "_blank",
    },
  ],
  footer: [
    {
      text: "Thanks for coming here, Click to get a gift for you.",
      img: "",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      target: "_blank",
    },
  ],
};

export default function Home() {
  const [currentOption, setCurrentOption] = useState("start");
  const [animating, setAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsRef = useRef(null);
  const gateRef = useRef(null);
  const tlRef = useRef(null);
  const router = useRouter();

  const handleOptionClick = (next) => {
    if (animating || next === currentOption) return;
    animateTransition(next);
  };

  const handleCardClick = (link, target) => {
    if (target === "_blank") {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  const animateTransition = (nextOption) => {
    const cardsEls = cardsRef.current?.querySelectorAll(".card") ?? [];
    const gateEl = gateRef.current;

    setAnimating(true);
    tlRef.current?.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        setAnimating(false);
      },
    });

    tl.to(cardsEls, {
      y: "-100vh",
      duration: 0.4,
      stagger: 0.05,
      ease: "power1.out",
    });

    tl.to(gateEl, { display: "block" });
    tl.to(gateEl, { opacity: 1, scale: 2, duration: 0.5 });
    tl.to({}, { duration: 1 });

    tl.add(() => {
      setCurrentOption(nextOption);
    });

    tl.add(() => animateIn(nextOption));
  };

  const animateIn = (option) => {
    const gateEl = gateRef.current;
    const container = cardsRef.current;

    requestAnimationFrame(() => {
      const newCards = cardsRef.current?.querySelectorAll(".card") ?? [];
      const gateRect = gateEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const tl = gsap.timeline({
        onComplete: () => {
          setAnimating(false);
        },
      });

      gsap.set(newCards, {
        scale: 0,
        opacity: 0,
        x: gateRect.left + gateRect.width / 2 - containerRect.left + 150,
        y: gateRect.top + gateRect.height / 2 - containerRect.top,
      });

      tl.to(newCards, {
        scale: 1,
        opacity: 1,
        x: (i) => i * 320 - (newCards.length - 1) * 170,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "elastic.out(1, 0.6)",
      });

      tl.to(gateEl, {
        opacity: 0,
        scale: 200,
        duration: 0.4,
        ease: "power1.inOut",
      }).set(gateEl, { display: "none" });
    });
  };

  useEffect(() => {
    animateIn("start");
  }, []);

  return (
    <div className="app">
      <CircuitBackground glow={true} />

      <nav className="nav">
        <ul className="nav-list">
          {Object.keys(optionsData).map((id) => (
            <li key={id}>
              <button
                className={`nav-item ${currentOption === id ? "active" : ""
                  }`}
                onClick={() => handleOptionClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container">
        <div className="card-wrapper">
          <div
            className="gate"
            ref={gateRef}
            style={{
              opacity: 0,
              display: "none",
              position: "absolute", // cần absolute để định vị
              top: "-30%", // giữa dọc
              left: "28%", // giữa ngang
            }}
          >
            <Portal />
          </div>

          <div className="card-container" ref={cardsRef}>
            {optionsData[currentOption].map((card, i) => (
              <div
                key={`card-${currentOption}-${i}`}
                className="card"
                onMouseEnter={() =>
                  card.img &&
                  setHoveredCard({ index: i, option: currentOption })
                }
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(card.link, card.target)}
              >
                {hoveredCard?.option === currentOption &&
                  hoveredCard.index === i &&
                  card.img ? (
                  <div className="card-image">
                    <img
                      src={card.img}
                      alt={card.text}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : (
                  <div className="card-content">{card.text}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
