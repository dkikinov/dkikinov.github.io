// ============================================================
// EDIT THIS FILE TO UPDATE ALL SITE CONTENT
// ============================================================

export const siteInfo = {
  name: "Denis Kikinov",
  title: "Software Developer",
  tagline: "Building interactive 3D applications and backend systems.",
  bio: "6+ years developing XR applications for medical training and neurosurgical planning across various XR platforms; working on personal projects on the side.",
  github: "https://github.com/dkikinov",
  linkedin: "https://www.linkedin.com/in/deniskikinov",
  researchGate: "https://www.researchgate.net/profile/Denis-Kikinov-2",
};

export const skills = [
 { category: "Languages", items: ["Java", "C#", "Python", "SQL"] },
 { category: "Frameworks", items: ["Spring Boot", "Unity 3D", "OpenXR", "MRTK"] },
 { category: "Tools", items: ["Git", "Docker", "PostgreSQL", "REST APIs"] },
 { category: "Platforms", items: ["HoloLens 2", "Meta Quest", "HTC Vive", "Android"] },
];

export const projects = [
  {
    id: "neuroar",
    title: "NeuroAR",
    subtitle: "Neurosurgical Planning AR Application",
    summary:
      "Built an AR application that lets clinicians visualize and interact with patient-specific brain anatomy — including white matter fibers, grey matter models, and functional connectivity data — in real-time 3D.",
    description: [
      "Developed a multi-modal AR application for neurosurgical planning using patient MRI data (DWI, T1-weighted, and fMRI). The system generates 3D structural models of grey and white matter and maps functional connectivity values to an interactive UI.",
      "Users can isolate individual brain regions, visualize fiber tracts with colour-coded connectivity values, and probe the brain model with a virtual tool to identify which fibers would be intersected by a given surgical trajectory.",
      "Designed to give neurosurgeons a spatial understanding of patient anatomy that 2D imaging alone cannot provide.",
    ],
    tech: ["Unity 3D", "C#", "Microsoft HoloLens", "MRTK", "MRI Data Processing"],
    images: [
      { src: "/images/NeuroAR1.jpg", alt: "Single fiber visualization" },
      { src: "/images/NeuroAR2.jpg", alt: "Tool interacting with fiber selection" },
      { src: "/images/NeuroAR3.png", alt: "Multiple views of brain model" },
    ],
  },
  {
    id: "neuroar-tumour",
    title: "NeuroAR — Brain Tumour Case",
    subtitle: "Tumour Visualization Extension",
    summary:
      "Extended the NeuroAR platform to visualize brain tumour cases, enabling surgeons to see tumour boundaries relative to critical fiber tracts before operating.",
    description: [
      "Adapted the NeuroAR visualization pipeline to handle brain tumour patient data, adding tumour boundary rendering alongside existing white matter and grey matter models.",
      "The application allows clinicians to understand the spatial relationship between a tumour and surrounding critical structures, supporting safer surgical approach planning.",
    ],
    tech: ["Unity 3D", "C#", "Microsoft HoloLens", "MRTK", "Medical Imaging"],
    images: [
      { src: "/images/NeuroART1.jpg", alt: "Brain tumour case visualization" },
    ],
  },
  {
    id: "brainar",
    title: "BrainAR",
    subtitle: "Educational Brain Anatomy Visualization",
    summary:
      "Created an AR application for visualizing brain anatomy, used in volunteer sessions with elementary and high school students to demonstrate AR's potential in education.",
    description: [
      "Developed an interactive AR application that displays labelled parts of the brain, including both healthy and brain tumour models.",
      "Used in outreach sessions with local schools to introduce students to both neuroscience and augmented reality technology. Simplified from research-grade tools to be accessible and engaging for younger audiences.",
    ],
    tech: ["Unity 3D", "C#", "Vuforia", "Android", "AR Foundation"],
    images: [
      { src: "/images/BrainAR1.jpg", alt: "BrainAR application" },
    ],
  },
  {
    id: "thesis",
    title: "Cross-Platform XR Training Study",
    subtitle: "Doctoral Thesis — Multi-Device EVD Simulator",
    summary:
      "Designed and developed near-identical neurosurgical training applications across 4 XR platforms (HoloLens 2, Quest 2, HTC Vive, Android AR) to evaluate which device or modality is most effective for medical skills training.",
    description: [
      "Built a suite of EVD (External Ventricular Drain) trajectory training applications in Unity 3D, based on an existing NeuroTouch simulator module. Each version was functionally identical but adapted to the input and display paradigms of its target platform.",
      "Deployed to HTC Vive (SteamVR), Microsoft HoloLens 2 (MRTK/OpenXR), Meta Quest 2 (OculusVR), and Android phone (Vuforia). Ran a controlled user study comparing task performance, accuracy, and user experience across all platforms.",
      "Thesis: \"Evaluating User Performance in Augmented and Virtual Reality for Neurosurgical Targeting Tasks.\"",
    ],
    tech: ["Unity 3D", "C#", "OpenXR", "SteamVR", "MRTK", "OculusVR", "Vuforia"],
    images: [
      { src: "/images/Thesis1.png", alt: "HTC Vive version" },
      { src: "/images/Thesis2.jpg", alt: "Quest 2 version" },
      { src: "/images/Thesis3.jpg", alt: "HoloLens 2 version" },
      { src: "/images/Thesis4.png", alt: "HoloLens point of view" },
      { src: "/images/Thesis5.png", alt: "Android AR version" },
    ],
  },
  {
    id: "recommendaction",
    title: "RecommendAction",
    subtitle: "REST API for Personal Recommendations",
    summary:
      "Designed and built a Spring Boot REST API for tracking personal recommendations (movies, books, music) with full CRUD, JWT auth, and PostgreSQL — a solo backend project demonstrating Java development skills.",
    description: [
      "A Spring Boot 3 REST API built with Java 21, Spring Data JPA, PostgreSQL, and Lombok. Supports full CRUD operations for managing recommendations with category and status tracking via Java enums.",
      "Features include a self-referencing RecGiver model (users who give recommendations), DTO-based request/response patterns, and a global exception handler. JWT-based Spring Security, Redis caching, Docker containerization, and GitHub Actions CI are planned for upcoming phases.",
      "Source code available on GitHub.",
    ],
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Spring Data JPA", "REST API", "Lombok"],
    images: [],
    github: "https://github.com/dkikinov/RecommendAction",
  },
];
