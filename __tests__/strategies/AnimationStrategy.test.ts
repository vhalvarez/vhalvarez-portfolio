import { describe, it, expect } from 'vitest';
import { StaggeredAnimationStrategy, AnimationConfig } from '@/lib/strategies/AnimationStrategy';

describe('StaggeredAnimationStrategy', () => {
  it('should calculate section delay correctly', () => {
    const strategy = new StaggeredAnimationStrategy(0.04, 5);
    expect(strategy.getSectionDelay()).toBe(0.2);
  });

  it('should calculate item delay correctly', () => {
    const strategy = new StaggeredAnimationStrategy(0.04, 5, 0.05);
    expect(strategy.getItemDelay(0)).toBeCloseTo(0.2, 2);
    expect(strategy.getItemDelay(1)).toBeCloseTo(0.25, 2);
    expect(strategy.getItemDelay(2)).toBeCloseTo(0.3, 2);
  });

  it('should handle zero index', () => {
    const strategy = new StaggeredAnimationStrategy(0.04, 5);
    expect(strategy.getItemDelay(0)).toBeGreaterThan(0);
  });

  it('should use default increment if not provided', () => {
    const strategy = new StaggeredAnimationStrategy(0.04, 5);
    const delay0 = strategy.getItemDelay(0);
    const delay1 = strategy.getItemDelay(1);
    expect(delay1 - delay0).toBeCloseTo(0.05, 2);
  });
});

describe('AnimationConfig', () => {
  it('should have predefined configs for all sections', () => {
    expect(AnimationConfig.hero).toBeDefined();
    expect(AnimationConfig.about).toBeDefined();
    expect(AnimationConfig.work).toBeDefined();
    expect(AnimationConfig.skills).toBeDefined();
    expect(AnimationConfig.projects).toBeDefined();
    expect(AnimationConfig.contact).toBeDefined();
  });

  it('should return different delays for different sections', () => {
    const heroDelay = AnimationConfig.hero.getSectionDelay();
    const workDelay = AnimationConfig.work.getSectionDelay();
    expect(heroDelay).not.toBe(workDelay);
  });

  it('should have increasing delays for later sections', () => {
    const heroDelay = AnimationConfig.hero.getSectionDelay();
    const contactDelay = AnimationConfig.contact.getSectionDelay();
    expect(contactDelay).toBeGreaterThan(heroDelay);
  });
});
