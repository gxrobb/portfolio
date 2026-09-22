export interface SkillColumn {
  id: number;
  skills: string[];
}

export const skillsList: SkillColumn[] = [
  {
    id: 1,
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'CSS / SCSS',
      'Design Systems',
      'Storybook',
      'Figma',
    ],
  },
  {
    id: 2,
    skills: [
      'CSS Animations',
      'Rapid Prototyping',
      'Web Accessibility',
      'SEO & Web Vitals',
      'Internationalization',
      'AI-Assisted Coding',
      'Internal Tooling',
    ],
  },
];
