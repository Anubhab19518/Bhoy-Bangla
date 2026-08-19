import Image from "next/image";
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
          <div className={`${styles.howWeDoBox} ${styles.box1}`}>
            <Image src="/content-2.webp" alt="Concept" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>01</span>
            <div className={styles.howWeDoContent}>
              <h3>Concept & Scripting</h3>
              <p>Where the nightmares begin. We delve deep into Bengali folklore and urban legends to craft chilling narratives that keep you awake at night.</p>
            </div>
          </div>
          
          {/* Box 2 */}
          <div className={`${styles.howWeDoBox} ${styles.box2}`}>
            <Image src="/content-5.webp" alt="Voice Acting" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>02</span>
            <div className={styles.howWeDoContent}>
              <h3>Voice Acting</h3>
              <p>Breathing life into the dead. Our talented voice cast delivers bone-chilling performances.</p>
            </div>
          </div>
          
          {/* Box 3 */}
          <div className={`${styles.howWeDoBox} ${styles.box3}`}>
            <Image src="/content-3.webp" alt="Storyboarding" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>03</span>
            <div className={styles.howWeDoContent}>
              <h3>Storyboarding</h3>
              <p>Visualizing the terror. Every scare is meticulously planned scene by scene to maximize suspense.</p>
            </div>
          </div>
          
          {/* Box 4 */}
          <div className={`${styles.howWeDoBox} ${styles.box4}`}>
            <Image src="/content-1.webp" alt="Animation" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>04</span>
            <div className={styles.howWeDoContent}>
              <h3>Animation</h3>
              <p>Bringing shadows to life with fluid, terrifying motion.</p>
            </div>
          </div>
          
          {/* Box 5 */}
          <div className={`${styles.howWeDoBox} ${styles.box5}`}>
            <Image src="/content-4.webp" alt="Sound Design" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>05</span>
            <div className={styles.howWeDoContent}>
              <h3>Sound Design</h3>
              <p>The heartbeat of fear. Immersive audio that haunts.</p>
            </div>
          </div>
          
          {/* Box 6 */}
          <div className={`${styles.howWeDoBox} ${styles.box6}`}>
            <Image src="/content-6.webp" alt="Post-Production" fill className={styles.bentoBg} />
            <span className={styles.howWeDoNumber}>06</span>
            <div className={styles.howWeDoContent}>
              <h3>Post-Production</h3>
              <p>The final polish. Adding visual effects and rendering the ultimate nightmare.</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
