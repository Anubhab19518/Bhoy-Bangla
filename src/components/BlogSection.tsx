import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";
import { blogData } from "@/data/blogData";

export default function BlogSection() {
  return (
    <ScrollReveal>
      <section id="blog" className={styles.section} style={{ background: "linear-gradient(to top, transparent, rgba(144, 0, 0, 0.05))" }}>
        <h2 className={styles.sectionTitle}>Into the <span>Shadows</span></h2>
        
        <div className={styles.blogGrid}>
          {blogData.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className={styles.blogCard}>
              <div className={styles.blogImageWrapper}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.blogImage}
                />
                <div className={styles.blogCategory}>{post.category}</div>
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogDate}>{post.date}</div>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.blogReadMore}>
                  Read Article 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
