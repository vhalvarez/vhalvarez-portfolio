export interface IAnimationStrategy {
  getSectionDelay(): number;
  getItemDelay(index: number): number;
}

export class StaggeredAnimationStrategy implements IAnimationStrategy {
  constructor(
    private baseDelay: number,
    private sectionMultiplier: number,
    private itemDelayIncrement: number = 0.05
  ) {}

  getSectionDelay(): number {
    return this.baseDelay * this.sectionMultiplier;
  }

  getItemDelay(index: number): number {
    return this.getSectionDelay() + index * this.itemDelayIncrement;
  }
}

export class AnimationConfig {
  private static readonly BASE_DELAY = 0.04;

  static readonly hero = new StaggeredAnimationStrategy(this.BASE_DELAY, 1);
  static readonly about = new StaggeredAnimationStrategy(this.BASE_DELAY, 3);
  static readonly work = new StaggeredAnimationStrategy(this.BASE_DELAY, 6);
  static readonly education = new StaggeredAnimationStrategy(this.BASE_DELAY, 8);
  static readonly skills = new StaggeredAnimationStrategy(this.BASE_DELAY, 9);
  static readonly projects = new StaggeredAnimationStrategy(this.BASE_DELAY, 12);
  static readonly contact = new StaggeredAnimationStrategy(this.BASE_DELAY, 16);
}
