import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Link href="/" aria-label="Home">
      <Image src={"/logo.svg"} alt="Logo" width={54} height={54} priority />
    </Link>
  );
};

export default Logo;
