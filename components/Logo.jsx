import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Link href="/">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={54}
        height={54}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;
