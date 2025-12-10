"use client";

import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try email directly.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-4 text-center fade-in-up ${
            isVisible ? "visible" : ""
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-muted-foreground text-center mb-12 max-w-2xl mx-auto fade-in-up ${
            isVisible ? "visible" : ""
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          I'm always open to discussing new opportunities, interesting projects,
          or potential collaborations. Feel free to reach out!
        </p>

        {/* Contact Form */}
        <Card
          className={`mb-8 p-6 fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>
            {status === "success" && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-600 dark:text-green-400 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-600 dark:text-red-400 text-sm">
                {errorMessage}
              </div>
            )}
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="w-full"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            className={`p-6 hover:shadow-lg transition-shadow scale-in ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:zafrir.dotan@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                zafrir.dotan@gmail.com
              </a>
            </div>
          </Card>

          <Card
            className={`p-6 hover:shadow-lg transition-shadow scale-in ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <a
                href="tel:0543516162"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                054 351 6162
              </a>
            </div>
          </Card>

          <Card
            className={`p-6 hover:shadow-lg transition-shadow scale-in ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="font-semibold">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/zafrir-dotan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                linkedin.com/in/zafrir-dotan
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
