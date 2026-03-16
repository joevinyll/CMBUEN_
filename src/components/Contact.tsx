import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-28">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl tracking-tight text-foreground mb-6">
            Let's start a conversation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Ready to take the next step? Reach out and let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col gap-5">
            {[
              { icon: Mail, text: "hello@meridian.com" },
              { icon: Phone, text: "+1 (555) 000-0000" },
              { icon: MapPin, text: "123 Business Ave, Suite 100" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="bg-card border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition" />
          <input type="email" placeholder="Email Address" className="bg-card border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition" />
          <textarea rows={5} placeholder="Tell us about your project..." className="bg-card border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition resize-none" />
          <button type="submit" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity self-start">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
