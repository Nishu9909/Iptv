import React, { memo } from "react";
import VideoCard from "./VideoCard";
import { YouTubeVideo } from "../types";

const VideoFeed = memo(({
  videos,
  onSelect,
  activeVideoId
}: {
  videos: YouTubeVideo[];
  onSelect: (video: YouTubeVideo) => void;
  activeVideoId?: string;
}) => (
  <div style={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
    gap: "20px", 
    marginTop: "16px" 
  }}>
    {videos.map(v => (
      <VideoCard 
        key={v.id} 
        video={v} 
        onSelect={onSelect} 
        isActive={activeVideoId === v.id}
      />
    ))}
  </div>
));

export default VideoFeed;