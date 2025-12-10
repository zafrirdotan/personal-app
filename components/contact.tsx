"use client";

import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.2);

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
