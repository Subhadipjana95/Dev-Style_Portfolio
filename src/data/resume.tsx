import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesText } from "@/components/magicui/sparkles-text";

export const DATA = {
  name: "Subhadip Jana",
  initials: "SJ",
  url: "https://github.com/Subhadipjana95",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  descriptionValue: "UI/UX Designer, Design Engineer, Frontend Web Dev. I love to design and build products with stunning aesthetic.",
  description: (
    <>
      <div className="">
        <Highlight>
          <SparklesText className="text-inherit  text-sm sm:text-lg font-semibold" sparklesCount={3}>UI/UX Designer</SparklesText>
        </Highlight>,{" "}
        <Highlight>
          <SparklesText className="text-inherit text-sm sm:text-lg font-semibold" sparklesCount={3}>Design Engineer</SparklesText>
        </Highlight>,{" "}
        <Highlight>
          <SparklesText className="text-inherit text-sm sm:text-lg font-semibold" sparklesCount={3}>Frontend Dev</SparklesText>
        </Highlight>. I love to design and build products with stunning aesthetics.
      </div>
      {/* <div className="block md:hidden">
        UI/UX Designer | Design Engineer | Frontend Dev. I love to design and build stunning things with aesthetic.
      </div> */}
    </>
  ),
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
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768510512/Screenshot_2026-01-16_021227_crgere.png",
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1767823774/b780dc6e-d7f3-46f8-9f2b-08ae1226f6c3.png",
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
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP"
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
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1766874786/Screenshot_2025-12-28_040242_g4dvlu.png",
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
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP"
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
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1767549976/Screenshot_2026-01-04_233547_pqsq7i.png",
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
        "Tailwind CSS",
        "Framer Motion"
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
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1767550638/Screenshot_2026-01-04_234556_cc0har.png",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "CosmoHacks1",
      dates: "2025",
      location: "Techno City, Garia, Kolkata, India",
      description:
        "Developed a modern web application that bridges the gap between students, universities and alumni networks.",
      image: "https://www.cosmohack1.xyz/images/sourcifylogo.webp",
      win: ["2nd Runner-Up", "Aptos Track Winner"],
      mlh: "",
      links: [],
    },
    {
      title: "CalcuttaHacks",
      dates: "2025",
      location: "Techno University, Saltlake, Kolkata, India",
      description:
        "Developed NextRef: A website that bridges the gap between students, universities and alumni networks.",
      image: "https://calcutta-lesshacksgreater.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F9c2b708879194b4cab9fe5fc9ebe169b%2Fassets%2Ffavicon%2F732.jpeg&w=1440&q=75",
      mlh: "",
      links: [],
    },
    {
      title: "HackSpire 2k25",
      dates: "2025",
      location: "FIEM, Sonarpur, Kolkata, India",
      description:
        "Developed a comprehensive agricultural marketplace platform that connects farmers and dealers for crop trading.",
      image: "https://hackspire25.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F7beb3e46a5f84f80a4c743aec516f5d1%2Fassets%2Ffavicon%2F660.jpeg&w=1440&q=75",
      win: "UI/UX Track Winner",
      mlh: "",
      links: [],
    },
    {
      title: "Smart Make-a-thon",
      dates: "2025",
      location: "IEM, Saltlake, Kolkata, India",
      description:
        "Developed a sustainable credit-based waste management solution.",
      image: "https://smf-smart-makeathon.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fe4b801dae041434e9656a41101a48550%2Fassets%2Ffavicon%2F873.jpeg&w=1440&q=75",
      win: "2nd Runner-Up",
      mlh: "",
      links: [],
    },
    {
      title: "Hello World Hacks",
      dates: "2025",
      location: "RCCIIT, Beleghata, Kolkata, India",
      description:
        "Developed a sustainable project focusing on environmental solutions.",
      image: "https://hello-world-hacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F6fcb2182ab544753929d6c8de6a30749%2Fassets%2Ffavicon%2F961.png&w=1440&q=75",
      mlh: "",
      links: [],
    },
    {
      title: "HexaFalls",
      dates: "2025",
      location: "Agarpara, Kolkata, India",
      description:
        "Developed a mobile app for local bus booking in West Bengal.",
      image: "https://hexafalls.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F70a0045868c24e408ea8fc441010ab79%2Fassets%2Ffavicon%2F180.png&w=1440&q=75",
      mlh: "",
      links: [],
    },
    {
      title: "Innovocon 2k24",
      dates: "2024",
      location: "Kalyani, West Bengal, India",
      description:
        "Winner of 'Think 3D'. Developed innovative solutions using 3D technologies.",
      image: "https://innovocon2025.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fb46bac90f4064d00ad4db00949c2a78e%2Fassets%2Ffavicon%2F222.png&w=1440&q=75",
      win: "Winner",
      mlh: "",
      links: [],
    },
  ],
} as const;
