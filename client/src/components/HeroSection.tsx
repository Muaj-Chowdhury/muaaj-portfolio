import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const imgX = useTransform(springX, [-1, 1], [-12, 12]);
  const imgY = useTransform(springY, [-1, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const headingWords = "Hi, I am MUAAJ".split(" ");
  const subHeadingWords = "FullStack MERN Developer".split(" ");

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-primary/8 blur-3xl" />

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-primary font-medium mb-4 text-sm tracking-widest uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            {/* Heading 1: Hi, I am MUAAJ */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-2 leading-[1.1]"
              style={{ perspective: "600px" }}
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-3"
                >
                  {/* Gradient applied to 'MUAAJ' (Index 3) */}
                  {i === 3 ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>
            {/* Heading 2: FullStack MERN Developer */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6 leading-[1.1] opacity-80"
              style={{ perspective: "600px" }}
            >
              {subHeadingWords.map((word, i) => (
                <motion.span
                  key={i}
                  // Added + 4 to the custom index so this animation starts after Heading 1
                  custom={i + 4}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-3"
                >
                  {/* Gradient applied to 'MERN' (Index 1) */}
                  {word === "MERN" ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed"
            >
              Building scalable web applications with business-driven solutions.
              Combining technical expertise with management acumen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-full gap-2"
                onClick={() => scrollTo("#projects")}
              >
                View Projects
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2"
                onClick={() => scrollTo("#contact")}
              >
                Contact Me
                <Mail className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div style={{ x: imgX, y: imgY }} className="relative">
              <div className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-2 border-border/50 shadow-2xl shadow-primary/10 bg-muted">
                <img
                  src={heroImg}
                  alt="Professional portrait"
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                  loading="eager"
                  style={{ filter: "contrast(1.05)" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-sm text-center leading-tight">
                  1
                  <br />
                  Year
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
