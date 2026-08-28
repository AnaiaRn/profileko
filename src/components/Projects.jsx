import Labo from "../assets/labo.png"
import Access from "../assets/access.png"
import Budget from "../assets/budget.png"
import Port from "../assets/port.png"
import Port1 from "../assets/port1.png"
import Uplife from "../assets/uplife.png"
import PROVA from "../assets/PROVA.png"
import Nuklear from "../assets/nuklear.png"
import Rps from "../assets/rps.png"
import Eev from "../assets/eev.png"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const categories = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "dev", label: "Dev" },
  { id: "n8n", label: "N8N" },
]

const projectsData = [
  {
    id: "rps",
    category: "n8n",
    image: Rps,
    title: "RPS Workflow Automation (Quebec)",
    role: "Automation n8n",
    description: "Design and implementation of automation workflows with N8N for a client platform targeting the Quebec market. Covers AI-driven data analysis and email follow-ups.",
    tags: ["N8N", "Mistral AI", "SendGrid"],
    github: null,
  },
  {
    id: "eev",
    category: "n8n",
    image: Eev,
    title: "Ecology & Green Energy",
    role: "Automation n8n",
    description: "Automated article publishing workflow with N8N: content retrieval, AI-assisted rewriting via OpenAI, and human validation by email before publishing.",
    tags: ["N8N", "Mistral AI", "SendGrid"],
    github: null,
  },
  {
    id: "labo",
    category: "dev",
    image: Labo,
    title: "Laboratory Management System - CHU Tambohobe",
    role: "Team Leader, UI/UX Designer & Fullstack Developer",
    description: "Analytical dashboard app for CHU Tambohobe to centralize, visualize, and analyze medical data with interactive dashboards and automated reports.",
    tags: ["Figma", "NextJS", "NestJS", "Tailwind CSS", "Postgresql"],
    github: "https://github.com/AnaiaRn/f_labo.git",
  },
  {
    id: "innovators",
    category: "dev",
    image: Access,
    title: "Innovators – Dev Hub ACCES Bank, Fianarantsoa",
    role: "Team Leader, UI/UX Designer & Frontend Developer",
    description: "Hackathon project (Dev Hub ACCES Bank): innovative solution to digitalize corporate purchase management.",
    tags: ["Figma", "NextJS", "NestJS", "Tailwindcss", "Postgresql"],
    github: "https://github.com/AnaiaRn/INNOVATORS.git",
  },
  {
    id: "mybudget",
    category: "dev",
    image: Budget,
    title: "MyBudget – EMIT Fianarantsoa",
    role: "UI/UX Designer, Fullstack Developer",
    description: "AI-powered personal budget management app developed within EMIT, to simplify and automate personal financial planning.",
    tags: ["Java EE", "JSP", "Html", "Tailwindcss", "PostgreSQL"],
    github: "https://github.com/AnaiaRn/mybudget.git",
  },
  {
    id: "port",
    category: "dev",
    image: Port,
    title: "PortFolio – Anaïa Randrianantenaina",
    role: "UI/UX Designer, Frontend Developer",
    description: "First version of my professional portfolio showcasing early projects, design experiments, and web development skills.",
    tags: ["Figma", "React", "Tailwindcss", "Frame Motion"],
    github: "https://github.com/AnaiaRn/PortFolio.git",
  },
  {
    id: "port1",
    category: "dev",
    image: Port1,
    title: "Portfolio (Current) – Anaïa Randrianantenaina",
    role: "UI/UX Designer, Frontend Developer",
    description: "Modern, dynamic, responsive portfolio reflecting my evolution as a developer and designer.",
    tags: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
    github: null,
  },
  {
    id: "prova",
    category: "design",
    image: PROVA,
    title: "Prova Gourmet – Anaïa Randrianantenaina",
    role: "UX/UI Designer, Product Designer",
    description: "Website for a premium vanilla producer showcasing sustainable farming, gourmet products, and culinary recipes.",
    tags: ["Figma", "PrototypingDesign"],
    figma: "https://www.figma.com/design/Yf12e1wdXxy1YjNQnDHkPK/PROVA-Gourmet---?t=QxVhCR63fDvgvrCr-1",
  },
  {
    id: "uplife",
    category: "design",
    image: Uplife,
    title: "UPLIFE – Anaïa Randrianantenaina",
    role: "UX/UI Designer, Product Designer",
    description: "Website for a crypto trading platform: secure trading ecosystem, real-time analytics, and DeFi solutions.",
    tags: ["Figma", "PrototypingDesign"],
    figma: "https://www.figma.com/design/t81kO8c2q9jOWVZ0enhMY3/UP_LIFE?node-id=0-1&t=sLh9d7S3fPxNPONL-1",
  },
  {
    id: "nuklear",
    category: "design",
    image: Nuklear,
    title: "NUKLEAR - Anaïa Randrianantenaina",
    role: "UX/UI Designer, Product Designer",
    description: "High-conversion landing page (technical assessment) with streamlined user journey and modular UI components.",
    tags: ["Figma", "PrototypingDesign"],
    figma: "https://www.figma.com/design/uPgHEOEcq6guGDhCQmmzLA/Test-NUKLEAR---Ana%C3%AFa-Randrianantenaina?node-id=1-16&t=sLh9d7S3fPxNPONL-1",
  },
]

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      className="flex flex-col rounded-2xl bg-stone-900/40 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
    >
      <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
        <p className="mb-2 text-xs font-medium text-stone-500">{project.role}</p>

        <p className={`mb-3 text-sm text-stone-400 ${expanded ? "" : "line-clamp-2"}`}>
          {project.description}
        </p>
        {project.description.length > 100 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mb-3 self-start text-xs underline text-stone-400"
          >
            {expanded ? "Voir moins" : "Voir plus"}
          </button>
        )}

        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-stone-900 px-2 py-1 text-xs font-medium text-stone-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 text-sm">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="underline text-stone-300">
              Github
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" rel="noreferrer" className="underline text-stone-300">
              Figma
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      {/* Menu catégories */}
      <div className="mb-10 flex justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-stone-100 text-stone-900"
                : "bg-stone-900 text-stone-400 hover:text-stone-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grille projets */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Projects