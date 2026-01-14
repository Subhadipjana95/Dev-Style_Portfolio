import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Subhadip Jana",
  initials: "SJ",
  url: "https://github.com/Subhadipjana95",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Frontend Web Developer | Design Engineer. I love building things and solving real-world problems with code.",
  summary:
    "I am a B.Tech Computer Science & Engineering Student at Netaji Subhash Engineering College (2023-2027). Passionate about Frontend Development, UI/UX Design, and building scalable web applications. Currently, I am a Design Core Team Member at [GDG on Campus NSEC](https://gdg.community.dev/gdg-on-campus-netaji-subhash-engineering-college-kolkata-india/). I have successfully built and deployed multiple projects including [Zerith](https://github.com/Subhadipjana95) and [EnviroMat](https://github.com/Subhadipjana95/EnviroMat).",
  avatarUrl: "https://github.com/Subhadipjana95.png",
  skills: [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Three.js",
    "GLSL",
    "C",
    "Python",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Figma",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "codesubhadip95@gmail.com",
    tel: "+919832668044",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Subhadipjana95",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/subhadipjana095",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:codesubhadip95@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Subhadip53874",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "NIXGN",
      href: "https://nixgn.com/",
      badges: [],
      location: "Kolkata, India",
      title: "Co-Founder || Design Engineer || Frontend Dev",
      logoUrl: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1767823664/Favicon_bemcjz.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Designing and developing user interfaces for web applications to improve user experience.",
    },
    {
      company: "GDG on Campus NSEC",
      href: "https://gdg.community.dev/gdg-on-campus-netaji-subhash-engineering-college-kolkata-india/",
      badges: [],
      location: "Kolkata, India",
      title: "Design Core Team Member",
      logoUrl: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768429837/GDG_Logo_yrydh5.png",
      start: "Sep 2025",
      end: "Present",
      description:
        "Contributing to the design and event management of the Google Developer Groups chapter at NSEC.",
    }
  ],
  education: [
    {
      school: "Netaji Subhash Engineering College",
      href: "https://www.nsec.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768430096/Screenshot_2026-01-15_040402_xo0qxf.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "NIXGn - Next-Gen Intelligence Execution Group",
      href: "https://github.com/nixgnofficial",
      dates: "2026",
      active: true,
      description:
        "Premium Software Agency & Product Studio Crafting aesthetic, high-performance web applications with cutting-edge technologies",
      technologies: [
        "TypeScript",
        "Next.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1767823774/b780dc6e-d7f3-46f8-9f2b-08ae1226f6c3.png",
      video: "",
    },
    {
      title: "Next.Ref_Alumni-Connect",
      href: "https://github.com/Subhadipjana95",
      dates: "2024",
      active: true,
      description:
        "College-Verified Alumni Referral Platform built with TypeScript.",
      technologies: [
        "TypeScript",
        "Next.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95/Next.Ref_Alumni-Connect",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://next-reff-alumni-connect.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1766874786/Screenshot_2025-12-28_040242_g4dvlu.png",
      video: "",
    },
    {
      title: "Kisan-Mitra",
      href: "https://github.com/Subhadipjana95",
      dates: "2024",
      active: true,
      description:
        "Forked project focused on farmer assistance tools.",
      technologies: [
        "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95/Kisan-Mitra",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://kisan-mitra-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1767549976/Screenshot_2026-01-04_233547_pqsq7i.png",
      video: "",
    },
    {
      title: "EnviroMat",
      href: "https://github.com/Subhadipjana95/EnviroMat",
      dates: "Sep 2025",
      active: true,
      description:
        "Credit Based Waste Recycling App. Platforms allows resale marketplace and gamified leaderboard using React.js and GSAP.",
      technologies: [
        "React.js",
        "GSAP",
        "JavaScript",
        "CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95/EnviroMat",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://enviro-mat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1767550276/Screenshot_2026-01-04_234059_gakrru.png",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "CosmoHacks1",
      dates: "2025",
      location: "Techno City, Garia, Kolkata, India",
      description:
        "2nd Runner-Up & Aptos Track Winner. Developed a modern web application that bridges the gap between students, universities, and alumni networks.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "HackSpire 2k25",
      dates: "2025",
      location: "FIEM, Sonarpur, Kolkata, India",
      description:
        "UI/UX Track Winner. Developed a comprehensive agricultural marketplace platform that connects farmers and dealers for crop trading.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "Smart Make-a-thon",
      dates: "2024",
      location: "IEM, Saltlake, Kolkata, India",
      description:
        "2nd Runner-Up. Developed a sustainable credit-based waste management solution.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "Hello World Hacks",
      dates: "2025",
      location: "RCCIIT, Beleghata, Kolkata, India",
      description:
        "Developed a sustainable project focusing on environmental solutions.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "HexaFalls",
      dates: "2025",
      location: "Agarpara, Kolkata, India",
      description:
        "Developed a mobile app for local bus booking in West Bengal.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "Innovocon 2k24",
      dates: "2024",
      location: "Kalyani, West Bengal, India",
      description:
        "Winner of 'Think 3D' track. Developed innovative solutions using 3D technologies.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
