// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import SectionHeading from "@/components/ui/section-heading";
// import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
// import { apiRequest } from "@/lib/queryClient";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
//   message: z.string().min(10, { message: "Message must be at least 10 characters." }),
// });

// type FormValues = z.infer<typeof formSchema>;

// export default function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();
  
//   const [leftRef, leftInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
  
//   const [rightRef, rightInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
  
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//   });
  
//   async function onSubmit(data: FormValues) {
//     setIsSubmitting(true);
    
//     try {
//       await apiRequest("POST", "/api/contact", data);
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       form.reset();
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Failed to send message",
//         description: "Please try again later or contact me directly via email.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <section id="contact" className="py-16 px-6">
//       <div className="container mx-auto">
//         <SectionHeading title="Get In Touch" />
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <motion.div 
//             ref={leftRef}
//             initial={{ opacity: 0, x: -20 }}
//             animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
//                   <Mail className="h-5 w-5" />
//                 </span>
//                 <div>
//                   <h4 className="font-medium mb-1">Email</h4>
//                   <p className="text-muted-foreground">vsabari146@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
//                   <Phone className="h-5 w-5" />
//                 </span>
//                 <div>
//                   <h4 className="font-medium mb-1">Phone</h4>
//                   <p className="text-muted-foreground">+91 7806819922</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
//                   <MapPin className="h-5 w-5" />
//                 </span>
//                 <div>
//                   <h4 className="font-medium mb-1">Location</h4>
//                   <p className="text-muted-foreground">Chidambaram, Tamil Nadu, India</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
//                   <Globe className="h-5 w-5" />
//                 </span>
//                 <div>
//                   <h4 className="font-medium mb-1">Social Profiles</h4>
//                   <div className="flex gap-4 mt-2">
//                     <a href="https://github.com/Sabarivasanc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
//                       <FaGithub size={20} />
//                     </a>
//                     <a href="https://www.linkedin.com/in/sabarivasan-c-a78267274/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
//                       <FaLinkedin size={20} />
//                     </a>
//                     <a href="https://leetcode.com/u/vsabari146/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
//                       <SiLeetcode size={20} />
//                     </a>
//                     <a href="https://www.geeksforgeeks.org/user/vsabara3hq/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
//                       <SiGeeksforgeeks size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             ref={rightRef}
//             initial={{ opacity: 0, x: 20 }}
//             animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Name</FormLabel>
//                       <FormControl>
//                         <Input 
//                           placeholder="Your name" 
//                           {...field} 
//                           className="bg-muted/5 border-muted/20"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Email</FormLabel>
//                       <FormControl>
//                         <Input 
//                           placeholder="Your email" 
//                           type="email" 
//                           {...field} 
//                           className="bg-muted/5 border-muted/20"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <FormField
//                   control={form.control}
//                   name="subject"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Subject</FormLabel>
//                       <FormControl>
//                         <Input 
//                           placeholder="Message subject" 
//                           {...field} 
//                           className="bg-muted/5 border-muted/20"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Message</FormLabel>
//                       <FormControl>
//                         <Textarea 
//                           placeholder="Your message" 
//                           rows={5} 
//                           {...field} 
//                           className="bg-muted/5 border-muted/20"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
//                   {isSubmitting ? (
//                     <span className="flex items-center">
//                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </span>
//                   ) : (
//                     <span className="flex items-center">
//                       <Send className="mr-2 h-4 w-4" />
//                       Send Message
//                     </span>
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SectionHeading from "@/components/ui/section-heading";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID
        {
          from_name: data.name || "No Name",
          to_name: "Sabarivasan C",
          from_email: data.email,
          to_email: "vsabari146@gmail.com", // Static recipient email
          subject: data.subject || "No Subject",
          message: data.message || "No message provided",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Public Key
      );

      console.log("✅ Email Sent Successfully:", response.status, response.text);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("❌ Email Sending Failed:", error);
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
      });
      // Log EmailJS configuration for debugging
      console.log("📌 EmailJS Service ID:", import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
      console.log("📌 EmailJS Template ID:", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
      console.log("📌 EmailJS Public Key:", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
      console.log("📌 EmailJS Service ID:", import.meta.env);
      
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto">
        <SectionHeading title="Get In Touch" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            ref={leftRef}
            initial={{ opacity: 0, x: -20 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">vsabari146@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 7806819922</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Chidambaram, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary p-3 bg-muted/10 rounded-lg mr-4">
                  <Globe className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-medium mb-1">Social Profiles</h4>
                  <div className="flex gap-4 mt-2">
                    <a href="https://github.com/Sabarivasanc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/sabarivasan-c-a78267274/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                    <a href="https://leetcode.com/u/vsabari146/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <SiLeetcode size={20} />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/vsabara3hq/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <SiGeeksforgeeks size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={rightRef}
            initial={{ opacity: 0, x: 20 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-muted/5 border-muted/20"
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          type="email" 
                          {...field} 
                          className="bg-muted/5 border-muted/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Message subject" 
                          {...field} 
                          className="bg-muted/5 border-muted/20"
                        />
                      </FormControl>
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
                          placeholder="Your message" 
                          rows={5} 
                          {...field} 
                          className="bg-muted/5 border-muted/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}