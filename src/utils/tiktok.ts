export function getTikTokVideoId(url: string): string {
  const regExp = /tiktok\.com\/@[\w.-]+\/video\/(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
}

export function getTikTokEmbedUrl(url: string): string {
  const videoId = getTikTokVideoId(url);
  return videoId ? `https://www.tiktok.com/embed/${videoId}` : "";
}

export function getTikTokThumbnailUrl(): string {
  // TikTok doesn't provide a direct thumbnail API like YouTube
  // We'll use a high-quality placeholder image that represents TikTok content
  return "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=640&h=360&fit=crop&crop=center&auto=format&q=80";
}
