import { SiNodedotjs } from "react-icons/si"; 
import { MdJavascript } from "react-icons/md"; 
import { SiJavascript } from "react-icons/si"; 
import { IoLogoJavascript } from "react-icons/io"; 
import { TbBrandTypescript } from "react-icons/tb"; 
import { SiTypescript } from "react-icons/si"; 
import { AiFillGithub } from "react-icons/ai"; 
import { FiFigma } from "react-icons/fi"; 
import { BsWordpress } from "react-icons/bs"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { FaReact } from "react-icons/fa"; 
import { IoLogoNodejs } from "react-icons/io"; 
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 className="my-20 text-center text-4xl" whileInView={{ opacity: 1, y:0}} initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}>
        Technologies
      </motion.h2>
      <motion.div className="flex flex-wrap items-center justify-center gap-4" 
      whileInView={{ opacity: 1, x:0}} initial={{opacity: 0, x: -100 }} transition={{duration: 1.5}}>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
            <SiNodedotjs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
            <TbBrandTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(2.5)}>
            <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(4.5)}>
            <TbBrandNextjs className="text-7xl"/>
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(1.5)}>
            <BsWordpress className="text-7xl text-gray-500"/>
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(5.5)}>
            <FiFigma className="text-6xl "/>
        </motion.div>
        <motion.div className="p-4" initial="initial" animate="animate" variants={iconVariants(3.5)}>
            <AiFillGithub className="text-7xl"/>
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Technologies
