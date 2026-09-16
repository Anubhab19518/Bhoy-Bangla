import Image from "next/image";
import styles from "@/app/page.module.css";

export default function FooterSection() {
  return (
    <footer className={styles.footerWrapper}>
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
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  <path fill="#FFFFFF" d="M16.671 15.542l.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V5.002s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.637H7.078v3.469h3.048v8.385a12.09 12.09 0 0 0 3.749 0v-8.385h2.796z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/bhoybangla" className={styles.socialIcon} aria-label="Instagram">
                <svg width="22" height="22" fill="none" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCExX4SwPx78Z5vpYRTMjffQ" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#FF0000" d="M21.582 6.186a2.665 2.665 0 0 0-1.875-1.884C17.965 3.84 12 3.84 12 3.84s-5.965 0-7.707.462a2.664 2.664 0 0 0-1.875 1.884C1.956 7.925 1.956 12 1.956 12s0 4.075.462 5.814a2.665 2.665 0 0 0 1.875 1.884c1.742.462 7.707.462 7.707.462s5.965 0 7.707-.462a2.664 2.664 0 0 0 1.875-1.884C22.044 16.075 22.044 12 22.044 12s0-4.075-.462-5.814z"/>
                  <path fill="#FFFFFF" d="M9.957 15.197V8.803l5.882 3.197-5.882 3.197z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinksGrid}>
            <div className={styles.footerLinkCol}>
              <h4>Contact</h4>
              <a href="tel:+918697983906">8697983906</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhoybangla@gmail.com" target="_blank" rel="noreferrer">bhoybangla@gmail.com</a>
            </div>
            <div className={styles.footerLinkCol}>
              <h4>Explore</h4>
              <a href="#home">Home</a>
              <a href="#latest">Videos</a>
              <a href="#academy">Academy</a>
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
