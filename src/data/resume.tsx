import { Icons } from "@/components/icons";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { HomeIcon } from "@/components/animated-icons/home";
import { BookTextIcon } from "@/components/animated-icons/book-text";
import { MailCheckIcon } from "@/components/animated-icons/mail-check";
import { TwitterIcon } from "@/components/animated-icons/twitter";
import LinkedinIcon from "@/components/animated-icons/linkedin";
import { GithubIcon } from "@/components/animated-icons/github";
import { HeartIcon } from "@/components/animated-icons/heart";

type Skill = {
  name: string;
  icon?: React.ReactElement;
};

export const DATA = {
  name: "Subhadip Jana",
  initials: "SJ",
  url: "https://github.com/Subhadipjana95",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  descriptionValue: "UI/UX Designer, Design Engineer, Frontend Web Dev. I love to design and build products with stunning aesthetic.",
  description: (
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
  ),
  
  avatarUrl: "https://github.com/Subhadipjana95.png",
  skills: [
    { name: "Next.js", icon: <Icons.nextjs className="size-3" /> },
    { name: "React.js", icon: <Icons.react className="size-3" /> },
    { name: "TypeScript", icon: <Icons.typescript className="size-3" /> },
    { name: "JavaScript", icon: <Icons.javascript className="size-3" /> },
    { name: "Tailwind CSS", icon: <Icons.tailwind className="size-3" /> },
    { name: "Framer Motion", icon: <Icons.framermotion className="size-3" /> },
    { name: "GSAP", icon: <Icons.gsap className="size-3" /> },
    { name: "Three.js", icon: <Icons.threejs className="size-3" /> },
    { name: "WebGL", icon: <Icons.webgl className="size-3" /> },
    { name: "HTML", icon: <Icons.html5 className="size-3" /> },
    { name: "CSS", icon: <Icons.css3 className="size-3" /> },
    { name: "Figma", icon: <Icons.figma className="size-3" /> },
    { name: "Canva", icon: <Icons.canva className="size-3" /> },
    { name: "Adobe Illustrator", icon: <Icons.AdobeIllustrator className="size-3" /> },
    { name: "Graphic Design" },
    { name: "Firebase", icon: <Icons.firebase className="size-3" /> },
    { name: "MongoDB", icon: <Icons.mongodb className="size-3" /> },
    { name: "Vite", icon: <Icons.vite className="size-3" /> },
    { name: "Git", icon: <Icons.git className="size-3" /> },
    { name: "GitHub", icon: <Icons.github className="size-3" /> },
    { name: "Vercel", icon: <Icons.vercel className="size-3" /> },
    { name: "Netlify", icon: <Icons.netlify className="size-3" /> },
    { name: "SEO", icon: <Icons.seo className="size-3" /> },
    { name: "C", icon: <Icons.cLang className="size-3" /> },
    { name: "Java", icon: <Icons.javaLang className="size-3" /> },
    { name: "Python", icon: <Icons.python className="size-3" /> },
  ] satisfies Skill[],
  navbar: [
    {
      href: "/",
      icon: (<HomeIcon size={20} />),
      label: "Home"
    },
    {
      href: "/blog",
      icon: (<BookTextIcon size={20} />),
      label: "Blog"
    },
    {
      href: "/support",
      icon: (<HeartIcon size={20} />),
      label: "Donate"
    },
  ],
  contact: {
    email: "codesubhadip95@gmail.com",
    tel: "+919832668044",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Subhadipjana95",
        icon: <GithubIcon size={20} />,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/subhadipjana095",
        icon: <LinkedinIcon size={20} />,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:codesubhadip95@gmail.com",
        icon: <MailCheckIcon size={20} />,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Subhadip53874",
        icon: <TwitterIcon size={20} />,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Groot UI",
      href: "https://groot-ui.vercel.app",
      badges: ["Founder"],
      location: "Kolkata, India",
      title: "Design Engineer",
      logoUrl: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776719149/Groot_Logo_ala1pg.webp",
      start: "Apr 2026",
      end: "Present",
      description:
        "Designing and developing Next.js blocks and templates for web applications to improve developer experience.",
    },
    {
      company: "NIXGN",
      href: "https://nixgn.vercel.app",
      badges: ["Co-Founder"],
      location: "Kolkata, India",
      title: "Design Engineer",
      logoUrl: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768668239/Nixgn_Logo_Dark_s8nbtu.svg",
      start: "Jan 2026",
      end: "Present",
      description:
        "Developing user interfaces for web applications to improve user experience.",
    },
    {
      company: "GDG on Campus NSEC",
      href: "https://gdg.community.dev/gdg-on-campus-netaji-subhash-engineering-college-kolkata-india/",
      badges: [],
      location: "Kolkata, India",
      title: "Design Co-Lead",
      logoUrl: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768681855/GDG_Logo_jgzns9.webp",
      start: "Sep 2025",
      end: "Present",
      description:
        "Contributing to the design and event management of the Google Developer Groups chapter at NSEC.",
    },
    {
      company: "Heva AI",
      href: "https://www.heva.ai",
      badges: [],
      location: "Kolkata, India",
      title: "UI/UX Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQEBoC6f35Ykow/company-logo_200_200/B56Z2RHtegKMAI-/0/1776256211642/heva_ai_logo?e=1778112000&v=beta&t=rDS7q4Qrrzrhbu9I82lzEmq_kyeJBevmVAQYTV0m-Z4",
      start: "Apr 2026",
      end: "May 2026",
      description:
        "Redesigned the Landing page for Heva AI to improve user engagement and conversion rates.",
    },
  ],
  education: [
    {
      school: "Netaji Subhash Engineering College",
      href: "https://www.nsec.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768681855/Screenshot_2026-01-15_040402_r9wd4a.webp",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Groot UI - Design System",
      href: "https://groot-ui.vercel.app",
      dates: "2026",
      active: true,
      description: "Groot UI is a design system that provides a set of pre-designed components and patterns for building web applications.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95/Groot-UI",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://groot-ui.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776286826/Groot-UI_Preview_ojjktb.webp",
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776286912/Groot_UI_Preview_Dark_in5qww.webp",
      video: "",
    },
    {
      title: "NIXGN - Next-Gen Intelligence Execution Group",
      href: "https://nixgn.com",
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
          type: "Live",
          href: "https://nixgn.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768660890/w8_cx0svq.webp",
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768660876/w9_e0zxys.webp",
      video: "",
    },
    {
      title: "PrintSyte - Passport Photo Genarator",
      href: "https://print-syte.vercel.app/",
      dates: "2026",
      active: true,
      description: "PrintSyte is a passport photo generator that helps you create & print passport photos in a single click.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "remove.bg"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95/print-mate",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://print-syte.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776287225/printsyte_horizontal_wogkir.webp",
      imageDark: "",
      video: "",
    },
    {
      title: "Brain.2 - AI that listens, understands and acts",
      href: "https://second-brain-nixgn.vercel.app",
      dates: "2026",
      active: true,
      description:
        "Brain.2 is an ambient AI assistant that converts your everyday conversations into scheduled tasks, automated workflows and intelligent decisions.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Gemini 3.1"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Subhadipjana95/Brain.2",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://second-brain-nixgn.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1774298556/Screenshot_2026-03-24_005017_1_cduz1a.webp",
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1774298556/Screenshot_2026-03-24_005017_1_cduz1a.webp",
      video: "",
    },
    {
      title: "Next.Ref_Alumni-Connect",
      href: "https://next-reff-alumni-connect.vercel.app",
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
          href: "https://next-reff-alumni-connect.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768645965/w4_uzxlxp.webp",
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768645965/w4_uzxlxp.webp",
      video: "",
    },
    {
      title: "Kisan-Mitra",
      href: "https://github.com/Subhadipjana95/Kisan-Mitra",
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
          href: "https://kisan-mitra-app.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768645966/w1_mzqc0p.webp",
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768645966/w1_mzqc0p.webp",
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
          href: "https://enviro-mat.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768645965/w6_rqdjc7.webp",
      imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768645965/w7_o78qvl.webp",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "Binary V2",
      dates: "2026",
      location: "KGEC, Kalyani, West Bengal, India",
      description:
        "Developed a ambient AI assistant that converts your everyday conversations into scheduled tasks, automated workflows and intelligent decisions.",
      image: "https://binaryvtwo.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fd1a4a37a62854e17afa6f685740478fc%2Fassets%2Ffavicon%2F449.png&w=1440&q=75",
      win: ["Requestly Track Winner"],
      mlh: "",
      links: [],
    },
    {
      title: "CosmoHacks1",
      dates: "2025",
      location: "Techno City, Garia, Kolkata, India",
      description:
        "Developed a modern web application that bridges the gap between students, universities and alumni networks.",
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/f_auto,q_auto,c_fill/v1768681964/Screenshot_2026-01-17_002100_vq6jhg.webp",
      win: ["2nd Runner-Up", "Aptos Track Winner"],
      mlh: "",
      links: [],
    },
    {
      title: "CalcuttaHacks",
      dates: "2025",
      location: "Techno India University, Saltlake, Kolkata, India",
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
  animes: [
    {
      id: 1,
      title: "Attack on Titan",
      image: "https://i.pinimg.com/1200x/0c/25/be/0c25be614595a6066e18fc72fe1669ab.jpg",
      rating: 5.0,
      watchlistLink: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
    },
    {
      id: 2,
      title: "Solo Leveling",
      image: "https://i.pinimg.com/736x/95/04/2a/95042aaa5a9511bbecbc7f3177cbfd40.jpg",
      rating: 4.2,
      watchlistLink: "https://myanimelist.net/manga/121496/Solo_Leveling"
    },
    {
      id: 3,
      title: "Death Note",
      image: "https://i.pinimg.com/1200x/27/25/8e/27258e46c289795e40c8a191c1a02cf2.jpg",
      rating: 4.8,
      watchlistLink: "https://myanimelist.net/anime/1535/Death_Note"
    },
    {
      id: 4,
      title: "Cyberpunk: Edgerunners",
      image: "https://i.pinimg.com/736x/e1/1c/d3/e11cd3ad006632396f494cd3adc6df12.jpg",
      rating: 4.5,
      watchlistLink: "https://myanimelist.net/anime/42310/Cyberpunk__Edgerunners"
    },
    {
      id: 5,
      title: "Naruto: Shippuden",
      image: "https://i.pinimg.com/1200x/ec/f2/ef/ecf2ef4c22c5affc73a3c1d2071c3818.jpg",
      rating: 4.4,
      watchlistLink: "https://myanimelist.net/anime/1735/Naruto__Shippuuden"
    },
    {
      id: 6,
      title: "Demon Slayer",
      image: "https://i.pinimg.com/736x/13/80/49/138049fbe39583718456b937f0423c31.jpg",
      rating: 4.5,
      watchlistLink: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba"
    },
    {
      id: 7,
      title: "Code Geass",
      image: "https://i.pinimg.com/1200x/de/97/e0/de97e0ffec6eced91f4a241429b7df6d.jpg",
      rating: 4.1,
      watchlistLink: "https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch"
    },
    {
      id: 8,
      title: "Bleach",
      image: "https://i.pinimg.com/1200x/0f/a1/52/0fa152fde9d25cdae634751c8c384aff.jpg",
      rating: 4.0,
      watchlistLink: "https://myanimelist.net/anime/269/Bleach"
    },
  ],
  movies: [
    {
      id: 1,
      title: "Drishyam 2",
      image: "https://i.pinimg.com/1200x/4f/33/5f/4f335fd299f0de5f066a935379a6ff25.jpg",
      rating: 5.0,
      watchlistLink: "https://www.imdb.com/title/tt15501640"
    },
    {
      id: 2,
      title: "Interstellar",
      image: "https://i.pinimg.com/1200x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
      rating: 4.9,
      watchlistLink: "https://www.imdb.com/title/tt0816692/"
    },
    {
      id: 3,
      title: "Shawshank Redemption",
      image: "https://i.pinimg.com/1200x/73/8f/69/738f691aa50ba94850b9c2a279bdb06b.jpg",
      rating: 4.8,
      watchlistLink: "https://www.imdb.com/title/tt0111161/"
    },
    {
      id: 4,
      title: "Money Heist",
      image: "https://i.pinimg.com/1200x/6e/42/0b/6e420b7bd2a65359258ee4c5ee1501dd.jpg",
      rating: 4.9,
      watchlistLink: "https://www.imdb.com/title/tt6468322/"
    },
    {
      id: 5,
      title: "Alice in Boderland",
      image: "https://i.pinimg.com/1200x/fb/96/fe/fb96fe681792c162eedeaecfe55dd05d.jpg",
      rating: 4.8,
      watchlistLink: "https://www.imdb.com/title/tt10795658/"
    },
  ],
  manhwas: [
    {
      id: 1,
      title: "Nano Machine",
      image: "https://i.pinimg.com/1200x/c2/e6/47/c2e64771fce495412e3e5856ed063705.jpg",
      rating: 4.9,
      watchlistLink: "https://w61.readnanomachine.com/"
    },
    {
      id: 2,
      title: "The Beginning After The End",
      image: "https://i.pinimg.com/736x/69/c2/db/69c2db926d049090f7788cc1dbc0ed9b.jpg",
      rating: 4.5,
      watchlistLink: "https://w8.thebeginingaftertheend.com/"
    },
    {
      id: 3,
      title: "After Rebirth, I Used Mirror Reversal For Vengeance",
      image: "https://i.pinimg.com/736x/50/17/95/501795e9474e17a3ebe210bfc862808e.jpg",
      rating: 4.2,
      watchlistLink: "https://www.mgeko.cc/manga/after-rebirth-i-used-mirror-reversal-for-vengeance/"
    },
    {
      id: 4,
      title: "Myst, Might, Mayhem",
      image: "https://i.pinimg.com/736x/e6/88/e6/e688e674bf4cf3281361a158ccaffd85.jpg",
      rating: 4.4,
      watchlistLink: "https://manhwaclan.com/manga/myst-might-mayhem/"
    },
    {
      id: 5,
      title: "Bad Born Blood",
      image: "https://i.pinimg.com/736x/57/f9/e5/57f9e5a80c46a3a346b62320efe6ebad.jpg",
      rating: 4.4,
      watchlistLink: "https://manhwaclan.com/manga/bad-born-blood/"
    },
    {
      id: 6,
      title: "Solo Leveling: Ragnarok",
      image: "https://i.pinimg.com/1200x/2f/a8/ac/2fa8ac2e69f56a6dfcf5efad6f61f67d.jpg",
      rating: 4.6,
      watchlistLink: "https://manhwaclan.com/manga/Solo-Leveling-Ragnarok/"
    },
    {
      id: 7,
      title: "Demon God",
      image: "https://i.pinimg.com/736x/8d/9e/b9/8d9eb9fcef9bf91dd31273cda3d1d63b.jpg",
      rating: 4.1,
      watchlistLink: "https://manhwaclan.com/manga/demon-god/"
    },
  ],
} as const;
