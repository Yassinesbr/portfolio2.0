"use client";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "/",
    icon: <RiLinkedinFill />,
    text: "LinkedIn",
  },
  {
    path: "/",
    icon: <RiGithubFill />,
    text: "GitHub",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={`${iconStyles}`} aria-label={icon.text}>
              {icon.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
