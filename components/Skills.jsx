import { skillData } from "@/constants";
import { getData } from "@/constants/helpers";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-8">Tools I Use</h3>
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">Skills</h4>
        <div className="border-b border-border mb-4"></div>
        <div>
          {getData(skillData, "skills").data.map((item, index) => {
            const { name } = item;
            return (
              <div
                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                key={index}
              >
                <div className="font-medium">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
        <div className="border-b border-border mb-4"></div>
        <div className="flex gap-x-8 justify-center xl:justify-start">
          {getData(skillData, "tools").data.map((item, index) => {
            const { imgPath } = item;
            return (
              <div key={index}>
                <Image src={imgPath} alt="tool" width={48} height={48} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
