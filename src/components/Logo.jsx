import Image from "next/image";
import Link from "next/link";

export const Logo = ({ onLinkClick }) => {
  return (
    <section>
      <Link href="/" onClick={onLinkClick}>
        <div className="hidden dark:flex">
          <Image
            src="/LogoWhite.png"
            width={54}
            height={54}
            priority={true}
            alt="Logo"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/LogoBlack.png"
            width={54}
            height={54}
            priority={true}
            alt="Logo"
          />
        </div>
      </Link>
    </section>
  );
};
