"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we are past the top threshold
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction to hide/show header
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
      style={{
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease"
      }}
    >
      <div 
        className={styles.logoContainer} 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        <Image 
          src="/bhoy-bangla.png" 
          alt="Bhoy Bangla Logo" 
          width={110} 
          height={110} 
          className={styles.logo}
        />
        <span className={styles.logoText}>Bhoy Bangla</span>
      </div>
      
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#latest">Videos</a>
        <a href="#process">Process</a>
        <a href="#course">Course</a>
        <a href="#academy">Academy</a>
        <a href="#contact">Contact</a>
      </nav>
      
      <div className={styles.headerSpacer}>
        <a 
          href="https://www.youtube.com/channel/UCExX4SwPx78Z5vpYRTMjffQ?sub_confirmation=1" 
          target="_blank" 
          rel="noreferrer" 
          className={styles.headerBtn}
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
