// ============================================================
//  PRODUCTS BUILT & DEPLOYED — single source of truth
//  Real, production-grade products across multiple domains.
//  Ordered most-impressive → least (featured order).
// ============================================================

// Status badge kinds → rendered as coloured pills on each card.
// Keys map to CSS modifier classes: .status_pill--<kind>
export const STATUS = {
  live: { label: "Live", kind: "live" },
  production: { label: "In Production", kind: "production" },
  playstore: { label: "Play Store", kind: "playstore" },
  website: { label: "Live Website", kind: "website" },
  enterprise: { label: "Enterprise", kind: "enterprise" },
  ai: { label: "AI Powered", kind: "ai" },
  privateClient: { label: "Private · Client", kind: "private" },
};

// Filter categories (order defines the tab order on the Projects page).
export const productCategories = [
  "All",
  "Healthcare",
  "AI Products",
  "E-Commerce",
  "Education",
  "Enterprise",
  "Business",
];

export const products = [
  {
    id: "vetician-ecosystem",
    emoji: "🐾",
    name: "Vetician Ecosystem",
    category: "Healthcare",
    type: "Healthcare Platform · React Native + MERN",
    accent: "#1f9d8f",
    image: "/assets/shots/vetician.jpg",
    description:
      "A complete pet healthcare and services ecosystem — a consumer app, a provider app, a responsive website and an admin dashboard. Users book pet services, schedule appointments, consult veterinarians over video and pay securely, while providers manage bookings, schedules and earnings from a dedicated dashboard.",
    features: [
      "Consumer & Provider Applications",
      "Appointment & Booking System",
      "Video Consultation",
      "Razorpay Payment Integration",
      "Push Notifications",
      "Authentication & Role Management",
      "Admin Dashboard",
      "Responsive Website",
    ],
    tech: ["React Native", "Expo", "React", "Node.js", "MongoDB", "Express", "Firebase", "Render"],
    status: ["live", "production", "playstore"],
    liveUrl: "https://vetician.com",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.dkg12.vetician&hl=en_IN",
  },
  {
    id: "agentic-astro",
    emoji: "🤖",
    name: "Agentic Astro",
    category: "AI Products",
    type: "AI-Powered Astrology Platform",
    accent: "#6d5cf0",
    image: "/assets/shots/agentic-astro.jpg",
    description:
      "An AI-powered astrology platform delivering a modern, engaging experience through intelligent insights, conversational interactions and a premium interface. Ships as both a responsive marketing website and a mobile application for a seamless cross-platform product.",
    features: [
      "AI-Powered Astrology Experience",
      "Conversational AI Interface",
      "Personalized Predictions",
      "Premium Responsive Landing Page",
      "Interactive Animations",
      "Mobile-First Design",
      "Cross-Platform Product",
    ],
    tech: ["React Native", "React", "Tailwind CSS", "JavaScript", "Node.js", "AI APIs", "MongoDB"],
    status: ["live", "playstore", "ai"],
    liveUrl: "https://agentic-astroweb.vercel.app/",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.agenticastro.app&hl=en_IN",
  },
  {
    id: "tezbuy",
    emoji: "🛒",
    name: "TezBuy",
    category: "E-Commerce",
    type: "Quick Commerce Platform · Blinkit-inspired",
    accent: "#f97316",
    image: "/assets/shots/tezbuy.jpg",
    description:
      "A modern quick-commerce platform inspired by Blinkit, designed for seamless online shopping with a fast, responsive experience — from browsing the catalog to a secure checkout and order tracking.",
    features: [
      "Product Catalog",
      "Categories & Search",
      "Shopping Cart",
      "Secure Checkout Flow",
      "Authentication",
      "Order Management",
      "Responsive Design",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: ["live", "production"],
    liveUrl: "https://tejbuy.vercel.app/",
  },
  {
    id: "smart-library",
    emoji: "📚",
    name: "Smart Library Management System",
    category: "Education",
    type: "Digital Library Management Platform",
    accent: "#0ea5e9",
    image: "/assets/shots/smart-library.jpg",
    description:
      "A complete digital solution built for a real-world self-study library. Students check in and out using QR codes while staff and administrators manage attendance, memberships and analytics from dedicated dashboards.",
    features: [
      "QR Code Attendance",
      "Student Check-in / Check-out",
      "Admin Dashboard",
      "Staff Dashboard",
      "Student Portal",
      "Membership Management",
      "Attendance Reports",
      "Analytics",
    ],
    roles: ["Admin", "Staff", "Student"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: ["live", "production"],
    liveUrl: "https://splibrary.vercel.app/",
  },
  {
    id: "college-dispensary",
    emoji: "🏥",
    name: "College Dispensary Management System",
    category: "Healthcare",
    type: "Healthcare Management Solution",
    accent: "#22c55e",
    image: "/assets/shots/college-dispensary.jpg",
    description:
      "A comprehensive dispensary management system built for educational institutions to streamline medical records, medicine inventory, prescriptions and patient management from a single platform.",
    features: [
      "Student Medical Records",
      "Patient Registration",
      "Doctor Dashboard",
      "Medicine Inventory",
      "Prescription Management",
      "Medical History",
      "Reports & Analytics",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: ["live", "production"],
    liveUrl: "https://collage-disp-frontend.vercel.app/",
  },
  {
    id: "aivet-visibility-analyzer",
    emoji: "🌍",
    name: "AI Website Visibility Analyzer",
    category: "AI Products",
    type: "AI + SEO Analysis Platform",
    accent: "#10b981",
    description:
      "An AI-powered website analysis platform built for a company to evaluate website visibility, technical SEO, performance and optimization opportunities — generating actionable insights to improve search presence and overall site health. Currently live and running in the company's production environment.",
    features: [
      "Website Visibility Analysis",
      "Technical SEO Audit",
      "Performance Monitoring",
      "Optimization Suggestions",
      "AI-Powered Insights",
      "Website Health Reports",
    ],
    tech: ["React", "Node.js", "AI APIs", "SEO Engine"],
    status: ["privateClient", "production", "ai"],
    note: "Private client project — live on the company's website, no public URL.",
  },
  {
    id: "help-desk",
    emoji: "🎫",
    name: "Enterprise Help Desk & Ticketing System",
    category: "Enterprise",
    type: "Internal Communication Platform",
    accent: "#6366f1",
    description:
      "An enterprise-grade help desk designed for internal company communication. Employees create support tickets, collaborate across departments, track issue status and keep a complete resolution history.",
    features: [
      "Ticket Management",
      "Department-wise Assignment",
      "Internal Conversations",
      "Priority Levels",
      "Status Tracking",
      "Resolution History",
      "Admin Dashboard",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: ["enterprise"],
  },
  {
    id: "gym-management",
    emoji: "💪",
    name: "Gym Management System",
    category: "Business",
    type: "Fitness Center Management Platform",
    accent: "#eab308",
    description:
      "A complete gym management solution for handling memberships, attendance, trainers, subscriptions and payments through a centralized dashboard.",
    features: [
      "Member Registration",
      "Membership Plans",
      "QR Attendance Management",
      "Trainer Dashboard",
      "Payment Tracking",
      "Reports & Analytics",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: ["production"],
  },
];

// Positioning badges shown above the showcase — the "what I actually do" summary.
export const productHighlights = [
  "10+ Production-Ready Products",
  "5+ Live Websites",
  "4 Mobile Applications",
  "3 AI-Based Solutions",
  "Enterprise Software",
  "Healthcare Platforms",
  "Education Systems",
  "E-Commerce Solutions",
];
