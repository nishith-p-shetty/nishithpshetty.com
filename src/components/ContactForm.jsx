"use client";

// components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// icon
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Loader2,
} from "lucide-react";

export const ContactForm = () => {
  return (
    <form className="mt-6 flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="recipientName"
          name="recipientName"
          placeholder="Name"
        />
        <User size={20} className="absolute right-6" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="recipientEmail"
          name="recipientEmail"
          placeholder="Email"
        />
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message"
          id="recipientMessage"
          name="recipientMessage"
        />
        <MessageSquare size={20} className="absolute right-6 top-4" />
      </div>
      <Button className="flex max-w-[166px] items-center gap-x-1">
        Let&apos;s Connect
        <ArrowRightIcon size={20} className="ml-2" />
      </Button>
      <Button disabled className="flex max-w-[166px] items-center gap-x-1">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Please wait
      </Button>
    </form>
  );
};
