import Labo from "../assets/labo.png"
import Access from "../assets/access.png"
const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      {/* LABORATOIRE CHU */}
      <div>
        <div className="mb-8 flex flex-wrap">
            <div className="w-full lg:w-1/4">
            <img src={Labo} alt="" className="mb-6 rounded-2xl w-[300px] h-[200px]" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold text-2xl">Laboratory Management System - CHU Tambohobe</h3>
                <p className="mb-4 text-stone-400">Design and development of an analytical dashboard application
                Project carried out within the CHU Tambohobe laboratory to centralize, visualize, and analyze m
                edical data through interactive dashboards, dynamic charts, and automated reports.
                </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium">Role:</span> Team Leader, UI/UX Designer & Fullstack Developer </p>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NextJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NestJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Tailwindcss</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Postgresql</span>
            </div>
        </div>
      </div>
      {/* LAB E-TECH */}
      <div>
        <div className="mb-8 flex flex-wrap">
            <div className="w-full lg:w-1/4">
            <img src={Access} alt="" className="mb-6 rounded-2xl w-[300px] h-[200px]" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold text-2xl">Innovators – Dev Hub ACCES Bank, Fianarantsoa</h3>
                <p className="mb-4 text-stone-400">Web application for reinventing corporate purchase management
                Project developed during a hackathon organized by the Development Hub of ACCES Bank in Andrainjato, Fianarantsoa.
                The goal was to design an innovative solution to streamline and digitalize business purchasing processes.
                </p>
                <p className="mb-4 text-stone-400"><span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium">Role:</span> Team Leader, UI/UX Designer & Frontend Developer</p>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NextJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">NestJS</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Tailwindcss</span>
                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium
                text-stone-300">Postgresql</span>
            </div>
        </div>
      </div>
      {/* MYBUDGET */}
    
      {/* INNOVATORS */}
     

      {/* BOUTIQUE TECHZONE */}
     

    </div>
  )
}

export default Projects
