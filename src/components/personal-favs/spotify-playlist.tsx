import { Card } from "@/components/ui/card";

interface SpotifyPlaylistProps {
  src: string;
} 

export function SpotifyPlaylist({ src }: SpotifyPlaylistProps) {
  return (
    <Card className=" bg-[#970063] border border-dashed border-foreground shadow-sm rounded-xl overflow-hidden">
      <iframe
        data-testid="embed-iframe"
        className="w-full block"
        src={src}
        width=""
        height="352"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Card>
  );
}
