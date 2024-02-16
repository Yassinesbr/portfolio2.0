import { infoData } from "@/constants";
import { yearsOfExperience } from "./Hero";

const PersonalInfos = () => {
  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-4">Versatile Frontend Developer</h3>
      <p className="subtitle max-w-xl mx-auto xl:mx-0">
        I am a Front End Developer with {yearsOfExperience} years of experience
        in web development. I am passionate about web technologies and I am
        always looking to learn new things. I am a hard worker, a team player
        and I am always looking to improve myself.
      </p>
      <div className="grid xl:grid-cols-2 gap-4 mb-12">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-4 mx-auto xl:mx-0 "
          >
            <div className="text-primary">{item.icon}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="text-primary">Language skill</div>
        <div className="border-b border-border"></div>
        <div>English, French, Arabic</div>
      </div>
    </div>
  );
};

export default PersonalInfos;
