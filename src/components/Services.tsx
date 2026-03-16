import { TrendingUp, Lightbulb, Users, BarChart3 } from "lucide-react";

const services = [
  { icon: TrendingUp, title: "Strategy & Growth", desc: "Data-driven strategies that accelerate your business trajectory and unlock new opportunities." },
  { icon: Lightbulb, title: "Innovation", desc: "Creative problem-solving and fresh perspectives to keep you ahead of the competition." },
  { icon: Users, title: "Team Building", desc: "Building high-performance teams aligned with your vision and company culture." },
  { icon: BarChart3, title: "Analytics", desc: "Deep insights and actionable intelligence to inform every business decision." },
];

const Services = () => (
  <section id="services" className="py-28">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">What We Do</p>
        <h2 className="text-3xl md:text-5xl tracking-tight text-foreground mb-6">Services built around your needs</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We combine deep expertise with practical execution to deliver results that matter.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <s.icon size={22} className="text-accent" />
            </div>
            <h3 className="text-xl mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
