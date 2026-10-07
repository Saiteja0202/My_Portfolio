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
  { label: 'Experience', startDate: '2025-05-01' },
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
    period: 'May 2025 – Present',
    startDate: '2025-05-01',
    current: true,
    location: 'India',
    points: [
      'Worked on the MetLife Insurance project, enhancing application features and fixing bugs using Java Full Stack technologies.',
      'Enhanced the application by developing new modules using Spring, Tapestry, and GWT frameworks.',
      'Added application controls based on evolving business requirements to ensure compliance and functionality.',
      'Developed and maintained new insurance contracts and plans in collaboration with product teams.',
      'Improved payment workflows and benefit enhancements by closely interacting with corresponding business and technical teams.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring', 'Tapestry', 'GWT', 'SQL', 'Microservices'],
  },
];



export const projects = [
  {
    title: 'AI Shield 360 – Predictive Risk Prevention & AI Liability Insurance Platform',
    subtitle: 'Enterprise-scale AI risk ecosystem',
    period: 'Sep 2026 – Oct 2026',
    description:
      'Designed and deployed a full-stack insurance risk prevention ecosystem integrating with existing core insurance APIs. Implemented Dynamic Risk Scoring using ML models (XGBoost, TensorFlow) and developed Claim-Before-Loss prediction for fraud, lapse, and under-insurance risks. Built Coverage Gap Analysis and AI Liability Insurance assessment modules to evaluate risks such as hallucinations, autonomous-agent errors, regulatory gaps, and deepfake threats. Developed an Autonomous Protection Agent (LLM + RAG) using LangChain and Azure OpenAI GPT-4o, enabling 24×7 conversational risk advisory. Architected a React 18 + TypeScript dashboard integrated with Spring Boot API Gateway, Kafka events, and PostgreSQL database. Containerized services with Docker & Kubernetes, automated CI/CD pipelines via GitHub Actions, and monitored system health using Prometheus & Grafana. Authored technical documentation covering architecture, ML design, RAG prompts, database schema, and deployment runbooks.',
    tech: ['React 18', 'TypeScript', 'Spring Boot', 'Kafka', 'PostgreSQL', 'LangChain', 'Azure OpenAI GPT-4o', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    link: 'https://github.com/Saiteja0202',
    accent: 'blue',
    featured: true,
  },
  {
    title: 'Zytra – An E-Commerce Project',
    subtitle: 'Amazon-style scalable storefront',
    period: 'Jan 2026 – Mar 2026',
    description:
      'Architected a scalable e-commerce platform similar to Amazon using Spring Boot, Maven, JPA, and MySQL. Implemented JWT-based authentication and Spring Security for secure user sessions and role-based access. Designed REST APIs for product catalog, shopping cart, order management, and payment workflows. Integrated AI-driven recommendation engine to personalize product suggestions based on user behavior and purchase history. Leveraged machine learning models to dynamically generate banners, carousels, and pricing strategies based on top deals and seasonal promotions.',
    tech: ['Spring Boot', 'Maven', 'JPA', 'MySQL', 'Spring Security', 'JWT', 'Machine Learning'],
    link: 'https://github.com/Saiteja0202',
    accent: 'red',
    featured: true,
  },
  {
    title: 'Library Management System',
    subtitle: 'Modular entity-driven system',
    period: 'Jun 2025 – Aug 2025',
    description:
      'Developed a modular Library Management System using Spring Boot, JPA, and MySQL, focusing on real-world entity modeling and relational mapping. Implemented token-based member authentication with custom filters and secure password hashing using BCrypt.',
    tech: ['Spring Boot', 'JPA', 'MySQL', 'BCrypt'],
    link: 'https://github.com/Saiteja0202',
    accent: 'gold',
    featured: false,
  },
  {
    title: 'Comparative Analysis of Spam Detection on Social Media Networks',
    subtitle: 'Comparative ML study',
    period: 'Oct 2024 – Apr 2025',
    description:
      'Conducted a comparative study using five supervised machine learning algorithms on datasets sourced from Twitter, Facebook, Messenger, Instagram, and LinkedIn. Preprocessed text data with feature extraction techniques in Jupyter Notebook; implemented models including Naive Bayes, SVM, Decision Trees, Random Forest, and KNN for classification. Achieved up to 92% accuracy with Random Forest, demonstrating robustness in spam detection.',
    tech: ['Python', 'Machine Learning', 'Naive Bayes', 'SVM', 'Decision Trees', 'Random Forest', 'KNN'],
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
  'Claude Certified Architect — Foundations Certification (Anthropic, Issued Aug 2026 · Expires Aug 2027, Skills: Prompt Engineering, Large Language Models)',
  'AWS Academy Graduate — Cloud Foundations (Amazon Web Services, Issued May 2026, Skills: Cloud Computing, AWS Global Infrastructure, EC2, S3, IAM, RDS, VPC, Cost Management, Security Best Practices)',
  'LOMA SRI 121 — Retirement Plans, Accounts, and Annuities (2nd Edition, Issued Oct 2026, Skills: 401(k) Retirement Savings Plans, Individual Retirement Accounts (IRA))',
  'LOMA SRI 111 — Retirement Fundamentals (Issued Sep 2026, Skills: Insurance Fundamentals)',
  'Cognizant Vibe Code Hackathon — Vibe Coded using Cursor (Issued Nov 2025, Skills: Vibe Coding, Cursor AI)',
  'NPTEL — Python for Data Science',
  'NPTEL — Fundamentals of Artificial Intelligence',
  'Amazon Web Services — Online Internship'
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
