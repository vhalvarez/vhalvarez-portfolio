/**
 * Note: This code is adapted from Aceternity UI's Floating Dock component.
 * It uses the same Framer Motion logic for magnification.
 */
"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: ({ title: string; icon: React.ReactNode; href: string; onClick?: React.MouseEventHandler<HTMLAnchorElement> } | { separator: true })[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: ({ title: string; icon: React.ReactNode; href: string; onClick?: React.MouseEventHandler<HTMLAnchorElement> } | { separator: true })[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => {
              if ("separator" in item) {
                return <div key={`sep-${idx}`} className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800 my-1" />;
              }
              const isExternal = item.href.startsWith("http");
              const commonClass = "h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center border border-gray-200 dark:border-neutral-800";

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  {isExternal ? (
                    <LinkPreview
                      url={item.href}
                      className={commonClass}
                      aria-label={item.title}
                    >
                      <div className="h-4 w-4">{item.icon}</div>
                    </LinkPreview>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={item.onClick}
                      className={commonClass}
                      aria-label={item.title}
                    >
                      <div className="h-4 w-4">{item.icon}</div>
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center border border-gray-200 dark:border-neutral-800"
        aria-label="Toggle Menu"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: ({ title: string; icon: React.ReactNode; href: string; onClick?: React.MouseEventHandler<HTMLAnchorElement> } | { separator: true })[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-14 gap-5 items-center justify-center rounded-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 px-4",
        className
      )}
    >
      {items.map((item, idx) => {
        if ("separator" in item) {
          return <div key={`sep-${idx}`} className="h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800 self-center opacity-40" />;
        }
        return (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        );
      })}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square rounded-full flex items-center justify-center relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-0 -top-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );

  if (href.startsWith("http")) {
    return (
      <LinkPreview url={href} className="" aria-label={title}>
        {content}
      </LinkPreview>
    );
  }

  return (
    <Link href={href} onClick={onClick} aria-label={title}>
      {content}
    </Link>
  );
}

const widthIcon = "100%";
const heightIcon = "100%";
