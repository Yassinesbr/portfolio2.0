import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfos from "./PersonalInfos";
import Skills from "./Skills";
import Qualifications from "./Qualifications";

const ProfileTabs = () => {
  return (
    <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
      <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
        Info
      </TabsTrigger>
      <TabsTrigger className="w-[162px] xl:w-auto" value="qualification">
        Qualifications
      </TabsTrigger>
      <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
        Skills
      </TabsTrigger>
    </TabsList>
  );
};

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
              <ProfileTabs />
              <div className="text-xl mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <PersonalInfos />
                </TabsContent>
                <TabsContent value="qualification">
                  <Qualifications />
                </TabsContent>
                <TabsContent value="skills">
                  <Skills />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
