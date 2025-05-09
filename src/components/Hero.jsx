import Sary from "../assets/sary.jpg";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
                <img src={Sary} alt="Anaïa Randrianantenaina" className="border 
                border-stone-900 rounded-3xl" />
            </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start mt-10">
                <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
                    Anaïa Randrianantenaina
                </h2>
                <span className="bg-gradient-to-r from-stone-300 to-stone-600
                 bg-clip-text text-3xl tracking-tight">
                    Frontend Developer / UI/UX Designer / Wordpress Developer
                 </span>
                 <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                  Hello! I'm a passionate frontend developer, specialized in React and Next.js.
I love building modern, dynamic, and high-performance interfaces that bring ideas to life.

With a strong eye for UI/UX design, I craft user experiences that are both intuitive and visually appealing.
I pay attention to every detail to ensure smooth and responsive user journeys across all screen sizes.

 I also create professional and customized websites using WordPress, combining flexibility, speed, and tailored solutions to meet client needs.

 My goal? To turn your vision into clean, creative, and functional web solutions.

                 </p>
                 <a  href="../assets/Logo A.R design_fichiers/CV.pdf" target="_blank" rel="noopener noreferrer" download className="bg-white
                 rounded-full p-4 text-sm text-stone-800 mb-10">
                    Download CV
                 </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
 