// components
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] dark:text-muted-foreground text-[20px] hover:text-muted-foreground dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Nishith P Shetty {new Date().getFullYear()}. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
