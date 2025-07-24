"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, Phone, Send, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gradient-card relative">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            I'm currently looking for Intern opportunities. If you have a
            position that matches my skills, or if you just want to say hi, feel
            free to reach out!
          </p>

          <Card className="bg-gradient-card border border-gray-700/50 mb-10 hover:border-gray-600 transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center justify-center md:justify-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700">
                    <Mail size={20} className="text-gray-300" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-medium text-gray-400">Email</h3>
                    <Link
                      href="mailto:shyamkaruparthi@gmail.com"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      shyamkaruparthi@gmail.com
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center md:justify-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700">
                    <Phone size={20} className="text-gray-300" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                    <Link
                      href="tel:+918332929387"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      +91 8332929387
                    </Link>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10"
          >
            <Card className="bg-gradient-card border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-white mb-6 text-left">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                className="bg-gray-800/50 border-gray-700 focus:border-primary" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your email" 
                                className="bg-gray-800/50 border-gray-700 focus:border-primary" 
                                type="email" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="bg-gray-800/50 border-gray-700 focus:border-primary resize-none min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto rounded-full bg-gray-700 hover:bg-gray-600 text-gray-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full group"
                  asChild
                >
                  <Link
                    href="https://github.com/SVPraveen1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      size={18}
                      className="mr-2 group-hover:text-primary transition-colors"
                    />
                    <span className="group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full group"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/ksvpraveen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={18}
                      className="mr-2 group-hover:text-primary transition-colors"
                    />
                    <span className="group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gray-700 hover:bg-gray-600 text-gray-100"
                  asChild
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
