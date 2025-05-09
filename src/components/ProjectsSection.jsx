import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ITUM Restaurant Website",
    description:
      "Built a responsive restaurant website using HTML, CSS, and JavaScript, featuring smooth navigation and a clean, user-friendly design.",
    image: "/projects/project 01.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://11saran.github.io/ITUM-Reasturent-Website/",
    githubUrl: "https://github.com/11saran/ITUM-Reasturent-Website",
  },
  {
    id: 2,
    title: "Grocery-mart Website",
    description:
      "The design features a grocery-themed landing page, and the implementation ensures compatibility with various screen sizes.",
    image: "/projects/project 02.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://grocery-mart-pi.vercel.app/",
    githubUrl: "https://github.com/11saran/grocery-mart",
  },
  {
    id: 3,
    title: "Fitness website",
    description:
      "Developed a responsive one page fitness website using React.js with smooth navigation and modern UI design.",
    image: "/projects/project 03.jpeg",
    tags: ["React.js", "CSS"],
    demoUrl: "https://fitness-website-red.vercel.app/",
    githubUrl: "https://github.com/11saran/FitnessWebsite",
  },
  {
    id: 4,
    title: "My Portfolio website",
    description:
      "Created a personal portfolio website to showcase my projects, skills, and development experience with a modern, responsive design.",
    image: "/projects/project 04.png",
    tags: ["React.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/11saran/my_portfolio",
  },
  {
    id: 5,
    title: "Home Service website",
    description:
      "Developed a responsive Home Service Booking platform using Next.js, featuring real-time alerts and an admin-managed dashboard.",
    image: "/projects/project 05.png",
    tags: ["Next.js", "Tailwind CSS"],
    demoUrl:
      "https://home-service-d1s5-git-main-sarans-projects-334895e6.vercel.app/",
    githubUrl: "https://github.com/11saran/home_service",
  },
  {
    id: 6,
    title: "Blood Connect Mobile App",
    description:
      "Developed a cross-platform mobile application using React Native. The app connects blood donors and recipients.",
    image: "/projects/project 06.jpg",
    tags: ["ReactNative","Node.js", "Express.js", "MySql"],
    demoUrl: "#",
    githubUrl: "https://github.com/11saran/Blood_Connect",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/11saran"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
