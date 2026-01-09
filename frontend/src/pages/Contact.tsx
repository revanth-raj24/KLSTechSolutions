import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { getContactData } from "@/services/contactService";
import type { ContactData } from "@/services/contactService";
import { contactInfo, contactLinks } from "@/config/contact";

const Contact = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [contactLoading, setContactLoading] = useState(true);
  const [contactError, setContactError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch contact page data (placeholder GET only, no POST)
    const fetchContactData = async () => {
      try {
        setContactLoading(true);
        setContactError(null);
        const data = await getContactData();
        setContactData(data);
      } catch (error) {
        // Fail gracefully - don't break UI rendering
        setContactError(error instanceof Error ? error.message : 'Failed to fetch contact data');
        console.error('Contact data fetch failed:', error);
      } finally {
        setContactLoading(false);
      }
    };

    fetchContactData();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <img 
                src="/kls-logo-nobg.png" 
                alt="KLS Solutions Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h1 className="heading-display text-foreground mb-6">
              Contact Us
            </h1>
            <p className="body-large">
              Have a question or want to discuss a potential project? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">info@klstech.solutions</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Remote-first organization</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl border border-border bg-card">
                <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 1-2 business days. For urgent matters, 
                  please indicate so in your message subject.
                </p>
                {/* Backend status indicator (non-intrusive) */}
                {contactData && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      {contactData.message}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <SectionHeader
                  title="Send us a Message"
                  description="Fill out the form below and we'll get back to you as soon as possible."
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Prefer a Direct Conversation?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            If you'd like to schedule a call to discuss your project in detail, 
            mention it in your message and we'll coordinate a time that works.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
