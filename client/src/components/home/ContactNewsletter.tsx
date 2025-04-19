import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InstagramFeed from "@/components/ui/InstagramFeed";
import { apiRequest } from "@/lib/queryClient";
import { ContactForm, NewsletterSubscription } from "@/lib/types";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." })
});

const ContactNewsletter = () => {
  const { toast } = useToast();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isSubscribeSubmitting, setIsSubscribeSubmitting] = useState(false);

  // Contact form setup
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Newsletter form setup
  const newsletterForm = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ""
    }
  });

  // Contact form submission
  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      setIsFormSubmitting(true);
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
        variant: "default",
      });
      contactForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsFormSubmitting(false);
    }
  });

  // Newsletter subscription
  const newsletterMutation = useMutation({
    mutationFn: async (data: NewsletterSubscription) => {
      setIsSubscribeSubmitting(true);
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });
      newsletterForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubscribeSubmitting(false);
    }
  });

  // Handle contact form submission
  const onContactSubmit = (values: z.infer<typeof contactFormSchema>) => {
    contactMutation.mutate(values);
  };

  // Handle newsletter subscription
  const onNewsletterSubmit = (values: z.infer<typeof newsletterSchema>) => {
    newsletterMutation.mutate(values);
  };

  return (
    <section className="py-16 bg-[#E8F1F8]" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">Contact Us</h2>
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                <FormField
                  control={contactForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-semibold text-[#0054AA]">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="px-4 py-2 border border-[#CADEEF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0094D4]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-semibold text-[#0054AA]">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          type="email" 
                          {...field} 
                          className="px-4 py-2 border border-[#CADEEF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0094D4]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-semibold text-[#0054AA]">Subject</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="px-4 py-2 border border-[#CADEEF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0094D4]">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="vendor">Vendor Information</SelectItem>
                          <SelectItem value="events">Events</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat font-semibold text-[#0054AA]">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          {...field} 
                          className="px-4 py-2 border border-[#CADEEF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0094D4]"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isFormSubmitting}
                  className="w-full bg-[#0677BA] hover:bg-[#0054AA] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  {isFormSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Newsletter & Social */}
          <div className="md:w-1/2">
            {/* Newsletter Signup */}
            <div className="bg-[#0054AA] rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-3xl font-montserrat font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-white opacity-90 mb-6">
                Subscribe to our newsletter to get the latest updates on vendors, events, and special offers.
              </p>
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="flex flex-col sm:flex-row gap-3">
                  <FormField
                    control={newsletterForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email" 
                            {...field} 
                            className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0094D4] w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubscribeSubmitting}
                    className="bg-[#00A9DD] hover:bg-[#0094D4] text-white font-montserrat font-semibold py-3 px-6 rounded-md transition-colors whitespace-nowrap"
                  >
                    {isSubscribeSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Social Media & Instagram Feed */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-montserrat font-bold text-[#0054AA] mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="w-12 h-12 bg-[#0094D4] rounded-full flex items-center justify-center text-white hover:bg-[#0677BA] transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-[#0094D4] rounded-full flex items-center justify-center text-white hover:bg-[#0677BA] transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-[#0094D4] rounded-full flex items-center justify-center text-white hover:bg-[#0677BA] transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-[#0094D4] rounded-full flex items-center justify-center text-white hover:bg-[#0677BA] transition-colors">
                  <i className="fab fa-yelp text-xl"></i>
                </a>
              </div>
              
              <InstagramFeed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNewsletter;
