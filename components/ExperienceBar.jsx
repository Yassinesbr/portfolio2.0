import { qualificationsData } from "@/constants";
import { getData } from "@/constants/helpers";
import { Briefcase } from "lucide-react";

const ExperienceBar = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex gap-x-4 items-center text-[22px] text-primary">
        <Briefcase size={28} />
        <h4 className="capitalize font-medium">
          {getData(qualificationsData, "experience").title}
        </h4>
      </div>
      <div className="flex flex-col gap-y-8">
        {getData(qualificationsData, "experience").data.map((item, index) => {
          const { company, qualification, years } = item;
          return (
            <div key={index} className="flex gap-x-8 group">
              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-1000"></div>
              </div>
              <div>
                <div className="font-semibold text-xl leading-none mb-2">
                  {company}
                </div>
                <div className="text-lg leading-none text-muted-foreground mb-4">
                  {qualification}
                </div>
                <div className="text-base font-medium">{years}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceBar;
