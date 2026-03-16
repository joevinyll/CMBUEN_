import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="min-h-[90vh] flex items-center pt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
          Built for Growth
        </p>
        <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight text-foreground text-balance mb-8">
          We help businesses thrive in a changing world
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
          Strategic consulting and creative solutions that drive measurable results for ambitious companies.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
            Start a Project <ArrowRight size={16} />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-full font-medium text-sm hover:bg-secondary transition-colors">
            Our Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
