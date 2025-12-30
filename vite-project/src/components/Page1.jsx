import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Portfolio from "./Portfolio";
import Skill from "./Skill";
import Certification from "./Certification";
import Navbar from "./Navbar";
import Secnav from "./Secnav";
import "../firstpage.css";
import Connect from "./Connect";


const Page1 = () => {
  const parallaxRef = useRef();

  const scrollTo = (offset) => {
    parallaxRef.current.scrollTo(offset);
  };

  const titles = ["MERN Stack Dev", "Machine Learning Dev","Software Dev"];

  const TypingText = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentTitle = titles[titleIndex];
      const typingSpeed = isDeleting ? 50 : 100;

      const timeout = setTimeout(() => {
        let updatedText;

        if (isDeleting) {
          updatedText = currentTitle.substring(0, charIndex - 1);
          setCharIndex(charIndex - 1);
        } else {
          updatedText = currentTitle.substring(0, charIndex + 1);
          setCharIndex(charIndex + 1);
        }

        setDisplayedText(updatedText);

        if (!isDeleting && updatedText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    return displayedText;
  };

  return (
    <div className="App">
      {/* Navbar */}
      <div className="fixed-navbar">
        <Navbar />
        <Secnav onNavigate={scrollTo} />
      </div>

      {/* Parallax wrapper */}
      <div className="parallax-wrapper" id="hero">
        <Parallax ref={parallaxRef} pages={5.6} className="animation">
          <section id="hero">
            <div className="animation_layer parallax" id="star"></div>
          </section>

          <ParallaxLayer offset={0} speed={0.4}>
            <div className="name-overlay">
              <h1 className="name-main">Karan</h1>
              <h1 className="name-main">Jadhav</h1>
              <h2 className="name-sub">
                <TypingText />
                <span className="cursor">|</span>
              </h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="moon"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation_layer parallax" id="mount1"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="mount2"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="pahad"></div>
          </ParallaxLayer>

          {/* Astronaut */}
          <ParallaxLayer offset={0} speed={0.25}>
            <div className="animation_layer parallax" id="astro"></div>
          </ParallaxLayer>


          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation_layer parallax" id="treegroup"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>

          {/* Portfolio */}
          <ParallaxLayer offset={1.3} speed={0.3}>
            <section id="portfolio">
              <div className="portfolio-wrapper">
                <Portfolio />
              </div>
            </section>
          </ParallaxLayer>

          {/* Certifications */}
          <ParallaxLayer offset={2.6} speed={0.3}>
            <section id="certifications">
              <div className="portfolio-wrapper">
                <Certification />
              </div>
            </section>
          </ParallaxLayer>

          {/* Skills */}
          <ParallaxLayer offset={4.2} speed={0.3}>
            <section id="skills">
              <div className="portfolio-wrapper">
                <Skill />
              </div>
            </section>
          </ParallaxLayer>

          {/* Connect */}
          <ParallaxLayer offset={5.1} speed={0.3}>
            <div className="portfolio-wrapper">
              <Connect />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Page1;
