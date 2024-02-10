import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill alt="Yassine Essebbar" />
    </div>
  );
};

export default DevImg;
