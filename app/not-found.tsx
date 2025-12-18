"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background text-foreground space-y-8 p-4">
            <BlurFade delay={0.1} className="flex items-center gap-2 sm:gap-4">
                <span className="text-[10rem] sm:text-[12rem] font-bold tracking-tighter leading-none select-none">
                    4
                </span>
                <div className="relative size-32 sm:size-40 rounded-full overflow-hidden border-4 border-muted shadow-xl">
                    <Image
                        src="/avatar/avatar-404.webp"
                        alt="0"
                        fill
                        className="object-cover"
                    />

                </div>
                <span className="text-[10rem] sm:text-[12rem] font-bold tracking-tighter leading-none select-none">
                    4
                </span>
            </BlurFade>

            <BlurFade delay={0.2} className="text-center space-y-6 max-w-md">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Page not found
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Whoops! It seems you&apos;ve ventured into the void. The page you&apos;re looking for doesn&apos;t exist.
                    </p>
                </div>
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "rounded-full px-8"
                    )}
                >
                    Return Home
                </Link>
            </BlurFade>
        </div>
    );
}
