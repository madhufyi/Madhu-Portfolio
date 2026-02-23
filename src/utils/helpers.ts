// utils/helpers.ts

export interface PortfolioData {
    name: string
    title: string
    location: string
    email: string
    contact: string
    github: string
    aboutText: string
    experience: Experience[]
    projects: Project[]
  }
  
  export interface Experience {
    id: string
    period: string
    company: string
    role: string
    description: string[]
  }
  
  export interface Project {
    id: string
    title: string
    description: string
    tech: string[]
    link?: string
  }
  
  export const portfolioData: PortfolioData = {
    name: 'Madhusudhan K',
    title: 'Full Stack Developer, Exp: 4.5+yrs',
    location: 'BLR, India',
    email: 'madhufyi@gmail.com',
    contact: 'madhufyi@gmail.com',
    github: 'https://github.com/madhufyi',
    aboutText:
    "Hi, I'm Madhu. I enjoy building dynamic products from start to finish — across the full stack. From crafting intuitive UIs to designing backend APIs and data flows, I'm always exploring new tech stacks and AI tools to ship smarter, more impactful products.",
  experience: [
    {
       id : 'exp-1',
      period: 'Mar 2024 - Present',
      company: 'Checkpoint Systems',
      role: 'Software Engineer - II',
      description: [
        'Architected and implemented full-stack migration (ReactJS + Spring Boot) from monolithic legacy platform, delivering MVP frontend in under 2 weeks and backend APIs within 10 days.',
        'Designed optimized data-sync algorithms reducing I/O overhead and improving real-time synchronization between distributed edge devices and central cloud reporting systems.',
        'Led complete UI redesign aligned with branding updates, delivering modern, responsive interfaces using Tailwind CSS on existing platform.',
        'Led platform upgrade from Java 8 to Java 11 across microservices and messaging layers (ActiveMQ, Camel), aligning with LTS and VAPT compliance goals; improved runtime stability and achieved ~20% performance gains under load.',
        'Implemented RFID reader integration including custom device driver development and edge-case validation for high-speed item scanning.',
        'Built and deployed Apache NiFi flows for shipment/order processing and cancellation, publishing structured data to Google BigQuery via ActiveMQ and Camel.',
        'Contributed to the Fixed Reader project by developing UI flows for continuous inventory scanning, including real-time status indicators and live inventory state updates.'
      ],
    },
    {
      id: 'exp-2',
      period: 'Mar 2022 - Feb 2024',
      company: 'Checkpoint Systems',
      role: 'Software Engineer - I',
      description: [
        'Developed Tag Encoding and Printing solution using Spring and MS SQL Server, enabling product serialization and EPC generation workflows.',
        'Migrated Perfume Retail Solution from legacy codebase to modern architecture with reusable components and structured database migration scripts.',
        'Built internal utility tools to recover incomplete or lost transactional data, supporting field deployment teams during production incidents.',
        'Delivered customer-facing Change Requests (CRs) and collaborated closely with QA to ensure stable production releases.'
      ],
    },
    {
      id: 'exp-3',
      period: 'Aug 2021 - Feb 2022',
      company: 'Checkpoint Systems',
      role: 'Software Engineer - Intern',
      description: [
        'Automated smoke and regression test suites using Selenium and TestNG, reducing manual QA effort by 50%.',
        'Contributed to UI enhancements across dashboards, authentication flows, use case management, and device management modules.'
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'JSON formatter',
      description: 'A lightweight JSON formatter tool with paste-to-beautify, syntax highlighting, one-click copy, download, and clear functionality.',
      tech: ['ReactJS', 'TypeScript', 'Vite'],
      link: 'https://json-viewer-lake.vercel.app/',
    },
    {
      id: 'proj-2',
      title: 'Talk2db',
      description: 'AI-powered MongoDB database assistant',
      tech: ['ReactJS', 'TypeScript', 'Springboot','LLM Integration(GroqCloud)', 'MongoDB'],
      link: '#',
    },
    {
      id: 'proj-3',
      title: 'Resume Builder Application',
      description: 'AI-powered resume builder that parses uploaded resumes using LLM, auto-fills structured forms, and exports polished resumes with QR code and PDF generation.',      tech: ['ReactJS', 'NextJS', 'LLM Integration(GroqCloud)', 'QR Generation & PDF Export'],
      link: '#',
    },
    {
      id: 'proj-4',
      title: 'Tasteat',
      description: 'A detailed restaurant landing page with modern UI, covering sections for menu, reservations, gallery, and contact.',
      tech: ['ReactJS', 'TypeScript', 'Vite'],
      link: 'https://peaceful-llama-9d3c99.netlify.app/',
    },
  ],
}
