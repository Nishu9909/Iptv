import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import VideoFeed from "./components/VideoFeed";
import VideoPlayer from "./components/VideoPlayer";
import { searchVideos } from "./utils/services/youtubeService";
import { YouTubeVideo } from "./types";

const App = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [playingVideo, setPlayingVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(false);

  const search = async (q: string) => {
    if (!q.trim()) return;
    setLoading(true);
    try {
      const res = await searchVideos(q);
      setVideos(res);
      setPlayingVideo(null);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "white", fontFamily: "sans-serif" }}>
      <Header />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <div style={{ marginBottom: "24px" }}>
          <SearchBar onSearch={search} isLoading={loading} />
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: playingVideo ? "minmax(300px, 2fr) 1fr" : "1fr", gap: "24px", alignItems: "start" }}>
          {playingVideo && (
            <div style={{ position: "sticky", top: "80px" }}>
              <VideoPlayer video={playingVideo} />
            </div>
          )}
          
          <div style={{ width: "100%" }}>
             {videos.length > 0 ? (
               <VideoFeed videos={videos} onSelect={setPlayingVideo} activeVideoId={playingVideo?.id} />
             ) : (
               !loading && !playingVideo && <div style={{textAlign: "center", color: "#aaa", marginTop: "40px"}}>Search for something to start watching</div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);