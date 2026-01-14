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
        url: "https://x.com/codesubhadip95",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "GDG on Campus NSEC",
      href: "https://gdg.community.dev/gdg-on-campus-netaji-subhash-engineering-college-kolkata-india/",
      badges: [],
      location: "Kolkata, India",
      title: "Design Core Team Member",
      logoUrl: "",
      start: "Sep 2025",
      end: "Present",
      description:
        "Contributing to the design and event management of the Google Developer Groups chapter at NSEC.",
    },
    {
      company: "Kolkata Metro App",
      href: "#",
      badges: [],
      location: "Kolkata, India",
      title: "UI/UX Designer",
      logoUrl: "",
      start: "Jun 2025",
      end: "July 2025",
      description:
        "Redesigned the Kolkata Metro App user interface using Material 3 UI principles in Figma to improve user experience.",
    }
  ],
  education: [
    {
      school: "Netaji Subhash Engineering College",
      href: "https://www.nsec.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Zerith",
      href: "https://github.com/Subhadipjana95",
      dates: "Sep 2025 - Oct 2025",
      active: true,
      description:
        "A Stock Trading Web App built with Next.js 15, TypeScript, and ShadCN/ui. Features real-time market data via Finnhub APIs and AI market summaries.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "ShadCN UI",
        "Finnhub API",
        "AI Integration"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
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
      ],
      image: "",
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
          href: "https://github.com/Subhadipjana95",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
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
          href: "https://github.com/Subhadipjana95",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Innovocon 2k24",
      dates: "2024",
      location: "Kolkata, India",
      description:
        "Winner of 'Think 3D' track. Developed innovative solutions using 3D technologies.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "Smart Make-a-thon",
      dates: "2024",
      location: "India",
      description:
        "2nd Runner-Up. Developed a sustainable project focusing on environmental solutions.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
