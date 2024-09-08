import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Logo = ({ onLinkClick }) => {
  const { theme } = useTheme();
  return (
    <section>
      <Link href="/" onClick={onLinkClick}>
        {theme === "dark" ? (
          <Image
            src="/LogoWhite.png"
            width={54}
            height={54}
            priority={true}
            alt="Logo"
          />
        ) : (
          <Image
            src="/LogoBlack.png"
            width={54}
            height={54}
            priority={true}
            alt="Logo"
          />
        )}
      </Link>
    </section>
  );
};
