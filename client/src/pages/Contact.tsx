import { useState } from 'react';
import { Helmet } from 'react-helmet';
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
import { FOOTER_INFO } from '@/lib/constants';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." })
});

const Contact = () => {
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
    <>
      <Helmet>
        <title>Contact | Miramar Food Hall</title>
        <meta name="description" content="Contact Miramar Food Hall in San Clemente, CA. Ask questions, provide feedback, or inquire about vendor and event opportunities." />
      </Helmet>
      
      <div className="pt-24 md:pt-20 bg-[#E8F1F8]">
        {/* Hero Banner */}
        <div className="relative">
          <div 
            className="h-[40vh] bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563897539633-7374c276c212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80')" }}
          >
            <div className="absolute inset-0 bg-[#0054AA] bg-opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white leading-tight">CONTACT US</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-[#E8F1F8]">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-6">
                Have questions about Miramar Food Hall? Interested in vendor opportunities? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
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
                            rows={6}
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
            
            {/* Contact Information & Social */}
            <div className="md:w-1/2">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Address</h3>
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#00A9DD] mt-1 mr-3"></i>
                      <div>
                        <p className="text-gray-700">
                          {FOOTER_INFO.address}
                        </p>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#0094D4] hover:text-[#0677BA] text-sm font-semibold mt-1 inline-block"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Phone</h3>
                    <div className="flex items-center">
                      <i className="fas fa-phone text-[#00A9DD] mr-3"></i>
                      <a href={`tel:${FOOTER_INFO.phone}`} className="text-gray-700 hover:text-[#0677BA]">
                        {FOOTER_INFO.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Email</h3>
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-[#00A9DD] mr-3"></i>
                      <a href={`mailto:${FOOTER_INFO.email}`} className="text-gray-700 hover:text-[#0677BA]">
                        {FOOTER_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-montserrat font-semibold text-[#0677BA] mb-2">Hours (Coming Soon)</h3>
                    <div className="flex items-start">
                      <i className="fas fa-clock text-[#00A9DD] mt-1 mr-3"></i>
                      <div className="space-y-1">
                        {FOOTER_INFO.hours.map((hour, index) => (
                          <p key={index} className="text-gray-700 flex justify-between">
                            <span className="mr-4">{hour.days}</span>
                            <span>{hour.time}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-montserrat font-semibold text-[#0677BA] mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {FOOTER_INFO.socialLinks.map(social => (
                      <a 
                        key={social.name}
                        href={social.url} 
                        className="w-10 h-10 bg-[#0094D4] rounded-full flex items-center justify-center text-white hover:bg-[#0677BA] transition-colors"
                        aria-label={social.name}
                      >
                        <i className={`fab fa-${social.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
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
              
              {/* Instagram Feed */}
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <InstagramFeed />
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8 my-12">
            <h2 className="text-3xl font-montserrat font-bold text-[#0054AA] mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-2">When is Miramar Food Hall opening?</h3>
                <p className="text-gray-700">
                  Miramar Food Hall is set to open in Summer 2025. Join our newsletter to stay updated on our exact opening date and upcoming events.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-2">How can I become a vendor at Miramar Food Hall?</h3>
                <p className="text-gray-700">
                  We're always looking for unique food concepts to join our community. Please contact us through our form with details about your food concept, and our vendor relations team will be in touch.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-2">Can I host a private event at Miramar Food Hall?</h3>
                <p className="text-gray-700">
                  Yes! Miramar Food Hall offers versatile spaces for private events of various sizes. Contact our events team for more information on availability, pricing, and custom packages.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-2">Is Miramar Food Hall family-friendly?</h3>
                <p className="text-gray-700">
                  Absolutely! We welcome guests of all ages and have designed our space to be accessible and enjoyable for families, including kid-friendly menu options at many of our vendors.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-montserrat font-bold text-[#0677BA] mb-2">Do you have job opportunities available?</h3>
                <p className="text-gray-700">
                  As we approach our opening date, we'll be posting job opportunities. Follow us on social media and subscribe to our newsletter to be the first to know about employment options.
                </p>
              </div>
            </div>
          </div>
          
          {/* Location Map */}
          <div className="rounded-lg overflow-hidden shadow-lg mb-12">
            <div className="h-96 bg-[#CADEEF] relative flex items-center justify-center">
              {/* This would typically be an actual Google Maps embed */}
              <div className="text-center p-6">
                <p className="text-lg text-[#0054AA]">Interactive Location Map</p>
                <p className="text-[#0677BA] mt-2">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
