"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface RoadmapItem {
  month: string;
  title: string;
  description: string;
  image: string;
}

interface StickyRoadmapProps {
  items: RoadmapItem[];
}

export default function StickyRoadmap({ items }: StickyRoadmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    if (!pinRef.current) return;

    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: "+=350%",
      pin: true,
      onUpdate: (self) => {
        const index = Math.min(
          items.length - 1,
          Math.floor(self.progress * items.length)
        );
        setActiveIndex((prev) => (prev !== index ? index : prev));
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <div className={styles.sportsStickyContainer} ref={pinRef}>
        <div className={styles.sportsStickyGrid}>
          
          {/* Left Column (Text Area) */}
          <div className={styles.sportsLeftCol}>
            <div className={styles.fadeMaskTop}></div>
            <div className={styles.fadeMaskBottom}></div>

            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const yOffset = (index - activeIndex) * 140; // Spacing between titles
              const focalPoint = isMobile ? "20%" : "50%";
              
              return (
                <div 
                  key={index} 
                  className={`${styles.sportsTextItem} ${isActive ? styles.sportsTextActive : ""}`}
                  style={{ transform: `translateY(calc(-50% + ${yOffset}px))`, top: focalPoint }}
                >
                  <div className={styles.sportsMonth}>{item.month}</div>
                  <h4 className={styles.sportsTitle}>{item.title}</h4>
                </div>
              );
            })}

            {/* Floating Mobile Image Overlay */}
            {isMobile && (
              <div className={styles.sportsMobileImageOverlay}>
                 <Image 
                    src={items[activeIndex].image} 
                    alt={items[activeIndex].title} 
                    fill 
                    style={{ objectFit: "cover" }} 
                  />
              </div>
            )}
          </div>

          {/* Right Column (Image Area) */}
          {!isMobile && (
            <div className={styles.sportsRightCol}>
              <div className={styles.sportsImageContainer}>
                {items.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div 
                      key={index} 
                      className={`${styles.sportsImageLayer} ${isActive ? styles.sportsImageLayerActive : ""}`}
                    >
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        style={{ objectFit: "cover" }} 
                      />
                      <div className={styles.sportsImageCaptionPill}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
