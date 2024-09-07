import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Link href="/">
        {theme === "dark" ? (
          <Image
            src="/LogoWhite.png"
            width={54}
            height={54}
            priority
            alt="Logo"
          />
        ) : (
          <Image
            src="/LogoBlack.png"
            width={54}
            height={54}
            priority
            alt="Logo"
          />
        )}
      </Link>
    </div>
  );
};
