import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { YouTubeVideo } from "../types";
import { getVideoInsight } from "../utils/services/youtubeService";

const VideoPlayer = ({ video }: { video: YouTubeVideo }) => {
  const [insight, setInsight] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Reset insight when video changes
  useEffect(() => {
    setInsight("");
    setLoading(false);
  }, [video.id]);

  const generateInsight = async () => {
    setLoading(true);
    const text = await getVideoInsight(video);
    setInsight(text);
    setLoading(false);
  };

  if (!video) return null;

  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "16px", overflow: "hidden", background: "#000" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&modestbranding=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="no-referrer"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none"
          }}
        />
      </div>
      
      <h2 style={{ fontSize: "20px", marginTop: "16px", marginBottom: "8px" }}>{video.title}</h2>
      <p style={{ color: "#aaa", fontSize: "14px", marginTop: 0 }}>{video.channel}</p>

      {/* AI Insight Section */}
      <div style={{ marginTop: "20px", padding: "16px", background: "#1f1f1f", borderRadius: "12px", border: "1px solid #333" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: insight ? "12px" : "0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#e1e1e1", fontWeight: "500" }}>
            <Sparkles size={18} color="#8ab4f8" />
            <span>AI Insight</span>
          </div>
          {!insight && !loading && (
            <button 
              onClick={generateInsight}
              style={{
                background: "#2a2a2a",
                border: "1px solid #444",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "13px",
                transition: "all 0.2s"
              }}
            >
              Generate Summary
            </button>
          )}
        </div>

        {loading && <div style={{ color: "#888", fontSize: "14px", fontStyle: "italic" }}>Thinking...</div>}
        
        {insight && (
          <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#ddd" }}>
            {insight}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;