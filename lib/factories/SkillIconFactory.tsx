import { Network, Layers, Boxes, Rabbit, GitBranch, TestTube2, Database, FileText } from "lucide-react";
import React from "react";
import Image from "next/image";

interface IconAdapter {
  render(): React.ReactNode;
}

class LucideIconAdapter implements IconAdapter {
  constructor(private Icon: React.ComponentType<{ className?: string }>) { }

  render() {
    return <this.Icon className="size-6" />;
  }
}

class LocalImageIconAdapter implements IconAdapter {
  constructor(private path: string, private alt: string) { }

  render() {
    return (
      <Image
        src={this.path}
        alt={this.alt}
        width={24}
        height={24}
        className="size-6 brightness-0 dark:invert"
      />
    );
  }
}

class SimpleIconAdapter implements IconAdapter {
  constructor(private slug: string, private alt: string) { }

  render() {
    return (
      <Image
        src={`https://cdn.simpleicons.org/${this.slug}/000000`}
        alt={this.alt}
        width={24}
        height={24}
        unoptimized
        className="size-6 dark:invert"
      />
    );
  }
}

export class SkillIconFactory {
  private static readonly iconMap: Record<string, IconAdapter> = {
    // Architecture & Patterns
    "microservices": new LucideIconAdapter(Network),
    "microservicios": new LucideIconAdapter(Network),
    "clean architecture": new LucideIconAdapter(Layers),
    "arquitectura limpia": new LucideIconAdapter(Layers),
    "design patterns": new LucideIconAdapter(Boxes),
    "patrones de diseño": new LucideIconAdapter(Boxes),
    "ddd": new LucideIconAdapter(Database),
    "cqrs": new LucideIconAdapter(GitBranch),
    
    // Testing & Dev Tools
    "playwright": new LucideIconAdapter(TestTube2),
    "pino": new LucideIconAdapter(FileText),
    "bull": new LucideIconAdapter(Rabbit),
    
    // Local logos
    "redis": new LocalImageIconAdapter("/logos/redis.svg", "Redis"),
    "aws": new LocalImageIconAdapter("/logos/aws.svg", "AWS"),
  };

  private static readonly slugMap: Record<string, string> = {
    // Programming Languages
    "c++": "cplusplus",
    "c#": "csharp",
    
    // Cloud & Infrastructure
    "hashicorp vault": "vault",
    "github actions": "githubactions",
    
    // Message Queues & Streaming
    "nats": "natsdotio",
    
    // Storage & Databases
    "minio": "minio",
    
    // Observability
    "opentelemetry": "opentelemetry",
    
    // GraphQL & APIs
    "apollo": "apollographql",
    "vercel ai sdk": "vercel",
  };

  static getIcon(skill: string): IconAdapter {
    const lower = skill.toLowerCase();

    if (this.iconMap[lower]) {
      return this.iconMap[lower];
    }

    let slug = lower.replace(/\s+/g, "");
    if (this.slugMap[lower]) {
      slug = this.slugMap[lower];
    }

    return new SimpleIconAdapter(slug, skill);
  }
}
