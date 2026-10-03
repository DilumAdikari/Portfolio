export const initialPersonalInfo = {
  name: 'N.A.D.R Adikari',
  title: 'MERN DEVELOPER & IT OPERATIONS SPECIALIST',
  bio: 'Analytical BIT undergraduate at the University of Moratuwa specializing in the intersection of software logic and physical IT infrastructure. Experienced in the full lifecycle of technical support, from LAN configuration and network management to PC hardware repair and MERN-stack application development.',
  github: 'https://github.com/DilumAdikari',
  linkedin: 'www.linkedin.com/in/dilum-adikari-747960414',
  email: 'dilumadikari610@gmail.com',
  phone: '0743775423',
  location: 'Veyangoda, Sri Lanka',
  address: '137/7 Kureekotuwa, Veyangoda',
  languages: [
    { 
      name: 'Sinhala', 
      level: 'Native / Bilingual', 
      percentage: 90,
      subMetrics: { reading: 90, writing: 90, speaking: 90, doc: 90 }
    },
    { 
      name: 'English', 
      level: 'Professional Working', 
      percentage: 60,
      subMetrics: { reading: 80, writing: 60, speaking: 60, doc: 80 }
    }
  ]
};

export const initialExperience = [
  {
    role: 'IT Operations & Systems Assistant',
    company: 'Elisha Clothing PVT LTD',
    period: '2025 - PRESENT',
    type: 'Full-time',
    bullets: [
      'Transport Management Development: Architected a TransitFlow system using the MERN stack to automate vehicle requests, driver allocations, and fleet tracking for company logistics.',
      'System Logic & Automation: Engineered digital FIFO workflows and style-based validation logic, utilizing barcode generation to ensure 100% data integrity in warehouse operations.',
      'LAN & Network Administration: Configured and managed the local area network (LAN) to ensure high-uptime connectivity for all production floor devices and office workstations.',
      'Hardware Systems Support: Diagnosed and maintained specialized industrial hardware, including POS terminals, thermal printers, and barcode systems, to minimize operational downtime.',
      'Technical Troubleshooting: Provided rapid-response support for complex network bottlenecks and hardware failures to guarantee high systems availability.'
    ]
  },
  {
    role: 'Freelance Software Developer',
    company: 'Fiverr & Independent Clients',
    period: '2025 AUGUST - PRESENT',
    type: 'Freelance',
    bullets: [
      'Full-Stack Web Development: Designed and delivered custom full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and Vite for international clients.',
      'Custom SaaS & Dashboards: Developed responsive client dashboards, secure user authentication systems, and automated booking/management platforms with Tailwind CSS styling.',
      'API Integration & Deployment: Configured backend REST APIs, connected cloud databases via MongoDB Atlas, and managed seamless deployments using platforms like Vercel and Render.'
    ]
  },
];

export const initialEducation = [
  {
    degree: 'Bachelor of Information Technology (BIT)',
    institution: 'University of Moratuwa, Sri Lanka',
    period: '2025 - PRESENT (IN PROGRESS)',
    highlights: 'Specializing in computer science architecture, asynchronous program control flow, database scaling, and full-stack software logic.',
    isHighlighted: true
  },
  {
    degree: 'Full-Stack Web Development Certification',
    institution: 'University of Moratuwa, Sri Lanka',
    period: 'COMPLETED SPECIALIZATION',
    highlights: 'Comprehensive coverage of modern frontend rendering frameworks, Express backend design patterns, and MongoDB Atlas database schema modeling.',
    isHighlighted: false
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'Technology Stream',
    period: 'PASSED EXAMINATIONS',
    highlights: 'Acquired highly rigorous foundational training in technology mechanics, logic networks, mathematics, and operational science principles.',
    isHighlighted: false
  }
];

export const initialProjects = [
  {
    id: '1',
    title: 'TransitFlow Fleet Manager',
    description: 'A dedicated logistics platform automating vehicle requests, driver allocations, and tracking mechanisms using Express backend routes and real-time frontend indicators.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    type: 'Logistics SaaS',
    github: 'https://github.com/DilumAdikari',
    demo: '#',
    image: '/images/new req.jpg'
  },
  {
    id: '2',
    title: 'MRP System',
    description: 'Custom Manufacturing Resource Planning system built for the garment industry, featuring quality control tracking, style planning, job sheets, Goods Received Notes (GRN), and FIFO warehouse validation.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    type: 'Enterprise Software',
    github: 'https://github.com/DilumAdikari',
    demo: '#',
    image: '/images/Code.jpg'
  },
  {
    id: '3',
    title: 'Film & Gaming Room Rental Platform',
    description: 'An online reservation platform and dark-themed administrative dashboard featuring unique ticket IDs, hidden access toggles, and live status tracking for room rentals.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express'],
    type: 'Booking SaaS',
    github: 'https://github.com/DilumAdikari',
    demo: '#',
    image: '/images/film.png'
  },
  {
    id: '4',
    title: 'Attendance Marking System',
    description: 'An interactive desktop application built for university evaluation to handle user authentication, attendance logging, and automated reporting.',
    tech: ['C#', '.NET', 'Windows Forms'],
    type: 'Desktop App',
    github: 'https://github.com/DilumAdikari',
    demo: '#',
    image: '/images/attend.png'
  },
    {
    id: '5',
    title: 'Maintenance Management System! 🛠️',
    description: 'Managing and tracking maintenance tasks efficiently can be challenging. To streamline this workflow, I developed a full-fledged Maintenance Management System designed to track requests, schedule maintenance routines, and keep operations running smoothly.',
    tech: ['Mongodb', 'Exprss js', 'React','Node js'],
    type: 'Web App',
    github: 'https://github.com/DilumAdikari',
    demo: '#',
    image: '/images/dashboard.png'
  }
];

export const initialCertificates = [
  {
    id: '1',
    title: 'Front-End Web Development Certification',
    issuer: 'University of Moratuwa, Sri Lanka',
    date: 'Completed',
    description: 'Comprehensive coverage of modern frontend rendering frameworks',
    credentialLink: '#',
    image: '/images/front.jpg' // certificate image එක public/images/ folder එකට දාන්න
  },
  {
    id: '2',
    title: 'Server Side Development Certification',
    issuer: 'University of Moratuwa, Sri Lanka',
    date: 'Completed',
    description: 'Comprehensive coverage of modern server-side development practices',
    credentialLink: '#',
    image: '/images/server.jpg' // certificate image එක public/images/ folder එකට දාන්න
  },
  {
    id: '3',
    title: 'Time Managment',
    issuer: 'Lingaya Lalita Devi Institute of Management & Sciences (LLDIMS)',
    date: 'Completed',
    description: 'Time Management Skill',
    credentialLink: '#',
    image: '/images/time.jpg' // certificate image එක public/images/ folder එකට දාන්න
  },
  {
    id: '4',
    title: 'Python For Beginner',
    issuer: 'university of Moratuwa, Sri Lanka',
    date: 'Completed',
    description: 'Python Programming Skill',
    credentialLink: '#',
    image: '/images/python.jpg' // certificate image එක public/images/ folder එකට දාන්න
  },
];