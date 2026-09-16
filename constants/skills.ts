export interface SkillColumn {
  id: number;
  skills: string[];
}

export const skillsList: SkillColumn[] = [
  {
    id: 1,
    skills: [
      'TypeScript',
      'React',
      'Vue.js',
      'Next.js',
      'Unit Testing',
      'SCSS',
      'CSS-In-JS',
    ],
  },
  {
    id: 2,
    skills: [
      'Docker',
      'JavaScript',
      'GraphQL',
      'Design Systems',
      'Git',
      'Storybook',
      'Integration Testing',
    ],
  },
];
