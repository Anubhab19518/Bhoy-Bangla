"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FooterReveal({ children }: { children: ReactNode }) {
  const spacerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    updateHeight();
    
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start end", "end end"]
  });

  // Overlay fades from solid background (1) to transparent (0)
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // Slide up slightly for a nice parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <>
      {/* Spacer that pushes the page down to make room for the fixed footer */}
      <div ref={spacerRef} style={{ height: footerHeight, position: "relative", zIndex: 0 }} />
      
      {/* The actual footer fixed to the bottom of the viewport */}
      <motion.div 
        ref={footerRef}
        style={{ 
          position: "fixed", 
          bottom: 0, 
          left: 0, 
          width: "100%", 
          zIndex: 0,
          y
        }}
      >
        {children}
        
        {/* Solid color overlay that fades out as we scroll down */}
        <motion.div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--background)",
            opacity: overlayOpacity,
            pointerEvents: "none"
          }}
        />
      </motion.div>
    </>
  );
}
