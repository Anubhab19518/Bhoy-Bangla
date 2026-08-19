import styles from "@/app/page.module.css";
import ScrollReveal from "./ScrollReveal";

export default function StreamingSection({ videos }: { videos: any[] }) {
  if (!videos || videos.length === 0) return null;

  return (
    <ScrollReveal>
      <section id="latest" className={styles.streamingSection}>
        <div className={styles.streamingGrid}>
          {/* Main Featured Video */}
          <div className={styles.featuredVideo}>
            <div className={styles.featuredPlayer}>
               <iframe 
                src={`https://www.youtube.com/embed/${videos[0].videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videos[0].videoId}`} 
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.featuredOverlay}>
              <h2 className={styles.featuredTitle}>{videos[0].title}</h2>
              <div className={styles.featuredMeta}>
                <span>NEW</span>
                <span>HORROR ANIMATION</span>
              </div>
              <a href={`https://www.youtube.com/watch?v=${videos[0].videoId}`} target="_blank" rel="noreferrer" className={styles.playBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"/></svg> Play Video
              </a>
            </div>
          </div>
          
          {/* Now Watching / Up Next Side List */}
          <div className={styles.nowWatching}>
            <h3 className={styles.listTitle}>Up Next</h3>
            <div className={styles.sideList}>
              {videos.slice(1, 4).map((video: any, i: number) => (
                <a key={i} href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer" className={styles.sideCard}>
                  <div className={styles.sideThumb}>
                    <img src={video.thumbnail || `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt={video.title} />
                    <div className={styles.sidePlayIcon}><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></div>
                  </div>
                  <div className={styles.sideInfo}>
                    <h4>{video.title.substring(0, 35)}...</h4>
                    <span>▶️ Watch Now</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Row */}
        <div className={styles.videoRowContainer}>
          <h3 className={styles.rowTitle}>Trending Stories</h3>
          <div className={styles.videoRow}>
            {videos.slice(4).map((video: any, i: number) => (
              <a key={i} href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer" className={styles.posterCard}>
                <div className={styles.posterThumb}>
                  <img src={video.thumbnail || `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt={video.title} />
                  <div className={styles.posterOverlay}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className={styles.posterInfo}>
                  <h4>{video.title.substring(0, 35)}</h4>
                  <span>⭐ 4.8/5 Bhoy Bangla</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
