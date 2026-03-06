import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    type: "education",
    title: "BBA (Business Administration)",
    place: " Currently Pursuing",
    period: "2023 – Present",
    description: "Studying management principles, business strategy, and organizational leadership.",
  },
  {
    type: "education",
    title: "Higher Secondary Certificate (HSC)",
    place: "Pallabi Govt. College , Mirpur-12 , Dhaka",
    period: "2021 – 2022",
    description: "Completed with focus on business studies and quantitative disciplines.",
  },
  {
    type: "education",
    title: "Secondary School Certificate (SSC)",
    place: "Rashid Adarsha High school , Mirpur-12 , Dhaka",
    period: "2019 – 2020",
    description: "Strong academic foundation with distinction in mathematics and science.",
  },
  {
    type: "work",
    title: "Freelance MERN Developer",
    place: "Self-employed",
    period: "2026",
    description: "Building full-stack web applications for clients across various industries.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Journey</p>
          <h2 className="section-heading">Experience & Education</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start mb-10 md:mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-2" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card p-5">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                      {item.type === "education" ? (
                        <GraduationCap className="h-4 w-4 text-primary" />
                      ) : (
                        <Briefcase className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-xs text-primary font-medium">{item.period}</span>
                    </div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.place}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
