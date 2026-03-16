const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
];

const About = () => (
  <section id="about" className="py-28 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">About Us</p>
          <h2 className="text-3xl md:text-5xl tracking-tight text-foreground mb-6">
            A partner you can trust
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Founded with the belief that every business deserves world-class guidance, Meridian has grown into a trusted partner for companies across industries.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team of seasoned professionals brings decades of combined experience in strategy, operations, and innovation. We don't just advise — we roll up our sleeves and work alongside you.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-background rounded-2xl p-8 border border-border">
              <p className="text-4xl md:text-5xl font-[var(--font-display)] text-accent mb-2">{s.value}</p>
              <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
