import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Problem-solving approach with analytical mindset",
  "Scalable architecture thinking",
  "Clean, maintainable code principles",
  "Performance-first development mindset",
  "Business-aware technical decisions",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="section-heading">Developer with a Business Edge</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm Muaaj Chowdhury, a Full Stack MERN Developer with a strong foundation in Business Administration.
              This unique combination allows me to bridge the gap between technical implementation
              and business strategy, delivering solutions that are not just functional but commercially viable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise across MongoDB, Express.js, React, and Node.js and Next.js, I build end-to-end
              web applications that prioritize performance, scalability, and user experience.
              My management background ensures I approach every project with strategic thinking
              and clear communication.
            </p>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-card/60 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
