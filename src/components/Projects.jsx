import Labo from "../assets/labo.png"
import Access from "../assets/access.png"
import Budget from "../assets/budget.png"
import Port from "../assets/port.png"
import Port1 from "../assets/port1.png"
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 className="my-20 text-center text-4xl" whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }} transition={{ duration : 0.5}}>
        Projects
      </motion.h2>

      {/* LABORATOIRE CHU */}
      <div>
        <div className="mb-8 flex flex-wrap">
            <motion.div className="w-full lg:w-1/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{ duration:1}}>
            <img src={Labo} alt="" className="mb-6 rounded-2xl w-[300px] h-[200px]" />
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{ opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}}>
                <h3 className="mb-2 font-semibold text-2xl">Laboratory Management System - CHU Tambohobe</h3>
                <p className="mb-4 text-stone-400">Design and development of an analytical dashboard application
                Project carried out within the CHU Tambohobe laboratory to centralize, visualize, and analyze 
                medical data through interactive dashboards, dynamic charts, and automated reports.
                I led the development team, designed user interfaces, built the frontend (Next.js) and backend (NestJS), and handled database and API integration.
                </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium">Role:</span> Team Leader, UI/UX Designer & Fullstack Developer </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium">Github:</span>
                 <a href="https://github.com/AnaiaRn/f_labo.git" className="underline">https://github.com/AnaiaRn/f_labo.git</a> 
                </p>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NextJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NestJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Tailwind CSS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Postgresql</span>
            </motion.div>
        </div>
      </div>

      {/* INNOVATORS*/}
      <div>
        <div className="mb-8 flex flex-wrap">
        <motion.div className="w-full lg:w-1/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{ duration:1}}>
            <img src={Access} alt="" className="mb-6 rounded-2xl w-[300px] h-[200px]" />
        </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{ opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}}>
                <h3 className="mb-2 font-semibold text-2xl">Innovators – Dev Hub ACCES Bank, Fianarantsoa</h3>
                <p className="mb-4 text-stone-400">Web application for reinventing corporate purchase management
                Project developed during a hackathon organized by the Development Hub of ACCES Bank in Andrainjato, Fianarantsoa.
                The goal was to design an innovative solution to streamline and digitalize business purchasing processes.
                I led the team, crafted the user experience and interface design, and developed the frontend using modern technologies (React).
                </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-1 text-sm font-medium">Role:</span> Team Leader, UI/UX Designer & Frontend Developer</p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-1 text-sm font-medium">Github:</span>
                 <a href="https://github.com/AnaiaRn/INNOVATORS.git" className="underline">https://github.com/AnaiaRn/INNOVATORS.git</a>
                </p>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NextJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NestJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Tailwindcss</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Postgresql</span>
            </motion.div>
        </div>
      </div>

      {/* MYBUDGET */}
      <div>
        <div className="mb-8 flex flex-wrap">
        <motion.div className="w-full lg:w-1/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{ duration:1}}>
            <img src={Budget} alt="" className="mb-6 rounded-2xl w-[300px] h-[200px]" />
        </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{ opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}}>
                <h3 className="mb-2 font-semibold text-2xl">MyBudget – EMIT Fianarantsoa</h3>
                <p className="mb-4 text-stone-400">Web application for personal budget management powered by artificial intelligence.
                Project developed within EMIT in Fianarantsoa.
                 The goal was to create a smart and intuitive solution to simplify and automate personal financial planning.
                </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-1 text-sm font-medium">Role:</span> UI/UX Designer, Fullstack Developer</p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-1 text-sm font-medium">Github:</span>
                 <a href="https://github.com/AnaiaRn/mybudget.git" className="underline">https://github.com/AnaiaRn/mybudget.git</a>
                </p>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Java EE</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">JSP</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Html</span>
                 <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Tailwindcss</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">PostgreSQL</span>
            </motion.div>
        </div>
      </div>
    
      {/* PORTFOLIO */}
      <div>
        <div className="mb-8 flex flex-wrap">
        <motion.div className="w-full lg:w-1/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{ duration:1}}>
            <img src={Port} alt="" className="mb-6 rounded-2xl w-[300px] h-[200px]" />
        </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{ opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}}>
                <h3 className="mb-2 font-semibold text-2xl">PortFolio – Anaïa Randrianantenaina</h3>
                <p className="mb-4 text-stone-400">First version of my professional portfolio showcasing early projects,
                   design experiments, and personal development in web technologies.
                Developed to present my growing skills in frontend and fullstack development, as well as UI/UX design.
                </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-1 text-sm font-medium">Role:</span> UI/UX Designer, Frontend Developer</p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-1 text-sm font-medium">Github:</span>
                <a href="https://github.com/AnaiaRn/PortFolio.git" className="underline">https://github.com/AnaiaRn/PortFolio.git</a>
                </p>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">React</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Tailwindcss</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Frame Motion</span>
            </motion.div>
        </div>
      </div>

       {/* PORTFOLIO 1*/}
       <div>
        <div className="mb-8 flex flex-wrap">
        <motion.div className="w-full lg:w-1/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{ duration:1}}>
            <img src={Port1} alt="" className="mb-6 rounded-2xl w-[300px] h-[200px]" />
        </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{ opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}}>
                <h3 className="mb-2 font-semibold text-2xl">Portfolio (Current) – Anaïa Randrianantenaina</h3>
                <p className="mb-4 text-stone-400">Web portfolio showcasing my latest projects, design work, and fullstack development skills.
                Built as a modern, dynamic, and responsive site to reflect my evolution as a developer and designer.
                I designed the full user experience, created mockups with Figma, and developed
                the entire site using modern technologies such as React, Tailwind CSS, Framer Motion, and other performance-optimized tools.
                </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-1 text-sm font-medium">Role:</span> UI/UX Designer, Frontend Developer</p>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">React</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Tailwind CSS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Framer Motion</span>
            </motion.div>
        </div>
      </div>
     

    </div>
  )
}

export default Projects
