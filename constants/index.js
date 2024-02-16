import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";

export const infoData = [
  {
    icon: <User2 size={20} />,
    title: "Yassine Essebbar",
  },
  {
    icon: <PhoneCall size={20} />,
    title: "+212 6 20 78 72 12",
  },
  {
    icon: <MailIcon size={20} />,
    title: "essebbar.yassine@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    title: "Born on 25 August 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Master's degree in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    title: "Rabat - Morocco",
  },
];

export const qualificationsData = [
  {
    title: "education",
    data: [
      {
        university: "Faculty of Sciences, Rabat",
        qualification: "Master's degree in Computer Science",
        years: "2020 - 2022",
      },
      {
        university: "Faculty of Sciences, Rabat",
        qualification: "Licentiate in Computer Science",
        years: "2015 - 2019",
      },
      {
        university: "High School, Sale",
        qualification: "Bac Mathematical Sciences A",
        years: "2015",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "SQLI",
        qualification:
          "Front End Design and Development EngineerFront End Developer",
        years: "2024 - Present",
      },
      {
        company: "Alphorm",
        qualification: "Front End Developer",
        years: "2020 - 2024",
      },
      {
        company: "TechnoRobot",
        qualification: "Robotics trainer",
        years: "2019 - 2020",
      },
    ],
  },
];

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
