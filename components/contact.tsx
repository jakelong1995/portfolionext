"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const { toast } = useToast();

  const handleSubmit = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error,
      });
      return;
    }

    toast({
      variant: "default",
      title: "Success",
      description: "Email sent successfully!",
    });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 max-w-3xl scroll-mt-28 px-4 md:px-6 space-y-6"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="text-center">
        <SectionHeading>Get in touch</SectionHeading>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Have a question or want to work together? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          await handleSubmit(formData);
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              className="dark:bg-gray-900"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              className="dark:bg-gray-900"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="dark:bg-gray-900"
          />
        </div>
        <Button className="w-full rounded-full h-12" type="submit">
          Submit
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </motion.section>
  );
}
