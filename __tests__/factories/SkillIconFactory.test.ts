import { describe, it, expect } from 'vitest';
import { SkillIconFactory } from '@/lib/factories/SkillIconFactory';

describe('SkillIconFactory', () => {
  it('should return correct icon for microservices', () => {
    const icon = SkillIconFactory.getIcon('microservices');
    expect(icon).toBeDefined();
  });

  it('should handle case-insensitive skills', () => {
    const icon1 = SkillIconFactory.getIcon('Redis');
    const icon2 = SkillIconFactory.getIcon('redis');
    expect(icon1).toBeDefined();
    expect(icon2).toBeDefined();
  });

  it('should fallback to SimpleIcon for unknown skills', () => {
    const icon = SkillIconFactory.getIcon('UnknownSkill');
    expect(icon).toBeDefined();
  });

  it('should handle special characters in skill names', () => {
    const icon = SkillIconFactory.getIcon('C++');
    expect(icon).toBeDefined();
  });

  it('should handle Spanish skill names', () => {
    const icon = SkillIconFactory.getIcon('Arquitectura Limpia');
    expect(icon).toBeDefined();
  });
});
