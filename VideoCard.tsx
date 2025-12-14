import React, { memo } from "react";
import { YouTubeVideo } from "../types";

const VideoCard = memo(({
  video,
  onSelect,
  isActive
}: {
  video: YouTubeVideo;
  onSelect: (video: YouTubeVideo) => void;
  isActive?: boolean;
}) => (
  <div 
    onClick={() => onSelect(video)} 
    style={{ 
      cursor: "pointer", 
      transition: "transform 0.2s",
      opacity: isActive ? 0.6 : 1
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
  >
    <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: "12px", overflow: "hidden", background: "#1f1f1f" }}>
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%", 
          height: "100%",
          objectFit: "cover" 
        }}
      />
    </div>
    <h4 style={{ margin: "10px 0 4px", fontSize: "15px", lineHeight: "1.3", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
      {video.title}
    </h4>
    <p style={{ color: "#aaa", fontSize: "13px", margin: 0 }}>{video.channel}</p>
  </div>
));

export default VideoCard;