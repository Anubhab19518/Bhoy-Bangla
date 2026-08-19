import Header from "@/components/Header";
import FooterReveal from "@/components/FooterReveal";
import HeroSection from "@/components/HeroSection";
import StreamingSection from "@/components/StreamingSection";
import AcademySection from "@/components/AcademySection";
import HowWeDoSection from "@/components/HowWeDoSection";
import FooterSection from "@/components/FooterSection";

// Helper to fetch latest video from YouTube
async function getLatestVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  let channelId = process.env.YOUTUBE_CHANNEL_ID || "UCExX4SwPx78Z5vpYRTMjffQ";
  
  // Convert UC to UU for the Uploads Playlist
  const uploadsPlaylistId = channelId.replace(/^UC/, "UU");
  
  // Default fallback data if API key is not set or request fails
  const fallbackData = Array.from({ length: 10 }).map((_, i) => ({
    title: `Bhoy Bangla Story ${i + 1}`,
    description: "Welcome to Bhoy Bangla, your ultimate destination for animated horror in Bengali.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  }));

  if (!apiKey || apiKey === "your_api_key_here") {
    return fallbackData;
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${uploadsPlaylistId}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.error("YouTube API error:", await res.text());
      return fallbackData;
    }

    const data = await res.json();
    if (data.items && data.items.length > 0) {
      return data.items.map((item: any) => ({
        title: item.snippet.title,
        description: item.snippet.description,
        videoId: item.snippet.resourceId.videoId,
        thumbnail: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || ""
      }));
    }
    return fallbackData;
  } catch (error) {
    console.error("Failed to fetch YouTube data:", error);
    return fallbackData;
  }
}

export default async function Home() {
  const videos = await getLatestVideos();

  return (
    <>
    <main style={{ position: "relative", zIndex: 10, background: "var(--background)", paddingBottom: "1px" }}>
      <Header />

      <HeroSection />
      <StreamingSection videos={videos} />
      <HowWeDoSection />
      <AcademySection />
      </main>
      
      <FooterReveal>
        <FooterSection />
      </FooterReveal>
    </>
  );
}
