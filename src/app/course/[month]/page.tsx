import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courseCurriculum, CourseMonth } from "@/data/courseData";
import Header from "@/components/Header";
import FooterReveal from "@/components/FooterReveal";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./course.module.css";

// Generate static params for the 6 months at build time
export function generateStaticParams() {
  return courseCurriculum.map((course) => ({
    month: course.slug,
  }));
}

export default async function CourseMonthPage({ params }: { params: Promise<{ month: string }> }) {
  const resolvedParams = await params;
  
  const courseData: CourseMonth | undefined = courseCurriculum.find(
    (c) => c.slug === resolvedParams.month
  );

  if (!courseData) {
    notFound();
  }

  return (
    <div className={styles.coursePageWrapper}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Image 
            src={courseData.heroImage} 
            alt={courseData.title} 
            fill 
            className={styles.heroImage} 
            priority
          />
          <div className={styles.heroOverlay}></div>
          
          <div className={styles.heroContent}>
            <ScrollReveal>
              <div className={styles.monthLabel}>Month {courseData.monthNumber}</div>
              <h1 className={styles.courseTitle}>{courseData.title}</h1>
              {courseData.description && (
                <p className={styles.courseDesc}>{courseData.description}</p>
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentContainer}>
          <ScrollReveal delay={100}>
            <Link href="/#course" className={styles.backLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
              Back to Roadmap
            </Link>
          </ScrollReveal>

          <div className={styles.modulesGrid}>
            {courseData.modules.map((mod, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={styles.moduleCard}>
                  <h2 className={styles.moduleTitle}>{mod.title}</h2>
                  <ul className={styles.topicList}>
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className={styles.topicItem}>
                        <svg className={styles.topicIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className={styles.projectCard}>
              <h2 className={styles.projectTitle}>Practical Project</h2>
              <p className={styles.projectDesc}>{courseData.practicalProject}</p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <FooterReveal>
        <FooterSection />
      </FooterReveal>
    </div>
  );
}
