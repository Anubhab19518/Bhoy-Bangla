import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function HowWeDoSection() {
  return (
    <ScrollReveal>
      <section id="process" className={styles.howWeDoSection}>
        <h2 className={styles.sectionTitle}>
          How We Do <span>It</span>
        </h2>
        
        <div className={styles.howWeDoGrid}>
          {/* Box 1 */}
          <Link href="/process/concept-scripting" className={`${styles.howWeDoBox} ${styles.box1} ${styles.howWeDoLink}`}>
            <Image src="/content-2.webp" alt="Concept" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>01</span>
            <div className={styles.howWeDoContent}>
              <h3>Concept & Scripting</h3>
              <p>Where the nightmares begin. We craft chilling narratives that keep you awake.</p>
              <span className={styles.exploreText}>Explore Step →</span>
            </div>
          </Link>
          
          {/* Box 2 */}
          <Link href="/process/voice-acting" className={`${styles.howWeDoBox} ${styles.box2} ${styles.howWeDoLink}`}>
            <Image src="/content-5.webp" alt="Voice Acting" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>02</span>
            <div className={styles.howWeDoContent}>
              <h3>Voice Acting</h3>
              <p>Breathing life into the dead. Our cast delivers bone-chilling performances.</p>
              <span className={styles.exploreText}>Explore Step →</span>
            </div>
          </Link>
          
          {/* Box 3 */}
          <Link href="/process/storyboarding" className={`${styles.howWeDoBox} ${styles.box3} ${styles.howWeDoLink}`}>
            <Image src="/content-3.webp" alt="Storyboarding" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>03</span>
            <div className={styles.howWeDoContent}>
              <h3>Storyboarding</h3>
              <p>Visualizing the terror. Every scare is meticulously planned.</p>
              <span className={styles.exploreText}>Explore Step →</span>
            </div>
          </Link>
          
          {/* Box 4 */}
          <Link href="/process/animation" className={`${styles.howWeDoBox} ${styles.box4} ${styles.howWeDoLink}`}>
            <Image src="/content-1.webp" alt="Animation" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>04</span>
            <div className={styles.howWeDoContent}>
              <h3>Animation</h3>
              <p>Bringing shadows to life with fluid, terrifying motion.</p>
              <span className={styles.exploreText}>Explore Step →</span>
            </div>
          </Link>
          
          {/* Box 5 */}
          <Link href="/process/sound-design" className={`${styles.howWeDoBox} ${styles.box5} ${styles.howWeDoLink}`}>
            <Image src="/content-4.webp" alt="Sound Design" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>05</span>
            <div className={styles.howWeDoContent}>
              <h3>Sound Design</h3>
              <p>The heartbeat of fear. Immersive audio that haunts.</p>
              <span className={styles.exploreText}>Explore Step →</span>
            </div>
          </Link>
          
          {/* Box 6 */}
          <Link href="/process/post-production" className={`${styles.howWeDoBox} ${styles.box6} ${styles.howWeDoLink}`}>
            <Image src="/content-6.webp" alt="Post-Production" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>06</span>
            <div className={styles.howWeDoContent}>
              <h3>Post-Production</h3>
              <p>The final polish. Adding VFX and rendering the ultimate nightmare.</p>
              <span className={styles.exploreText}>Explore Step →</span>
            </div>
          </Link>
        </div>
      </section>
    </ScrollReveal>
  );
}
