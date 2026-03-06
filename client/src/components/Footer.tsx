const Footer = () => {
  return (
    <footer className="border-t border-border/50 relative bg-background">
      {/* Subtle top border gradient as requested in your master prompt */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          {/* Your Name as the primary footer brand */}
          <h2 className="text-xl font-heading font-bold tracking-tight text-foreground">
            MUAAJ <span className="text-primary text-sm font-medium ml-1">.MERN</span>
          </h2>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MUAAJ. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm font-medium text-foreground/80">
            Building scalable business-driven solutions.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & Built with <span className="text-primary">React</span> & <span className="text-primary">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
