import EducationBar from "./EducationBar";
import ExperienceBar from "./ExperienceBar";

const Qualifications = () => {
  return (
    <div>
      <h3 className="h3 mb-3 text-center xl:text-left">Journey</h3>
      <div className="grid md:grid-cols-2 gap-y-8">
        <ExperienceBar />
        <EducationBar />
      </div>
    </div>
  );
};

export default Qualifications;
