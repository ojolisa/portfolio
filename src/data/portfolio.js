export const portfolioData = {
  // Personal Information
  personal: {
    name: "Ojasv Singhal",
    title: "Software Engineer",
    subtitle: "Bridging AI and web to build impactful solutions",
    typingTitles: [
      "Software Engineer",
      "Full Stack Developer",
      "AI/ML Engineer",
      "Data Scientist",
      "Problem Solver",
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
    leetcode: "https://leetcode.com/u/ojasvsinghal11223344/",
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
    ai_ml: ["Machine Learning", "Deep Learning", "Neural Networks", "Natural Language Processing", "Computer Vision", "MLOps", "LLMOps", "TensorFlow", "PyTorch", "Langchain", "OpenAI API", "Scikit-learn", "Pandas", "NumPy", "Keras"],
    databases: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"]
  },

  // Education
  education: [
    {
      id: 2,
      institution: "Maharaja Agrasen Institute of Technology",
      degree: "BTech in Artificial Intelligence and Machine Learning",
      duration: "2022 - 2026",
      location: "Delhi, India",
      gpa: "8.922",
      achievements: [
        "Active participant in technical projects and competitions",
        "Specialized in Machine Learning algorithms and AI applications",
      ]
    },
    {
      id: 1,
      institution: "Indian Institute of Technology, Madras",
      degree: "Bachelor of Science in Data Science and Applications",
      duration: "2022 - 2026",
      location: "India",
      gpa: "9.22",
      description: "Minor in Finance",
      achievements: [
        "Credit Completion in Aug 2025 (One of the fastest in the program)",
        "Specialized in Data Science with Finance Minor",
        "Completed advanced coursework in Machine Learning and Statistics"
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
      technologies: ["Langchain", "Python", "APIs", "Vector DBs", "RAG", "OpenAI API"],
      links: {
        website: "https://www.buildfastwithai.com/",
        linkedin: "https://www.linkedin.com/company/build-fast-with-ai"
      }
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
        "Built scalable ML infrastructure using Flask and Python",
        "Implemented real-time prediction systems"
      ],
      technologies: ["Python", "Flask", "Machine Learning", "Docker", "AWS", "PostgreSQL"],
      links: {
        website: "",
        linkedin: "https://www.linkedin.com/company/xander-corp01/"
      }
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
      githubUrl: "https://github.com/ojolisa/GenAI_LMS",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "RAG Document System",
      description: "Retrieval-Augmented Generation system for querying PDF documents with AI-generated answers and citations.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Langchain", "PyTest", "ChromaDB", "OpenAI API"],
      features: ["PDF ingestion", "Searchable knowledge base", "Cited AI responses", "Multi-document support"],
      githubUrl: "https://github.com/ojolisa/RAG-Document-System",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Image/Text to 3D Model Generator",
      description: "Web app using OpenAI's Shap-E to convert images/text into 3D models (.obj/.stl) in Jupyter.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Shap-E", "Jupyter", "OpenAI API"],
      features: ["Image to 3D conversion", "Text to 3D generation", "Export to STL/OBJ", "Interactive preview"],
      githubUrl: "https://github.com/ojolisa/image-text-to-3d-model",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Custom Object Detection",
      description: "YOLO-based object detection model trained on Pascal VOC 2007 using PyTorch.",
      image: "/api/placeholder/400/250",
      technologies: ["PyTorch", "Python", "Pascal VOC", "YOLO", "OpenCV"],
      features: ["Training pipeline", "Model evaluation", "YOLO-based architecture", "Real-time detection"],
      githubUrl: "https://github.com/ojolisa/Custom-object-detection",
      category: "AI/ML"
    },
    {
      id: 5,
      title: "Decentralized Voting on Ethereum",
      description: "Blockchain-based voting platform with Ethereum smart contracts.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "Ethereum", "Smart Contracts", "Web3.js", "Solidity"],
      features: ["Secure voting", "Decentralized ledger", "Transparent results", "Voter verification"],
      githubUrl: "https://github.com/ojolisa/Decentralized-Voting-on-the-Ethereum-Blockchain",
      category: "Blockchain"
    },
    {
      id: 6,
      title: "Grocery Store Web App",
      description: "A full-stack grocery store application using Vue.js and Flask with SQLite.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Flask", "SQLite", "Python", "HTML/CSS"],
      features: ["Product browsing", "Cart & checkout", "Admin management", "Order tracking"],
      githubUrl: "https://github.com/ojolisa/Project_MAD1",
      category: "Full Stack"
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Modern responsive portfolio website built with React, Tailwind CSS, and Framer Motion.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
      features: ["Responsive design", "Smooth animations", "Interactive UI", "Modern styling"],
      liveUrl: "https://ojasvportfolio.vercel.app",
      githubUrl: "https://github.com/ojolisa/portfolio",
      category: "Frontend"
    },
    {
      id: 8,
      title: "MERN-Stack E-Commerce",
      description: "Full-stack e-commerce application built with MongoDB, Express.js, React, and Node.js.",
      image: "/api/placeholder/400/250",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      features: ["User authentication", "Product management", "Shopping cart", "Order processing"],
      githubUrl: "https://github.com/ojolisa/MERN-E-com-web-app",
      category: "Full Stack"
    }
  ],

  // Certifications
  certifications: [
  ],

  // Testimonials
  testimonials: [
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
