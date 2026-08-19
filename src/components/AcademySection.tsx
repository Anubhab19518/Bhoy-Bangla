import Image from "next/image";
import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";
import ClientForm from "./ClientForm";

export default function AcademySection() {
  return (
    <ScrollReveal>
      <section id="academy" className={styles.section} style={{ background: "linear-gradient(to bottom, transparent, rgba(144, 0, 0, 0.05))" }}>
        <h2 className={styles.sectionTitle}>Join Our <span>Animation Academy</span></h2>
        
        <div className={styles.bentoContainer}>
          <div className={styles.contactCard}>
            
            <div className={styles.contactLeft}>
              <h3 className={styles.contactTitle}>Apply for the <br/>Next Batch</h3>
              <p className={styles.contactSubtitle}>
                Ready to bring your own nightmares to life? Join the Bhoy Bangla Animation Academy and learn from the creators behind Bengal's most chilling animated tales.
              </p>
              
              <div className={styles.contactProfile}>
                <Image src="/bhoy-bangla.png" alt="Bhoy Bangla" width={80} height={80} className={styles.profileImg} />
                <div className={styles.profileInfo}>
                  <span className={styles.profileName}>Bhoy Bangla Team</span>
                  <span className={styles.profileRole}>Animation Masters</span>
                </div>
              </div>
              
              <div className={styles.glowingIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.52 17.52 22 12 22C10.15 22 8.42 21.49 6.94 20.61L2 22L3.39 17.06C2.51 15.58 2 13.85 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" fill="white"/>
                  <path d="M8.25 10.5C8.66 10.5 9 10.16 9 9.75C9 9.34 8.66 9 8.25 9C7.84 9 7.5 9.34 7.5 9.75C7.5 10.16 7.84 10.5 8.25 10.5Z" fill="var(--primary-color)"/>
                  <path d="M15.75 10.5C16.16 10.5 16.5 10.16 16.5 9.75C16.5 9.34 16.16 9 15.75 9C15.34 9 15 9.34 15 9.75C15 10.16 15.34 10.5 15.75 10.5Z" fill="var(--primary-color)"/>
                  <path d="M12 15C10.23 15 8.76 13.77 8.16 12H15.84C15.24 13.77 13.77 15 12 15Z" fill="var(--primary-color)"/>
                </svg>
              </div>
            </div>
            
            <div className={styles.contactRight}>
              <ClientForm />
            </div>
            
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
