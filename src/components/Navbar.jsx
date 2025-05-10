import { TbBrandGmail } from "react-icons/tb"; 
import { SiGmail } from "react-icons/si"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import logo from '../assets/ar.png'

const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className='mx-2' width={50} height={33}/>  
        </a>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkdine.com/in/Anaïa+Randrianantenaina"
        target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <AiFillLinkedin />
        </a>
        <a href="https://www.github.com/in/AnaiaRn"
        target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/in/anaia002"
        target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
            <AiFillInstagram />
        </a>
        <a href="https://www.gmail.com/in/anaiarandrianantenaina@gmail.com"
        target='_blank' rel='noopener noreferrer' aria-label='Gmail'>
            <TbBrandGmail />
        </a>
    </div>
   </nav>
  )
}

export default Navbar
