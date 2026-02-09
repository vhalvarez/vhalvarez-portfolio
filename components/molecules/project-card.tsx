import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { LinkPreview } from "@/components/ui/link-preview";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { Code } from "lucide-react";

interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags: readonly string[];
    link?: string;
    image?: string;
    video?: string;
    links?: readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({
    title,
    href,
    description,
    dates,
    tags,
    link,
    image,
    video,
    links,
    className,
}: Props) {
    const [imageError, setImageError] = useState(false);

    return (
        <Card
            className={cn(
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card hover:border-neutral-700 dark:hover:border-neutral-500",
                className
            )}
        >
            <Link
                href={href || "#"}
                className={cn("block cursor-pointer", className)}
                target="_blank"
                rel="noopener noreferrer"
            >
                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // adjust height as needed
                    />
                )}
                {image && !imageError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                ) : image && imageError ? (
                    <div className="h-40 w-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        <Code className="size-16 text-muted-foreground/40" />
                    </div>
                ) : null}
            </Link>
            <CardHeader className="px-2">
                <div className="space-y-1">
                    <CardTitle className="mt-1 text-base">{title}</CardTitle>
                    <time className="font-sans text-xs">{dates}</time>
                    <div className="hidden font-sans text-xs underline print:visible">
                        {link?.replace("https://", "").replace("www.", "").replace("/", "")}
                    </div>
                    <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <Markdown>
                            {description}
                        </Markdown>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-2">
                {tags && tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {tags.map((tag) => (
                            <Badge
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                                key={tag}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="px-2 pb-2">
                {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {links.map((link, idx) => (
                            <LinkPreview url={link.href} key={idx} className="cursor-pointer">
                                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                                    {link.icon}
                                    {link.type}
                                </Badge>
                            </LinkPreview>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
