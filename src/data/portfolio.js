export const portfolioData = {
  // Personal Information
  personal: {
    name: "Ojasv Singhal",
    title: "Full Stack & ML Developer",
    subtitle: "Bridging AI and web to build impactful solutions",
    typingTitles: [
      "Full Stack Developer",
      "ML Engineer", 
      "AI Enthusiast",
      "Problem Solver",
      "Tech Innovator"
    ],
    email: "ojasvsinghal11223344@gmail.com",
    phone: "+91 9873744099",
    location: "Delhi, India",
    bio: "I'm a developer and machine learning enthusiast passionate about building intelligent systems and robust web applications. I enjoy transforming innovative ideas into scalable solutions using modern tech stacks and AI.",
  },

  // Social Links
  social: {
    github: "https://github.com/ojolisa",
    linkedin: "https://www.linkedin.com/in/ojasv-singhal-35669625b/",
    leetcode: "https://leetcode.com/u/ojasv_singhal/",
    twitter: "",
    portfolio: "",
    resume: "/resume.pdf"
  },

  // Skills
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "Vue.js", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Flask", "Express.js"],
    tools: ["Git", "Jupyter Notebook", "MATLAB", "Unreal Engine", "Tableau", "DBMS", "REST API", "Docker", "VS Code"],
    languages: ["Python", "Java", "C", "JavaScript", "Bash", "SQL", "TypeScript"],
    ai_ml: ["TensorFlow", "PyTorch", "Langchain", "OpenAI API", "Scikit-learn", "Pandas", "NumPy"],
    databases: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"]
  },

  // Education
  education: [
    {
      id: 1,
      institution: "Indian Institute of Technology, Madras",
      degree: "Bachelor of Science in Data Science and Applications",
      duration: "2022 - 2026 (Credit Completion in Aug 2025)",
      location: "India",
      gpa: "9.22",
      description: "Minor in Finance",
      achievements: [
        "Maintained 9.22 GPA throughout the program",
        "Specialized in Data Science with Finance Minor",
        "Completed advanced coursework in Machine Learning and Statistics"
      ]
    },
    {
      id: 2,
      institution: "Maharaja Agrasen Institute of Technology",
      degree: "BTech in Artificial Intelligence and Machine Learning",
      duration: "2022 - 2026",
      location: "Delhi, India",
      gpa: "8.875",
      achievements: [
        "Maintained 8.875 GPA in AI/ML program",
        "Active participant in technical projects and competitions",
        "Specialized in Machine Learning algorithms and AI applications"
      ]
    },
    {
      id: 3,
      institution: "St. Xavier's School",
      degree: "High School Diploma",
      duration: "2010 - 2022",
      location: "Delhi, India",
      description: "12th: 90.8%, 10th: 92.8%",
      achievements: [
        "Scored 90.8% in Class 12th",
        "Scored 92.8% in Class 10th",
        "Strong foundation in Mathematics and Science"
      ]
    }
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      company: "BuildFastWithAI",
      position: "AI Intern",
      duration: "May 2024 - Aug 2024",
      location: "Remote",
      description: "Assisted in creating AI applications using Langchain, APIs, and AI agents. Implemented RAG and contributed to Educhain.",
      achievements: [
        "Built Langchain-based RAG pipelines for document processing",
        "Supported the development of Educhain.in platform",
        "Developed AI agents for automated workflows",
        "Implemented vector database solutions for semantic search"
      ],
      technologies: ["Langchain", "Python", "APIs", "Vector DBs", "RAG", "OpenAI API"]
    },
    {
      id: 2,
      company: "Xander.co",
      position: "ML Engineer and Co-founder",
      duration: "Aug 2024 - July 2025",
      location: "Remote",
      description: "Co-founded a startup focused on ML solutions. Managed the team and contributed to ML engineering tasks.",
      achievements: [
        "Led development and team management for ML products",
        "Deployed AI-powered products serving 1000+ users",
        "Built scalable ML infrastructure using Flask and Python",
        "Implemented real-time prediction systems"
      ],
      technologies: ["Python", "Flask", "Machine Learning", "Docker", "AWS", "PostgreSQL"]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "GenAI LMS",
      description: "A Generative AI-integrated Learning Management System using Vue.js, Flask, and Gemini for Python education.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Flask", "Gemini API", "Python", "SQLite"],
      features: ["Generative AI for coding help", "Python learning modules", "Interactive UI", "Progress tracking"],
      liveUrl: "",
      githubUrl: "https://github.com/ojolisa/genai-lms",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "RAG Document System",
      description: "Retrieval-Augmented Generation system for querying PDF documents with AI-generated answers and citations.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Langchain", "PyTest", "ChromaDB", "OpenAI API"],
      features: ["PDF ingestion", "Searchable knowledge base", "Cited AI responses", "Multi-document support"],
      githubUrl: "https://github.com/ojolisa/rag-document-system",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Image/Text to 3D Model Generator",
      description: "Web app using OpenAI's Shap-E to convert images/text into 3D models (.obj/.stl) in Jupyter.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Shap-E", "Jupyter", "OpenAI API"],
      features: ["Image to 3D conversion", "Text to 3D generation", "Export to STL/OBJ", "Interactive preview"],
      githubUrl: "https://github.com/ojolisa/text-to-3d",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Custom Object Detection",
      description: "YOLO-based object detection model trained on Pascal VOC 2007 using PyTorch.",
      image: "/api/placeholder/400/250",
      technologies: ["PyTorch", "Python", "Pascal VOC", "YOLO", "OpenCV"],
      features: ["Training pipeline", "Model evaluation", "YOLO-based architecture", "Real-time detection"],
      githubUrl: "https://github.com/ojolisa/custom-object-detection",
      category: "AI/ML"
    },
    {
      id: 5,
      title: "Decentralized Voting on Ethereum",
      description: "Blockchain-based voting platform with Ethereum smart contracts.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "Ethereum", "Smart Contracts", "Web3.js", "Solidity"],
      features: ["Secure voting", "Decentralized ledger", "Transparent results", "Voter verification"],
      githubUrl: "https://github.com/ojolisa/blockchain-voting",
      category: "Blockchain"
    },
    {
      id: 6,
      title: "Grocery Store Web App",
      description: "A full-stack grocery store application using Vue.js and Flask with SQLite.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Flask", "SQLite", "Python", "HTML/CSS"],
      features: ["Product browsing", "Cart & checkout", "Admin management", "Order tracking"],
      githubUrl: "https://github.com/ojolisa/grocery-store-app",
      category: "Full Stack"
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Modern responsive portfolio website built with React, Tailwind CSS, and Framer Motion.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
      features: ["Responsive design", "Smooth animations", "Interactive UI", "Modern styling"],
      liveUrl: "https://ojasv-portfolio.vercel.app",
      githubUrl: "https://github.com/ojolisa/portfolio",
      category: "Frontend"
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      name: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      description: "Comprehensive course covering supervised and unsupervised learning, neural networks, and best practices.",
      credentialUrl: ""
    },
    {
      id: 2,
      name: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      description: "Complete certification covering frontend and backend development technologies.",
      credentialUrl: ""
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Senior Developer at BuildFastWithAI",
      company: "BuildFastWithAI",
      content: "Ojasv demonstrated exceptional skills in AI development during his internship. His work on RAG pipelines was outstanding.",
      image: "/api/placeholder/100/100"
    }
  ],

  // Contact Form Settings
  contact: {
    formspreeEndpoint: "https://formspree.io/f/your-form-id", // Replace with actual endpoint
    emailjsConfig: {
      serviceId: "your_service_id",
      templateId: "your_template_id",
      publicKey: "your_public_key"
    }
  }
};

export default portfolioData;
