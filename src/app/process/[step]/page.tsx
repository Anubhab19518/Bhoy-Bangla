import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { processPipeline, ProcessStep } from "@/data/processData";
import Header from "@/components/Header";
import FooterReveal from "@/components/FooterReveal";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./process.module.css";

export function generateStaticParams() {
  return processPipeline.map((step) => ({
    step: step.slug,
  }));
}

export default async function ProcessStepPage({ params }: { params: Promise<{ step: string }> }) {
  const resolvedParams = await params;
  
  const processData: ProcessStep | undefined = processPipeline.find(
    (s) => s.slug === resolvedParams.step
  );

  if (!processData) {
    notFound();
  }

  return (
    <div className={styles.processPageWrapper}>
      <Header />
      
      <main>
        <section className={styles.heroSection}>
          <Image 
            src={processData.image} 
            alt={processData.title} 
            fill 
            className={styles.heroImage} 
            priority
          />
          <div className={styles.heroOverlay}></div>
          
          <Link href="/#process" className={styles.backLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back
          </Link>

          <div className={styles.heroContent}>
            <ScrollReveal>
              <div className={styles.stepNumber}>Step {processData.stepNumber}</div>
              <h1 className={styles.processTitle}>{processData.title}</h1>
              <p className={styles.processSubtitle}>&ldquo;{processData.subtitle}&rdquo;</p>
              <p className={styles.processDescription}>{processData.description}</p>
            </ScrollReveal>
          </div>

          {processData.nextStepSlug && processData.nextStepTitle && (
            <div className={styles.nextStepContainer}>
              <Link href={`/process/${processData.nextStepSlug}`} className={styles.nextStepLink}>
                <span className={styles.nextStepTitle}>{processData.nextStepTitle}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>
          )}
        </section>
      </main>

      {/* For these single screen pages, we might not need the footer reveal, 
          but adding it for consistency with the site theme */}
      <FooterReveal>
        <FooterSection />
      </FooterReveal>
    </div>
  );
}
