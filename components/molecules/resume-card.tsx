"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string | readonly string[];
    graduationPhotos?: readonly string[];
    avatarClassName?: string;
    imageClassName?: string;
    viewPhotosLabel?: string;
    hidePhotosLabel?: string;
}

const LinkWrapper = ({ href, className, children }: { href?: string; className?: string; children: React.ReactNode }) => {
    if (!href) return <div className={className}>{children}</div>;
    if (href.startsWith("http")) {
        return (
            <LinkPreview url={href} className={className}>
                {children}
            </LinkPreview>
        );
    }
    return (
        <Link href={href} className={className} target="_blank" rel="noopener noreferrer">
            {children}
        </Link>
    );
};

export const ResumeCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,

    period,
    description,
    graduationPhotos,
    avatarClassName,
    imageClassName,
    viewPhotosLabel = "View Graduation Photos",
    hidePhotosLabel = "Hide Photos",
}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);



    return (
        <div className="flex gap-4">
            <LinkWrapper href={href} className={cn("flex-none")}>
                <Avatar className={cn("border size-12 m-auto bg-muted-background dark:bg-foreground", avatarClassName)}>
                    <AvatarImage
                        src={logoUrl}
                        alt={altText}
                        className={cn("object-contain", imageClassName)}
                    />
                    <AvatarFallback>{altText[0]}</AvatarFallback>
                </Avatar>
            </LinkWrapper>
            <div className="flex-1 flex flex-col group">
                <div className="flex items-center justify-between">
                    <LinkWrapper href={href} className="block cursor-pointer">
                        <h3 className="font-semibold text-lg tracking-tight group-hover:underline">
                            {title}
                        </h3>
                    </LinkWrapper>
                    <div className="text-xs text-muted-foreground tabular-nums">
                        {period}
                    </div>
                </div>
                <div className="text-sm font-sans text-pretty font-medium text-muted-foreground">
                    {subtitle}
                </div>
                {description && (
                    <div className="mt-2 text-xs sm:text-sm text-pretty font-sans text-muted-foreground">
                        {Array.isArray(description) ? (
                            <ul className="list-disc list-inside space-y-1">
                                {description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            description
                        )}
                    </div>
                )}
                {graduationPhotos && graduationPhotos.length > 0 && (
                    <div className="mt-2">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsExpanded(!isExpanded);
                            }}
                            className="inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground border px-2 py-1 rounded cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                            {isExpanded ? hidePhotosLabel : viewPhotosLabel}
                            {isExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                        </button>
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="columns-2 gap-2 mt-3 space-y-2">
                                        {graduationPhotos.map((photo, idx) => (
                                            <div key={idx} className="relative rounded-lg overflow-hidden border bg-muted break-inside-avoid">
                                                <Image
                                                    src={photo}
                                                    alt={`Graduation Photo ${idx + 1}`}
                                                    width={500}
                                                    height={500}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
};
