"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";
import { charactersData, Character } from "@/data/charactersData";

const categories = [
  { key: "all", label: "All Entities" },
  { key: "ghosts", label: "Specters & Ghosts" },
  { key: "occult", label: "Dark Occult" },
  { key: "mortals", label: "Town & Haveli" },
  { key: "investigators", label: "Investigators" },
] as const;

const emptySubscribe = () => () => {};

export default function CharactersSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Filter characters based on selected category
  const filteredCharacters = activeCategory === "all" 
    ? charactersData 
    : charactersData.filter(c => c.category === activeCategory);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCharacter(null);
      }
    };
    if (selectedCharacter) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCharacter]);

  // Subtle atmospheric sound effect for character inspection
  const playHorrorTone = (rating: Character["dangerRating"]) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startFreq = rating === "Lethal" ? 48 : rating === "Extreme" ? 58 : 68;
      osc.type = "sine";
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(25, ctx.currentTime + 0.9);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.95);
    } catch {
      // Audio playback fails silently if browser blocks autoplay
    }
  };

  const handleCardClick = (char: Character) => {
    playHorrorTone(char.dangerRating);
    setSelectedCharacter(char);
  };

  const getBentoSpanClass = (character: Character) => {
    // In "all" mode, use the full asymmetrical bento rhythm
    if (activeCategory === "all") {
      if (character.cardType === "hero") return styles.bentoHero;
      if (character.cardType === "wide") return styles.bentoWide;
      return styles.bentoStandard;
    }
    // When filtered, allow wide or standard spans based on cardType
    if (character.cardType === "hero" || character.cardType === "wide") {
      return styles.bentoWide;
    }
    return styles.bentoStandard;
  };

  return (
    <ScrollReveal>
      <section id="characters" className={styles.charactersSection}>
        <div className={styles.charactersHeaderContainer}>
          <h2 className={styles.sectionTitle}>
            Our <span>Characters</span>
          </h2>
          <p className={styles.charactersSubtitle}>
            Meet the iconic souls, mythical apparitions, and dark occult masters that breathe life into the animated nightmares of Bhoy Bangla.
          </p>

          {/* Category Filter Bar */}
          <div className={styles.charactersFilterBar}>
            {categories.map((cat) => {
              const count = cat.key === "all" 
                ? charactersData.length 
                : charactersData.filter(c => c.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`${styles.filterBtn} ${activeCategory === cat.key ? styles.filterBtnActive : ""}`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className={styles.charactersBentoGrid}>
          {filteredCharacters.map((char) => {
            const spanClass = getBentoSpanClass(char);

            return (
              <div
                key={char.id}
                onClick={() => handleCardClick(char)}
                className={`${styles.characterCard} ${spanClass}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(char);
                  }
                }}
              >
                {/* Dynamic colored ambient spotlight glow */}
                <div 
                  className={styles.characterSpotlight} 
                  style={{ background: char.accentColor }} 
                />

                {/* Character Figure Graphics */}
                <div className={styles.characterFigureWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={char.image}
                    alt={char.name}
                    className={styles.characterImg}
                    loading={char.cardType === "hero" ? "eager" : "lazy"}
                  />
                </div>

                {/* Content Overlay */}
                <div className={styles.characterContentLayer}>
                  {/* Character Name & Role */}
                  <div className={styles.characterTextGroup}>
                    <h3 className={styles.characterName}>{char.name}</h3>
                    <div className={styles.characterRole}>{char.role}</div>
                    {char.cardType !== "standard" && (
                      <p className={styles.characterDesc}>{char.description}</p>
                    )}

                    {/* Footer Actions */}
                    <div className={styles.characterCardFooter}>
                      <span className={styles.inspectPrompt}>
                        Inspect Lore
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Character Modal */}
        {isClient && selectedCharacter && createPortal(
          <div 
            className={styles.modalBackdrop}
            onClick={() => setSelectedCharacter(null)}
          >
            <div 
              className={styles.modalWindow}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button" 
                className={styles.modalCloseBtn}
                onClick={() => setSelectedCharacter(null)}
                aria-label="Close Character Details"
              >
                ✕
              </button>

              {/* Modal Artwork Column */}
              <div className={styles.modalImageCol}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className={styles.modalImg}
                />
              </div>

              {/* Modal Content Column */}
              <div className={styles.modalContentCol}>
                <h3 className={styles.modalTitle}>{selectedCharacter.name}</h3>
                <div className={styles.modalRole}>{selectedCharacter.role}</div>

                {/* Lore Backstory */}
                <div className={styles.modalLoreBox}>
                  <h4>Folklore & Lore</h4>
                  <p>{selectedCharacter.detailedLore}</p>
                </div>

                {/* Attributes Grid */}
                <div className={styles.modalMetaGrid}>
                  <div className={styles.modalMetaItem}>
                    <div className={styles.modalMetaLabel}>Domain</div>
                    <div className={styles.modalMetaValue}>{selectedCharacter.domain}</div>
                  </div>
                  <div className={styles.modalMetaItem}>
                    <div className={styles.modalMetaLabel}>Signature Artifact</div>
                    <div className={styles.modalMetaValue}>{selectedCharacter.signatureItem}</div>
                  </div>
                  {selectedCharacter.attributes.map((attr, idx) => (
                    <div key={idx} className={styles.modalMetaItem}>
                      <div className={styles.modalMetaLabel}>{attr.label}</div>
                      <div className={styles.modalMetaValue}>{attr.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </section>
    </ScrollReveal>
  );
}
