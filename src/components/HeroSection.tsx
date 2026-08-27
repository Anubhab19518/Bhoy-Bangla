import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
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
          <div className={styles.heroForm}>
            <input type="email" placeholder="Your email address" className={styles.heroInput} />
            <button className={styles.heroButton}>Subscribe</button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
