import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Digital_Life_Lessons from "@/assets/digital-life-lessons.jpeg";
import Import_Export_Platform from "@/assets/import-export-platform.jpeg";
import Gaming_Platform from "@/assets/gaming-platform.jpeg";
const projects = [
  {
    title: "Lessons Sharing Platform",
    description:
      "Digital Life Lessons is a full-stack web platform where users can share meaningful life experiences, learn from others, and grow together. It bridges the gap between fleeting thoughts and lasting legacy, allowing users to document personal growth, career insights, and emotional realizations in a structured, community-driven environment. The platform includes user dashboards, admin controls, analytics, featured lessons, and a modern responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Stripe"],
    image: Digital_Life_Lessons,
    live: "https://digital-life-lessons-562ea.web.app/",
    githubClient:
      "https://github.com/Muaj-Chowdhury/digital-life-lessons-client",
    githubServer:
      "https://github.com/Muaj-Chowdhury/digital-life-lessons-server",
  },
  {
    title: "Import Export Management System",
    description:
      "A modern full-stack web application designed to manage, monitor, and grow your import–export business seamlessly.The platform offers shipment tracking, product management, analytics, and a clean user experience with smooth animations. It’s built with React, Express, MongoDB, and Firebase, providing a scalable solution for businesses to optimize their operations and drive growth.",
    tech: ["React", "Express", "MongoDB", "Firebase"],
    image: Import_Export_Platform,
    live: "https://export-import-project.netlify.app/",
    githubClient: "https://github.com/Muaj-Chowdhury/Export-Import-Client",
    githubServer:
      "https://github.com/Muaj-Chowdhury/Export-Import-Project-Server",
  },
  {
    title: "Game Hub Project",
    description:
      "Game Hub is a React-based web application that allows users to explore games, view detailed game information, and manage their profiles with Firebase Authentication.The app ensures a smooth, secure, and interactive experience, built with modern React tools and Firebase backend integration.",
    tech: ["React", "Firebase", "Tailwind"],
    image: Gaming_Platform,
    live: "https://game-hub-project-by-muaj.netlify.app",
    githubClient: "https://github.com/Muaj-Chowdhury/game-hub-project",
  },
  // {
  //   title: "Portfolio CMS",
  //   description:
  //     "Custom content management system for creative professionals with dynamic themes and analytics.",
  //   tech: ["React", "Express", "MongoDB", "Cloudinary"],
  //   image: "/placeholder.svg",
  //   live: "#",
  //   github: "#",
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Projects
          </p>
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-subheading">
            Selected projects showcasing full-stack development and business
            solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              {/* Project Mockup Image */}
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Color strip */}
                <div className="h-1 w-12 rounded-full bg-primary mb-4 group-hover:w-20 transition-all duration-300" />

                <h3 className="font-heading font-semibold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full gap-1.5 text-xs"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3" /> Live Demo
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-full gap-1.5 text-xs"
                    asChild
                  >
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3 w-3" /> Client
                    </a>
                  </Button>
                  {project.githubServer && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full gap-1.5 text-xs"
                      asChild
                    >
                      <a
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3" /> Server
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
