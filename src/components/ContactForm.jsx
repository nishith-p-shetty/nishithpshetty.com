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

// server action
import { SendMail } from "./SendMail";

// react hook form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  //  form schema
  const formSchema = z.object({
    recipientName: z
      .string()
      .min(2, {
        message: "Name must be at least 3 characters.",
      })
      .max(20, {
        message: "Name must be less than 20 characters.",
      }),
    recipientEmail: z.string().email({ message: "Invalid email address" }),
    recipientMessage: z
      .string()
      .min(5, {
        message: "Message must be at least 5 characters.",
      })
      .max(200, {
        message: "Message must be less than 200 characters.",
      }),
  });

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipientName: "",
      recipientEmail: "",
      recipientMessage: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsSending(true);
    const response = await SendMail(data);
    console.log("response: " + response);

    if (response === "success") {
      //   toast({
      //     title: "Your message has been sent.",
      //     description: (
      //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //       </pre>
      //     ),
      //   });
    } else {
      //   toast({
      //     variant: "destructive",
      //     title: "Uh oh! Something went wrong.",
      //     description: "There was a problem with your request.",
      //   });
    }
    setIsSending(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="recipientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="relative flex items-center">
                <User size={20} className="mr-1" />
                Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="recipientEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="relative flex items-center">
                <MailIcon size={20} className="mr-1" />
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter your email." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="recipientMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="relative flex items-center">
                <MessageSquare size={20} className="mr-1" />
                Message
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {isSending ? (
          <Button disabled className="flex max-w-[166px] items-center gap-x-1">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="flex max-w-[166px] items-center gap-x-1"
          >
            Let&apos;s Connect
            <ArrowRightIcon size={20} className="ml-2 animate-ping" />
          </Button>
        )}
      </form>
    </Form>
  );
};
