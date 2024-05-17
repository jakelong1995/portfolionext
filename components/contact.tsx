import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-28 max-w-3xl scroll-mt-28 px-4 md:px-6 space-y-6"
    >
      <div className="text-center">
        <SectionHeading>Get in touch</SectionHeading>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Have a question or want to work together? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="bg-gray-900"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              className="bg-gray-900"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            rows={5}
            className="bg-gray-900"
          />
        </div>
        <Button className="w-full rounded-full h-12" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
}
