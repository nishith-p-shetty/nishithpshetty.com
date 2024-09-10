// icon
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

//components
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="mb-6 grid pt-12 xl:mb-2 xl:h-[480px] xl:grid-cols-2">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="mb-8 max-w-md text-6xl font-bold tracking-[-2px] xl:text-[72px] xl:leading-[80px]">
              Let's Work Together
            </h1>
            <p className="-8 max-w-[400px] text-lg font-light text-muted-foreground">
              I am always looking for new opportunities to learn and grow. If
              you have a project in mind, or just want to say hi, feel free to
              get in touch.
            </p>
          </div>
          {/* Illustration */}
          <div className="bg-contact_illustration_light dark:bg-contact_illustration_dark hidden w-full bg-contain bg-top bg-no-repeat xl:flex"></div>
        </div>
        {/* info text & form */}
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          {/* info text */}
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>nishithpshetty@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>nishithpshetty@nishithpshetty.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Bengaluru, Karnataka</div>
            </div>
            {/* phone */}
            {/* <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 1234567890</div>
            </div> */}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
