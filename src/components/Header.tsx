"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
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
