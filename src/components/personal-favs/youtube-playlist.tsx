import { Card } from "@/components/ui/card";

interface YoutubePlaylistProps {
  src: string;
}

export function YoutubePlaylist({ src }: YoutubePlaylistProps) {
  return (
    <Card className="bg-black border border-dashed border-foreground shadow-sm rounded-xl overflow-hidden h-[352px]">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Card>
  );
}
