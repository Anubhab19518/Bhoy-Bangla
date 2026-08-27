import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";
import StickyRoadmap from "./StickyRoadmap";

const roadmapItems = [
  { month: "Month 1", title: "Animation Fundamentals & Creative Foundation", description: "Introduction to animation principles, timing, drawing basics, and character expressions.", image: "/month-1.webp" },
  { month: "Month 2", title: "Character & Background Design", description: "Create original characters (heroes & villains), separate assets, and design cinematic backgrounds.", image: "/month-2.webp" },
  { month: "Month 3", title: "Character Rigging & 2D Animation", description: "Master rig-based bone systems, character movement (walk cycles), and animation timing.", image: "/month-3.webp" },
  { month: "Month 4", title: "Advanced Animation & Lip Sync", description: "Facial animation, emotional acting, camera movements, and Bengali lip-sync synchronization.", image: "/month-4.webp" },
  { month: "Month 5", title: "VFX, Compositing & Horror Production", description: "Create cinematic effects (fire, smoke, fog), horror atmospheres, sci-fi elements, and advanced compositing.", image: "/month-5.webp" },
  { month: "Month 6", title: "Complete Episode Production", description: "Scripting, storyboarding, full production, sound design, video editing, and YouTube publishing.", image: "/month-6.webp" }
];

export default function CourseSection() {
  return (
    <section id="course" className={styles.section} style={{ background: "linear-gradient(to top, transparent, rgba(144, 0, 0, 0.05))" }}>
      
      {/* Hero Area */}
      <ScrollReveal>
        <div className={styles.courseHero}>
          <div className={styles.courseHeroText}>
            <h2 className={styles.courseTitle}>Professional 2D Cartoon <span>Animation & Story Production</span></h2>
            <p className={styles.courseTagline}>Learn to Create Professional Animated Stories from Idea to Final Video</p>
            
            <div className={styles.courseBadges}>
              <span className={styles.courseBadge}>⏱️ 6 Months</span>
              <span className={styles.courseBadge}>📈 Beginner to Advanced</span>
              <span className={styles.courseBadge}>💻 Online / Offline / Hybrid</span>
              <span className={styles.courseBadge}>📜 Professional Certification</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className={styles.courseMainCol}>
        <ScrollReveal>
          <h3 className={styles.sectionSubTitle} style={{ textAlign: "center" }}>6-Month <span>Roadmap</span></h3>
        </ScrollReveal>
        
        <StickyRoadmap items={roadmapItems} />
      </div>

      <ScrollReveal>
        <div className={styles.courseBottomGrid}>
          
          <div className={styles.courseCard}>
            <h4>What Will You Learn?</h4>
            <div className={styles.skillsGrid}>
              <span>Storyboarding</span>
              <span>Character Design</span>
              <span>Rigging</span>
              <span>Cut-Out Animation</span>
              <span>Lip Sync</span>
              <span>Camera Animation</span>
              <span>Motion Graphics</span>
              <span>Horror & Sci-Fi VFX</span>
              <span>Sound Design</span>
              <span>Video Editing</span>
              <span className={styles.highlightSkill}>Complete Episode Production</span>
            </div>
          </div>

          <div className={styles.courseCard}>
            <h4>Software Covered</h4>
            <div className={styles.softwareGrid}>
              <div className={styles.softwareItem}>
                <strong>Illustrator</strong>
                <span>Asset Design</span>
              </div>
              <div className={styles.softwareItem}>
                <strong>Photoshop</strong>
                <span>Backgrounds</span>
              </div>
              <div className={styles.softwareItem}>
                <strong>Animate</strong>
                <span>2D Animation</span>
              </div>
              <div className={styles.softwareItem}>
                <strong>After Effects</strong>
                <span>VFX & Compositing</span>
              </div>
              <div className={styles.softwareItem}>
                <strong>Premiere Pro</strong>
                <span>Video Editing</span>
              </div>
              <div className={styles.softwareItem}>
                <strong>Audition</strong>
                <span>Sound Design</span>
              </div>
            </div>
          </div>

          <div className={styles.courseCard}>
            <h4>Career Opportunities</h4>
            <ul className={styles.careerList}>
              <li>2D Animator & Character Artist</li>
              <li>YouTube Animation Creator</li>
              <li>Storyboard Artist</li>
              <li>Motion Graphics & VFX Artist</li>
              <li>Freelance Animator</li>
            </ul>
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
