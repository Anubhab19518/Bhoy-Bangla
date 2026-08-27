import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";
import FaqAccordion from "./FaqAccordion";

const essentialFaqs = [
  { question: "Is this course suitable for beginners?", answer: "Yes. The course starts from the fundamentals and gradually progresses to professional 2D animation production. No professional drawing experience is required." },
  { question: "What type of animation will I learn?", answer: "The course primarily focuses on <strong>2D character-based animation, cut-out/rig-based animation and animated storytelling</strong>, with an introduction to frame-by-frame animation and motion graphics." },
  { question: "Will I learn character design, rigging and lip-sync?", answer: "Yes. Students will learn character creation, asset preparation, character rigging, cut-out animation, dialogue animation and <strong>Bengali lip-sync workflows</strong>." },
  { question: "Will I learn to create different types of animated stories?", answer: "Yes. The techniques can be used to create <strong>horror, sci-fi, fantasy, moral, village, adventure and general Bengali cartoon stories</strong>, including content similar in style to popular Bengali animated storytelling." },
  { question: "Which software will I learn?", answer: "Depending on the final curriculum, the course may cover <strong>Adobe Illustrator, Animate, After Effects, Premiere Pro and Audition</strong>, along with other tools required for the animation workflow." },
  { question: "Will I learn storytelling, VFX, sound and editing?", answer: "Yes. The course covers <strong>story development, scripting, storyboarding, cinematic storytelling, visual effects, lighting, atmosphere, sound design, voice/dialogue and video editing</strong>." },
  { question: "Will I create a complete animated video and portfolio?", answer: "Yes. Students will complete practical projects throughout the course and work toward a professional portfolio. The <strong>final project is a complete 5–10 minute original 2D animated story</strong>." },
  { question: "Can I use these skills for YouTube or freelancing?", answer: "Absolutely. The skills can be used for <strong>YouTube channels, social media, advertising, educational content, entertainment and freelance animation projects</strong>. Students can also develop their own animation channel." },
  { question: "How long is the course and how is it delivered?", answer: "The recommended professional program is <strong>6 months</strong>. It can be offered <strong>online, offline or in hybrid mode</strong>, with an accelerated option if the teaching schedule permits." },
  { question: "Will I receive a certificate, and what are the computer requirements?", answer: "Students who meet the institute's completion requirements can receive a <strong>Course Completion Certificate</strong>. A reasonably capable computer is recommended, and the exact specifications can be provided before enrollment." }
];

export default function FaqSection() {
  return (
    <section id="faq" className={styles.section}>
      <ScrollReveal>
        <div className={styles.courseFaqSection}>
          <h3 className={styles.sectionSubTitle} style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked <span>Questions</span></h3>
          <FaqAccordion faqs={essentialFaqs} />
        </div>
      </ScrollReveal>
    </section>
  );
}
