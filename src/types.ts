export type Language = 'pt' | 'en';

export interface TechSkill {
  id: string;
  name: string;
  category: 'data' | 'cloud' | 'tools';
  categoryLabelPt: string;
  categoryLabelEn: string;
  iconName: string;
  descriptionPt: string;
  descriptionEn: string;
  tools: string[];
  level: string;
}

export interface EducationCategory {
  titlePt: string;
  titleEn: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  degreePt: string;
  degreeEn: string;
  institution: string;
  period: string;
  hours?: string;
  badgePt: string;
  badgeEn: string;
  descriptionPt: string;
  descriptionEn: string;
  categories?: EducationCategory[];
  skills?: string[];
  iconType: 'cs' | 'datascience' | 'cinema';
}

export interface ExperienceItem {
  id: string;
  company: string;
  rolePt: string;
  roleEn: string;
  period: string;
  featuredBadgePt?: string;
  featuredBadgeEn?: string;
  badgeType?: 'award' | 'nomination' | 'standard';
  descriptionPt: string;
  descriptionEn: string;
  achievementsPt: string[];
  achievementsEn: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  titlePt: string;
  titleEn: string;
  institution: string;
  period: string;
  hours?: string;
  badgeText: string;
  descriptionPt: string;
  descriptionEn: string;
  skills: string[];
  iconType: 'oracle' | 'hackathon' | 'alura' | 'university';
}

export interface ProjectItem {
  id: string;
  titlePt: string;
  titleEn: string;
  categoryPt: string;
  categoryEn: string;
  descriptionPt: string;
  descriptionEn: string;
  fullDetailsPt: string;
  fullDetailsEn: string;
  githubUrl: string;
  imageUrl: string;
  tags: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
}
