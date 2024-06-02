"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Can't reach you out with this address sir !" }),
  message: z.string().min(10, { message: "Your message is too short" }),
});

function ContactMe() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description:
          "EmailJS environment variables are not properly configured.",
      });
      console.error("EmailJS environment variables are missing.");
      return;
    }

    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        () => {
          toast({
            description: "Your message has been sent.",
          });
          console.log("Email sent successfully!");
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
          console.log("Error sending email:", error);
        }
      );
    }
  }

  function handleReset() {
    form.reset();
  }

  return (
    <div className="px-12 rounded-2xl ">
      <h1 className="text-2xl pb-12 text-center">Contact me</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          ref={formRef}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email here..." {...field} />
                </FormControl>
                <FormDescription>
                  We&apos;ll never share your email with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  A beautiful message is needed.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button variant="destructive" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
export default ContactMe;
