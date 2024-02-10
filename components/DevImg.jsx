import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill={true} priority alt="Yassine Essebbar" />
    </div>
  );
};

export default DevImg;
