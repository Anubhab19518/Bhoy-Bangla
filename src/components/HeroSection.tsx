import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video autoPlay loop muted playsInline className={styles.bgVideo}>
          <source src="/16513463-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.hexLeft}></div>
      <div className={styles.hexRight}></div>

      <ScrollReveal>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Bengal&apos;s <span className={styles.textRed}>Darkest</span> <br/> 
            Animated <span className={styles.textRed}>Nightmares.</span>
          </h1>
          <p className={styles.subtitle}>
            Where shadows come alive and every story leads to the extraordinary. <br/> Join the community and never miss a spine-chilling release.
          </p>
          <div className={styles.heroButtons}>
            <a href="#latest" className={styles.primaryBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> 
              Watch Latest Story
            </a>
            <a href="https://www.youtube.com/channel/UCExX4SwPx78Z5vpYRTMjffQ" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              Join Community
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
