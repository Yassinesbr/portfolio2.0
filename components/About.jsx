import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
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

const qualificationsData = [
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
        qualification: "Bachelor's degree in Computer Science",
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

const skillData = [
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
        imgPath: "/about/react.svg",
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

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="second-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              imgSrc="/hero/developer.png"
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-xl mt-12 xl:mt-8">
                <TabsContent value="personal">Personal Infos</TabsContent>
                <TabsContent value="qualification">
                  Qualifications Infos
                </TabsContent>
                <TabsContent value="skills"> Skills Infos</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
