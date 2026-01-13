import Sary from "../assets/image.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden : { opacity: 0, x: -100 },
  visible : {
    opacity : 1,
    x : 0,
    transition : {
      duration : 0.5,
      staggerChildren : 0.5,
    }
  }
}

const childVariants = {
  hidden : { opacity : 0, x: -100 },
  visible : { opacity : 1, x: 0, transition : { duration : 0.5}}
}
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
                <motion.img src={Sary} alt="Anaïa Randrianantenaina" className="border 
                border-stone-900 rounded-3xl" width={350} height={250} initial={{ x: 100, opacity : 0}}
                animate={{ x:0, opacity:1}} transition={{duration:1, depaly:3.5}}/>
            </div>
            <div></div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div className="flex flex-col items-center lg:items-start mt-10"
            initial="hidden" animate="visible" variants={containerVariants} >
                <motion.h2 className="pb-2 text-4xl tracking-tighter lg:text-7xl" variants={childVariants}>
                    Anaïa Randrianantenaina
                </motion.h2>
                <motion.span className="bg-gradient-to-r from-stone-300 to-stone-600
                 bg-clip-text text-xl tracking-tight lg:text-3xl" variants={childVariants} >
                    Designer UI/UX & Intégrateur Front‑End
                 </motion.span>
                 <motion.p className="my-2 max-w-lg py-6 text-[17px] leading-relaxed tracking-tighter lg:text-xl">
                  Hello! I'm a passionate frontend developer, specialized in React and Next.js.
                  I love building modern, dynamic, and high-performance interfaces that bring ideas to life.

                  With a strong eye for UI/UX design, I craft user experiences that are both intuitive and visually appealing.
                  I pay attention to every detail to ensure smooth and responsive user journeys across all screen sizes.

                  I also create professional and customized websites using WordPress, combining flexibility, speed, and tailored solutions to meet client needs.

                  My goal? To turn your vision into clean, creative, and functional web solutions.

                 </motion.p>
                <motion.a href="/CV_Anaïa_RANDRIANANTENAINA.pdf" target="_blank" rel="noopener noreferrer"
                 download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10" variants={childVariants} >
                 Download CV
                </motion.a>

            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
 