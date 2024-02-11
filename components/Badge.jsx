"use client";
import CountUp from "react-countup";
import Link from "next/link";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
  link = "/",
}) => {
  return (
    <Link href={link}>
      <div
        className={`badge ${containerStyles} hover:scale-105 transition-all cursor-pointer`}
      >
        <div className="text-3xl text-primary">{icon}</div>
        <div className="flex items-center gap-x-2">
          <div className="text-4xl leading-none font-bold text-primary">
            <CountUp end={endCountNum} delay={1} duration={4} />
            {endCountText}
          </div>
          <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
            {badgeText}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Badge;
