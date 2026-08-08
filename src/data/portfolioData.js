// =============================================================
//  PORTFOLIO DATA — single source of truth
//  Edit this file to update every section of the site.
//  Every component maps over this data, so the UI is fully dynamic.
// =============================================================

export const profile = {
  name: 'Sai Teja Srikakulapu',
  // Codename shown in the HUD hero — playful Iron Man nod
  codename: 'STARK-CLASS ENGINEER',
  // Rotating roles for the typewriter animation in the Hero
  roles: [
    'Java Full Stack Developer',
    'Spring Boot Engineer',
    'Data Science Enthusiast',
    'Problem Solver',
  ],
  tagline:
    'Building resilient, scalable systems — powered by clean code and a clear arc reactor of curiosity.',
  location: 'Visakhapatnam, India',
  email: 'saitejadivya2002@gmail.com',
  phone: '+91 837 422 9731',
  resumeUrl: '', // drop a link to a hosted résumé PDF here to enable the button
  socials: {
    linkedin: 'https://linkedin.com/in/sai-teja-srikakulapu-bb1234273',
    github: 'https://github.com/Saiteja0202',
  },
};

export const about = {
  heading: 'About Me',
  summary:
    'To leverage my academic background and technical skills in a challenging role that fosters learning, collaboration, and innovation while contributing effectively to project success.',
  // HUD "system status" stat cards
  stats: [
    { label: 'Experience', value: '1+', suffix: 'yr' },
    { label: 'Projects Shipped', value: '3', suffix: '+' },
    { label: 'Tech Stacks', value: '20', suffix: '+' },
    { label: 'B.Tech CGPA', value: '8.8', suffix: '/10' },
  ],
  highlights: [
    'Java Full Stack Developer at Cognizant',
    'Strong foundation in Spring Boot, Microservices & SQL',
    'Data Science honors background with an ML specialization',
    'Turns real-world requirements into clean, modular systems',
  ],
};

export const skills = [
  {
    category: 'Languages',
    icon: 'code',
    items: [{ name: 'Java', level: 90 }],
  },
  {
    category: 'Front End',
    icon: 'layout',
    items: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 86 },
      { name: 'JavaScript', level: 82 },
      { name: 'React', level: 80 },
      { name: 'Angular', level: 72 },
      { name: 'Bootstrap', level: 84 },
    ],
  },
  {
    category: 'Back End',
    icon: 'server',
    items: [
      { name: 'Spring Boot', level: 88 },
      { name: 'Spring MVC', level: 82 },
      { name: 'Spring Security', level: 78 },
      { name: 'Hibernate / JPA', level: 82 },
      { name: 'Microservices', level: 76 },
      { name: 'SQL / MySQL', level: 85 },
      { name: 'JDBC', level: 82 },
      { name: 'Maven', level: 80 },
    ],
  },
  {
    category: 'Tools & Cloud',
    icon: 'tool',
    items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 74 },
      { name: 'SonarQube', level: 70 },
      { name: 'Jira', level: 78 },
      { name: 'GCP', level: 70 },
      { name: 'JUnit', level: 78 },
      { name: 'Unity 2D', level: 66 },
    ],
  },
];

export const experience = [
  {
    role: 'Java Full Stack Developer',
    company: 'Cognizant',
    period: 'Apr 2025 – Present',
    current: true,
    location: 'India',
    points: [
      'Working on the MetLife Insurance project, enhancing application features and resolving defects using Java Full Stack technologies.',
      'Collaborating across the stack — Spring Boot services and modern front-end — to ship production-ready enhancements.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Angular'],
  },
];

export const projects = [
  {
    title: 'Zytra — E-Commerce Platform',
    subtitle: 'Amazon-style scalable storefront',
    description:
      'Architected a scalable e-commerce platform similar to Amazon, covering product catalog, cart, and order flows with clean relational modeling.',
    tech: ['Spring Boot', 'Maven', 'JPA', 'MySQL'],
    link: 'https://github.com/Saiteja0202',
    accent: 'red',
    featured: true,
  },
  {
    title: 'Library Management System',
    subtitle: 'Modular entity-driven system',
    description:
      'Developed a modular Library Management System using Spring Boot, JPA, and MySQL, focusing on real-world entity modeling and relational mapping.',
    tech: ['Spring Boot', 'JPA', 'MySQL'],
    link: 'https://github.com/Saiteja0202',
    accent: 'gold',
    featured: true,
  },
  {
    title: 'Spam Detection on Social Media',
    subtitle: 'Comparative ML study',
    description:
      'Conducted a comparative study using five supervised machine learning algorithms on datasets sourced from Twitter, Facebook, Messenger, Instagram, and LinkedIn.',
    tech: ['Python', 'Machine Learning', 'Data Science'],
    link: 'https://github.com/Saiteja0202',
    accent: 'cyan',
    featured: false,
  },
];

export const education = [
  {
    degree: 'B.Tech — Data Science',
    institution: 'Raghu Institute of Technology',
    score: '8.8 CGPA',
    note: 'Honors Degree in Machine Learning — 7.9 CGPA',
  },
  {
    degree: 'Diploma — Mechanical Engineering',
    institution: 'Mrs A.V.N. Polytechnic College',
    score: '9.2 CGPA',
    note: '',
  },
  {
    degree: '10th Standard — General Education',
    institution: 'Mindi High School',
    score: '9.7 CGPA',
    note: '',
  },
];

export const certifications = [
  'Claude Certified Architect — Foundations Certification',
  'NPTEL — Python for Data Science',
  'NPTEL — Fundamentals of Artificial Intelligence',
  'Amazon Web Services — Online Internship',
];

export const hobbies = [
  { label: 'Playing Cricket', icon: 'cricket' },
  { label: 'Reading Comics & Anime', icon: 'anime' },
];

// Section registry — drives the navbar + section order in one place.
export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];
