import { YouTubeVideo } from "../types";
import { getThumbnail } from "../utils/youtube";

export async function searchVideos(query: string): Promise<YouTubeVideo[]> {
  const url =
    "https://www.youtube.com/feeds/videos.xml?search_query=" +
    encodeURIComponent(query);

  const res = await fetch(url);
  const text = await res.text();

  const xml = new DOMParser().parseFromString(text, "text/xml");
  const entries = Array.from(xml.getElementsByTagName("entry"));

  return entries.slice(0, 12).map((entry: any) => {
    const id = entry.getElementsByTagName("yt:videoId")[0].textContent;
    const title = entry.getElementsByTagName("title")[0].textContent;
    const channel = entry.getElementsByTagName("author")[0]
      .getElementsByTagName("name")[0].textContent;

    return {
      id,
      title,
      channel,
      thumbnail: getThumbnail(id)
    };
  });
}