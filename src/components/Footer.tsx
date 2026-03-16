const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-[var(--font-display)] text-lg text-foreground">
        Meridian<span className="text-accent">.</span>
      </p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Meridian. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
