import { qualificationsData } from "@/constants";
import { getData } from "@/constants/helpers";
import { GraduationCap } from "lucide-react";

const EducationBar = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex gap-x-4 items-center text-[22px] text-primary">
        <GraduationCap size={28} />
        <h4 className="capitalize font-medium">
          {getData(qualificationsData, "education").title}
        </h4>
      </div>
      <div className="flex flex-col gap-y-8">
        {getData(qualificationsData, "education").data.map((item, index) => {
          const { university, qualification, years } = item;
          return (
            <div key={index} className="flex gap-x-8 group">
              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-1000"></div>
              </div>
              <div>
                <div className="font-semibold text-xl leading-none mb-2">
                  {university}
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

export default EducationBar;
