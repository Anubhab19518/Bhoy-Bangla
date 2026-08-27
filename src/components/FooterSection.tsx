import Image from "next/image";
import styles from "@/app/page.module.css";

export default function FooterSection() {
  return (
    <footer id="contact" className={styles.footerWrapper}>
      <div className={styles.footerCard}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogoContainer}>
              <Image src="/bhoy-bangla.png" alt="Bhoy Bangla" width={80} height={80} className={styles.footerLogoImg} />
              <span className={styles.footerLogoText}>Bhoy Bangla</span>
            </div>
            <p className={styles.footerDesc}>
              Experience the true essence of fear. <br />
              25A, Karnani Mansion Park Street, 2nd Floor, Room 231, Kolkata - 700016.
            </p>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/bhoybanglacartoon" className={styles.socialIcon} aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="https://www.instagram.com/bhoybangla" className={styles.socialIcon} aria-label="Instagram">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCExX4SwPx78Z5vpYRTMjffQ" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="YouTube">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.665 2.665 0 0 0-1.875-1.884C17.965 3.84 12 3.84 12 3.84s-5.965 0-7.707.462a2.664 2.664 0 0 0-1.875 1.884C1.956 7.925 1.956 12 1.956 12s0 4.075.462 5.814a2.665 2.665 0 0 0 1.875 1.884c1.742.462 7.707.462 7.707.462s5.965 0 7.707-.462a2.664 2.664 0 0 0 1.875-1.884C22.044 16.075 22.044 12 22.044 12s0-4.075-.462-5.814zM9.957 15.197V8.803l5.882 3.197-5.882 3.197z"/></svg>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinksGrid}>
            <div className={styles.footerLinkCol}>
              <h4>Contact</h4>
              <a href="#">8697983906</a>
              <a href="#">bhoybangla@gmail.com</a>
            </div>
            <div className={styles.footerLinkCol}>
              <h4>Explore</h4>
              <a href="#home">Home</a>
              <a href="#latest">Videos</a>
              <a href="#academy">Academy</a>
            </div>
            <div className={styles.footerLinkCol}>
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Bhoy Bangla. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Sitemap</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <div className={styles.langSelector}>
              <span>🌐 English (UK)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
