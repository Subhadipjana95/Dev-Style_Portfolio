import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  win?: string | readonly string[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
  win,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full">
        <div className="border-[0.5px] border-muted-foreground2 p-[2px] rounded-full bg-gradient-to-br from-transparent to-primary/30">
          <Avatar className="border border-muted-foreground2 size-11 m-auto bg-foreground dark:bg-background">
            <AvatarImage src={image} alt={title} className="object-contain" />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">
          {title}
          {win && (
            <span className="inline-flex gap-1 ml-2 align-middle">
              {Array.isArray(win) ? (
                win.map((item, index) => (
                  <Badge variant="secondary" key={index} className="text-xs">
                    {item}
                  </Badge>
                ))
              ) : (
                <Badge variant="secondary" className="text-xs">
                  {win}
                </Badge>
              )}
            </span>
          )}
        </h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
