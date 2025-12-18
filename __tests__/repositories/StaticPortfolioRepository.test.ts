import { describe, it, expect } from 'vitest';
import { StaticPortfolioRepository } from '@/lib/repositories/StaticPortfolioRepository';

describe('StaticPortfolioRepository', () => {
  const repository = new StaticPortfolioRepository();

  it('should return data for English', () => {
    const data = repository.getData('en');
    expect(data).toBeDefined();
    expect(data.name).toBeDefined();
  });

  it('should return data for Spanish', () => {
    const data = repository.getData('es');
    expect(data).toBeDefined();
    expect(data.name).toBeDefined();
  });

  it('should return skills array', () => {
    const skills = repository.getSkills('en');
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
  });

  it('should return projects array', () => {
    const projects = repository.getProjects('en');
    expect(Array.isArray(projects)).toBe(true);
  });

  it('should return work experience array', () => {
    const work = repository.getWork('en');
    expect(Array.isArray(work)).toBe(true);
    expect(work.length).toBeGreaterThan(0);
  });

  it('should return education array', () => {
    const education = repository.getEducation('en');
    expect(Array.isArray(education)).toBe(true);
  });

  it('should return contact information', () => {
    const contact = repository.getContact('en');
    expect(contact).toBeDefined();
    expect(contact.email).toBeDefined();
  });

  it('should return navbar items', () => {
    const navbar = repository.getNavbar('en');
    expect(Array.isArray(navbar)).toBe(true);
  });

  it('should return same structure for both languages', () => {
    const enData = repository.getData('en');
    const esData = repository.getData('es');

    expect(Object.keys(enData)).toEqual(Object.keys(esData));
  });
});
