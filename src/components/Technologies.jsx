import { AiFillGithub } from "react-icons/ai"; 
import { FiFigma } from "react-icons/fi"; 
import { BsWordpress } from "react-icons/bs"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { FaReact } from "react-icons/fa"; 
import { IoLogoNodejs } from "react-icons/io"; 
const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
            <IoLogoNodejs className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
            <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
            <TbBrandNextjs className="text-7xl"/>
        </div>
        <div className="p-4">
            <BsWordpress className="text-7xl text-gray-500"/>
        </div>
        <div className="p-4">
            <FiFigma className="text-6xl "/>
        </div>
        <div className="p-4">
            <AiFillGithub className="text-7xl"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
