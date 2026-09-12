import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogData, BlogPost } from "@/data/blogData";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import styles from "./blog.module.css";
import React from "react";

// Generate static params for the blog pages
export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

function renderMarkdown(content: string) {
  // Simple markdown renderer for our mock data
  return content.trim().split('\n\n').map((block, i) => {
    if (block.trim().startsWith('## ')) {
      return <h2 key={i}>{block.trim().replace('## ', '')}</h2>;
    }
    
    // Parse italics like *word*
    const parts = block.split(/(\*[^*]+\*)/g);
    return (
      <p key={i}>
        {parts.map((part, j) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={j}>{part.slice(1, -1)}</em>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // In Next.js 15, params is a Promise, so we must await it to get the slug.
  const resolvedParams = await params;
  
  const post: BlogPost | undefined = blogData.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Header />

      <Link href="/#blog" className={styles.backLink}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Back to Blog
      </Link>

      <section className={styles.heroSection}>
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <div className={styles.blogCategory}>{post.category}</div>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <div className={styles.blogMeta}>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.markdown}>
          {renderMarkdown(post.content)}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
