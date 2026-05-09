import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Languages } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Flutter } from "@/components/ui/svgs/flutter";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Guntur Maulana",
  initials: "GM",
  url: "https://gunturmaulana.xyz",
  location: "Yogyakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "Full-Stack Developer with 2+ years of hands-on experience building and shipping production-grade web applications across e-commerce, enterprise resource planning, and SaaS platforms. Proficient in Go, Java (Spring Boot), React.js, Next.js, Node.js, Laravel, and Flutter, with strong fundamentals in RESTful API design, relational database architecture, and containerized deployment. Track record of delivering complete end-to-end solutions independently and within Agile/Scrum teams — from requirements analysis and system architecture through CI/CD deployment on Linux infrastructure.",
  summary:
    "I'm Guntur, a Fullstack Developer based in Yogyakarta. I build production systems — not side projects. Over the past two years I've shipped a video-based hiring platform with resumable AWS S3 uploads, an e-commerce system for an FMCG brand that's live and transacting, a real-time sales dashboard tracking field agents across multiple branches, and a POS rebuilt from scratch that a distributor runs daily. My stack leans on Go and React — I handle everything from API design and database architecture to deployment on Linux servers with Docker and Nginx. I've worked across startups, enterprise groups, and long-term freelance contracts simultaneously. If you need someone who can take a business requirement from whiteboard to production without hand-holding, let's talk.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Flutter", icon: Flutter },
    { name: "Laravel", icon: Laravel },

    // { name: "Kubernetes", icon: Kubernetes },
    // { name: "Java", icon: Java },
    // { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gunturmaulanaputraprojo@gmail.com",
    tel: "+6281392854911",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/gunturmaulanap",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gunturmaulanap/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://www.x.com/@gunturmaulana_p",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Thread: {
        name: "Thread",
        url: "https://www.thread.net/@gunturmaulana_p",
        icon: Icons.thread,
        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/6281392854911",
        icon: Icons.whatsapp,
        navbar: true,
      },

      // Youtube: {
      //   name: "Youtube",
      //   url: "https://www.youtube.com/@jigeumtur",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:gunturmaulanaputraprojo@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
    {
      company: "Flut",
      badges: [],
      href: "https://flutapp.com",
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/flut.png",
      start: "November 2025",
      end: "Present",
      description:
        "Built the backend for FlutApp — a video-first hiring platform — using Go and Gin. My work covered REST API development, JWT authentication, payment gateway integration, and a resumable multipart upload system to AWS S3 that handles video files over 1GB without restarting on connection drops.",
    },
    {
      company: "Adibayu Group",
      href: "https://adibayu.com/",
      badges: [],
      location: "Sleman, Indonesia",
      title: "Fullstack Developer & Mobile Developer",
      logoUrl: "/adibayu.svg",
      logoUrlDark: "/adibayu-dark.svg",
      start: "December 2025",
      end: "Present",
      description:
        "Built and shipped multiple internal systems at Adibayu Group: an ATS for recruitment, a Kanban-based project management tool, a sales dashboard tracking field agents and branch performance, and the official company profile site (adibayu.com). Also handled Docker-based deployment and CI/CD across all services.",
    },
    {
      company: "LPP Algo Nusantara",
      href: "https://lpp.co.id",
      badges: [],
      location: "Yogykarta, Indonesia",
      title: "Software Engineer",
      logoUrl: "/lpp.svg",
      start: "November 2025",
      end: "Desember 2025",
      description:
        "Built educational form management and internal content tools using Laravel Livewire, and consulted on resolving workflow issues in their existing digital systems.",
    },
    {
      company: "GMEDIA",
      href: "https://li.me/",
      badges: [],
      location: "Sleman, Indonesia",
      title: "Software Engineer",
      logoUrl: "/gmedia.svg",
      start: "June 2025",
      end: "Agust 2025",
      description:
        "Built two systems during my internship: a real-time queue management system using Golang and WebSocket, and MASPOS — a lightweight POS for SMEs using Node.js, Express, and Vue.js. Worked in a Scrum team with sprint cycles and regular code reviews.",
    },
    {
      company: "Azhar Material",
      href: "https://azharmaterial.com/",
      badges: [],
      location: "Cilacap, Indonesia",
      title: "Information Technology Consultant",
      logoUrl: "/azhar.svg",
      start: "September 2023",
      end: "July 2025",
      description:
        "Long-term freelance contract building and maintaining a POS system for a building materials distributor. Started with Laravel, then rebuilt the whole thing in Go with a React frontend — now live at azharmaterial.com with complex flows covering delivery, returns, debt tracking, and customer balances.",
    },
  ],
  education: [
    // {
    //   school: "Buildspace",
    //   href: "https://buildspace.so",
    //   degree: "s3, s4, sf1, s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "2023",
    //   end: "2024",
    // },
    {
      school: "Islamic University of Indonesia",
      href: "https://www.uii.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/uii-logo.webp",
      start: "2021",
      end: "2025",
    },
    {
      school: "Al Irsyad Islamiyyah Purwokerto",
      href: "https://www.alirsyad.or.id/",
      degree: "Senior High School",
      logoUrl: "/alirsyad.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Flut Apps - Hiring Job Platform",
      href: "https://flutapp.com",
      dates: "November 2025 - Present",
      active: true,
      location: "Jakarta, Indonesia",
      description:
        "A video-first job hiring platform where candidates apply with recorded videos instead of traditional resumes. I built the backend in Go (Gin) — REST API endpoints, JWT auth, payment gateway integration, and a resumable multipart upload to AWS S3 that handles 1GB+ video files without losing progress on connection drops.",
      technologies: [
        "Next.js",
        "Prisma",
        "React",
        "TypeScript",
        "Flutter",
        "Go",
        "Gin",
        "Gorm",
        "Socket.io",
        "AWS S3",
        "Redis",
        "Docker",
        "Payment Gateway API",
      ],
      links: [
        {
          type: "Website",
          href: "https://flutapp.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/company/flut-technology/",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/projects/flutapp.png",
      video: "",
    },
    {
      title: "Roconal E-Commerce Platform",
      href: "https://roconal.com",
      dates: "January 2026 - Present",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "A live e-commerce platform for Aksamala's health product brands including Vitabumin. I worked as the fullstack engineer — Go powers the backend (auth, orders, transactions) and React handles the storefront. The platform is live and actively transacting at roconal.com.",
      technologies: [
        "Laravel",
        "MySQL",
        "Socket.io",
        "Redis",
        "Docker",
        "Payment Gateway API",
      ],
      links: [
        {
          type: "Website",
          href: "https://roconal.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/roconal.png",
      video: "",
    },

    {
      title: "Adibayu Group Company Profile",
      href: "https://adibayu.com",
      dates: "January 2026 - April 2026",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "Official company profile for Adibayu Group, a multi-subsidiary holding company. Built with Next.js and a Node.js/Express CMS backend so the team can update content without touching code. Live at adibayu.com.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "MySQL",
        "Prisma",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://adibayu.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/company/adibayu-group/",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/projects/adibayu.png",
      video: "",
    },
    {
      title: "Tiasa Solution",
      href: "https://tiasasolution.com",
      dates: "July 2023 - Present",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "A software house I co-founded that builds custom web and mobile products for local businesses — from requirements to deployment. We've delivered e-commerce platforms, management systems, and company profiles for clients across different industries.",
      technologies: ["Next.js", "Prisma", "Supabase", "PostgreSQL", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://tiasasolution.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/tiasa.png",
      video: "",
    },
    {
      title: "Mosque Management System",
      href: undefined,
      dates: "October 2025 - Januari 2026",
      active: true,
      location: "Riau, Indonesia",
      description:
        "A management platform for a mosque community in Riau that replaced spreadsheets and WhatsApp group coordination. Covers congregation attendance, event scheduling, TPA (Islamic school) management, and ustaz schedules — built fullstack with Next.js and a Laravel REST API backend.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Zod",
        "Shadcn UI",
        "Prisma",
        "TailwindCSS",
        "Laravel",
        "MySQL",
        "Restul API",
      ],
      links: [],
      image: "/projects/mosque-manager.png",
      video: "",
    },
    {
      title: "Aksamala Verification",
      href: undefined,
      dates: "October 2025 - Januari 2026",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "A product authenticity system for Aksamala's brands (Vitabumin, etc.). Staff scan barcodes on product labels to verify they're genuine. The system generates thousands of unique codes in bulk and exports them to Excel in the background using Laravel Queue — so the UI stays responsive while heavy jobs run.",
      technologies: [
        "Laravel",
        "Livewire",
        "Laravel Queue",
        "MySQL",
        "TailwindCSS",
        "FullCalendar",
      ],
      links: [],
      image: "/projects/aksamala-verification.jpeg",
      video: "",
    },
    {
      title: "Sales Analytics Dashboard",
      href: undefined,
      dates: "February 2026 - April 2026",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "An internal dashboard for Adibayu's management team to monitor sales across online and offline channels. Tracks field agent activity, branch-level attendance, and ad spend vs. revenue in one view. Built with Go on the backend and a React dashboard with charts — helps management make decisions without digging through spreadsheets.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Chart.js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Recharts",
      ],
      links: [],
      image: "/projects/sales-adibayu.png",
      video: "",
    },
    {
      title: "Adibayu Project Management System",
      href: undefined,
      dates: "December 2025 - January 2026",
      active: true,
      location: "Sleman, Yogyakarta",
      description:
        "An internal task management tool for Adibayu's team with Kanban boards, daily task tracking, and automated productivity reports. Built with Go on the backend — gives managers a clear view of who's working on what without the usual status meeting overhead.",
      technologies: ["Go", "React.js", "PostgreSQL", "Docker"],
      links: [],
      image: "/projects/pm-adibayu.png",
      video: "",
    },
    {
      title: "Azhar Material Digital Platform",
      href: "https://azharmaterial.com",
      dates: "July 2023 - October 2025",
      active: true,
      location: "Cilacap, Indonesia",
      description:
        "A product catalog website for Azhar Material, a building materials distributor in Cilacap. Customers can browse products with specs and pricing without calling the store. Built with Next.js — currently getting an integrated e-commerce module added on top.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma",
        "Framer Motion",
      ],
      links: [],
      image: "/projects/azhar.png",
      video: "",
    },
    {
      title: "Material Distribution POS System",
      href: undefined,
      dates: "July 2023 - October 2025",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "The POS system running Azhar Material's daily operations at azharmaterial.com. Handles sales transactions, delivery management, return processing, customer debt tracking, and thermal receipt printing. Originally built in Laravel, then fully rebuilt in Go with a React frontend for better performance and maintainability.",
      technologies: [
        "Go",
        "React",
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "Thermal Printer API",
      ],
      links: [],
      image: "/projects/pos.png",
      video: "",
    },

    {
      title: "Roconal E-Commerce Platform V2 - On Progress",
      href: "https://roconal.com",
      dates: "August 2023 - December 2024",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "The next version of Roconal currently in development — adding warehouse sync, shipping cost calculation, promo and discount system, and a full CMS for the marketing team to manage content independently. Built with Go (Gin) backend and React frontend.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Go",
        "Gin",
        "Socket.io",
        "Redis",
        "Docker",
        "Payment Gateway API",
        "Shipping API",
      ],
      links: [],
      image: "/projects/roconal-v2.png",
      video: "",
    },
    {
      title: "Professional Developer Portfolio",
      href: undefined,
      dates: "March 2024 - April 2024",
      active: true,
      location: "Yogyakarta, Indonesia",
      description:
        "This site. Built with Next.js, Framer Motion for animations, Shadcn UI for components, and MDX for the blog. Designed to be clean, fast, and easy to update.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Shadcn UI",
        "MDX",
      ],
      links: [],
      image: "/projects/professional-portfolio.png",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
