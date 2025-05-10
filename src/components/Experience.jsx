import { motion } from "framer-motion"
const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2 className="my-20 text-center text-4xl" whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}}>
        Experiences
    </motion.h2>
      <div>
        {/* 1 */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div className="w-full lg:w-1/4" whileInView={{opacity: 1, x:0 }} initial={{opacity:0, x:-100}} transition={{duration: 1}}>
                <p className="mb-2 text-sm text-stone-400">
                    February 2025 - Present
                </p>
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{ duration: 1}}>
                <h3 className="mb-2 font-semibold">
                    UI/UX Designer & Wordpess Developer - {}
                    <span className="text-sm text-stone-500">
                         TechZone Fianarantsoa
                    </span>
                </h3>
                <p className="mb-4 text-stone-400">
                Team leader for the development of an e-commerce website for selling IT equipment in Fianarantsoa,
                using WordPress, WooCommerce, and the LAMP stack (Linux, Apache, MySQL, PHP).
                The project includes complete management of products, orders, customers, and online payments.
                I lead the development team, overseeing the setup, customization, and deployment of the solution.
                </p>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Apache
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Php
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Mysql
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Wordpress
                </span>
            </motion.div> 
        </div>
        {/* 2 */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div className="w-full lg:w-1/4" whileInView={{opacity: 1, x:0 }} initial={{opacity:0, x:-100}} transition={{duration: 1}}>
        <p className="mb-2 text-sm text-stone-400">
                    June 2024 - September 2024
                </p>
        </motion.div>
        <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{ duration: 1}}>
        <h3 className="mb-2 font-semibold">
                    UI/UX Designer & Fullstack Developer - {}
                    <span className="text-sm text-stone-500">
                         EMIT Fianarantsoa
                    </span>
                </h3>
                <p className="mb-4 text-stone-400">
                Team leader for the development of a management system application for the Tambohobe laboratory,
                 using Figma, Next.js, NestJS, and PostgreSQL. 
                 The project included complete management of patients, tests, equipment, staff, as well as the lab’s dashboard and analytical reports.
                 I led the development team, oversaw the interface design, frontend and backend development,
                  and managed the integration of databases and analytical features.
                </p>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Figma
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    NextJs
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    NestJs
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    PostgreSQL
                </span>
            </motion.div>
        </div>
        {/* 3 */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div className="w-full lg:w-1/4" whileInView={{opacity: 1, x:0 }} initial={{opacity:0, x:-100}} transition={{duration: 1}}>
        <p className="mb-2 text-sm text-stone-400">
                    June 2023 - August 2024
                </p>
        </motion.div>
        <motion.div className="w-full max-w-xl lg:w-3/4" whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{ duration: 1}}>
        <h3 className="mb-2 font-semibold">
                    UI/UX Designer & Fullstack Developer - {}
                    <span className="text-sm text-stone-500">
                         DRI Fianarantsoa
                    </span>
                </h3>
                <p className="mb-4 text-stone-400">
                I was the sole developer of an application for income tax liquidation for employees assimilated (IRSA)
                 to the Fiscal Center A of the Regional Directorate of Fianarantsoa,
                 using Figma, PHP, JavaScript, and MySQL. The project aimed to facilitate
                  online income tax liquidation for the Upper City of Fianarantsoa.
                 I handled every stage of the project, including UI design, frontend and backend development,
                  and the integration of tax-related features.
                </p>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Figma
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Php
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    JavaScript
                </span>
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
                    Mysql
                </span>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience
