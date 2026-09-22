export interface Employer {
  id: string;
  label: string;
  title: string;
  date: string;
  description: string[];
}

export const LIST_OF_EMPLOYERS: Employer[] = [
  {
    id: 'qumulex',
    label: 'Qumulex',
    title: 'Lead Front End Engineer @ Qumulex',
    date: 'December 2025 - Present',
    description: [
      'Own the front end of a Vue.js, TypeScript and Vite application, from UI direction to ongoing maintenance.',
      'Shape new features in Figma and build them out, both large and small.',
      'Build interfaces backed by GraphQL and REST APIs for a product that pairs software with hardware.',
      'Collaborate closely with a small team and use Claude for AI-assisted development.',
    ],
  },
  {
    id: 'indico',
    label: 'Indico Data',
    title: 'Senior Frontend Engineer I @ Indico Data',
    date: 'June 2023 - August 2025',
    description: [
      'Built a new React and TypeScript application from the ground up and contributed to the large-scale core product.',
      'Pitched, architected and delivered a design system that standardized components, improved collaboration with designers and helped teams ship faster.',
      "Guided the team's testing strategy, GraphQL API integrations and code quality standards to keep applications reliable as they scaled.",
    ],
  },
  {
    id: 'cofense',
    label: 'Cofense',
    title: 'Senior Frontend Developer @ Cofense',
    date: 'June 2022 - April 2023',
    description: [
      'Delivered production features across several Vue.js and TypeScript SaaS applications.',
      'Worked closely with the UI/UX director and back-end developers to keep features aligned with the design vision.',
      "Contributed to the company's design system and Vue.js component library, reviewed code and mentored junior developers.",
      'Helped product owners prioritize and plan features and bug fixes.',
    ],
  },
  {
    id: 'datica',
    label: 'Datica.com',
    title: 'Front-End Developer @ Datica',
    date: 'August 2021 - May 2022',
    description: [
      "Built a new UI for Datica's SaaS platform and expanded the existing interface with Vue 2, Vuetify and VueFormulate.",
      'Integrated the front end with back-end APIs so customers could manage their cloud compliance and CI/CD pipelines.',
      'Styled the application with Sass and LESS, and worked with Docker, AWS and GitLab as part of the development workflow.',
    ],
  },
  {
    id: 'firewalls.com',
    label: 'Firewalls.com',
    title: 'Front-End Developer @ Firewalls.com',
    date: 'August 2019 - August 2021',
    description: [
      'Developed and maintained the Firewalls.com e-commerce site on Magento 2, WordPress and Laravel 8.',
      'Managed a team of three developers, shipped releases every two weeks through Bitbucket Pipelines and maintained the internal API.',
      'Built front-end features with Vue 3, Sass and LESS on a PHP back end, and supported the marketing team with web banners.',
    ],
  },
  {
    id: 'bitloft',
    label: 'BitLoft',
    title: 'Front-End Developer @ BitLoft',
    date: 'August 2016 - August 2019',
    description: [
      'Designed and developed web projects for agency clients and internal products, working across the front end and back end.',
      'Built everything from small WordPress sites to large Laravel SaaS applications using PHP, MySQL, JavaScript, jQuery, Sass and LESS on Google Cloud Platform.',
      'Supported the marketing and esports directors with print design, event planning, digital signage and promotional videos.',
    ],
  },
  {
    id: '4media',
    label: '4 Media',
    title: 'Web Designer @ 4 Media',
    date: 'February 2015 - May 2016',
    description: [
      'Designed and built more than 50 Bootstrap websites for a variety of clients.',
      'Created marketing landing pages with custom JavaScript and jQuery.',
      'Handled graphic design and quick-turnaround web development with PHP, CSS and LESS for fast-paced clients.',
    ],
  },
];

export const LIST_OF_CONTRACTS: Employer[] = [
  {
    id: 'startupwerx',
    label: 'StartupWerx',
    title: 'Full-stack Developer @ StartupWerx',
    date: 'October 2025 - March 2026',
    description: [
      'Built Next.js and TypeScript interfaces on a short-term full-stack contract, focusing on front-end architecture and performance.',
      'Developed back-end APIs and data handling in Python and MySQL to support the front end.',
    ],
  },
  {
    id: 'verizon',
    label: 'Verizon',
    title: 'Senior Frontend Developer @ Verizon',
    date: 'November 2025 - December 2025',
    description: [
      "Built and delivered React and TypeScript components for an expansion pack to Verizon's design system.",
      'Partnered with UX designers so each component matched the design spec.',
      'Mentored fellow senior developers on design systems.',
    ],
  },
  {
    id: 'poolgarden',
    label: 'Pool.Garden',
    title: 'Front-End Developer @ Pool.Garden',
    date: 'May 2021 - August 2021',
    description: [
      'Partnered with a DevOps and back-end developer on an independent project to run a Chia (XCH) mining pool.',
      'Maintained the Next.js and Sass front end, designing and building new features as needed.',
    ],
  },
];
