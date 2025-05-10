import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 className="my-10 text-center text-4xl" whileInView={{opacity:1, y:0}} initial={{opacity:1, y:-100}} transition={{duration:0.5}}>
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p className="my-4"  whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}}>
           Ampitakely Fianarantsoa
        </motion.p>
        <motion.p className="my-4"  whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}}>
            +261 33 34 531 88 / +261 34 27 284 60
        </motion.p>
        <a href="https://www.gmail.com/in/anaiarandrianantenaina@gmail.com" className="border-b">
            anaiarandrianantenaina@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact
