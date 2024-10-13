"use client"
import bgImage from "@/assests/herobg.png"
import hero from "@/assests/hero1.svg";
import Image from "next/image";
import { scrollToElement } from "@/utils/scrollToElement";

const Hero = () => {
	return (
		<section 
		data-section="home"
		id="home"
		className="relative px-[5%] bg-fixed bg-cover bg-center bg-no-repeat min-h-[calc(100vh-64px)]"
		style={{backgroundImage: ` url(${bgImage.src})`}}
		>
			<div className="h-[calc(100vh-64px)] mx-auto flex flex-col md:flex-row items-center">
				
				<div className="flex-1 flex flex-row items-center gap-5 ">
					<div className="hidden md:flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
						<div className="w-1 sm:h-80 h-40 violet-gradient"></div>
					</div>
					{/* TEXT */}
					<div className="flex flex-col space-y-4  justify-center">
						<h4 className="text-white text-2xl leading-7 font-light ">
							Hi I'm Kevin Muthangia
						</h4>
						<h1 className="text-6xl md:text-7xl lg:text-8xl font-black">
							Front-End <br />
							<span className='text-primary'>React</span> 
							<br /> Developer
						</h1>
					</div>
				</div>
				{/* IMAGE */}
				<div className="flex-1 flex justify-center items-center">
					<Image src={hero} alt="hero" className="w-[75%]" />
				</div>
			</div>

			{/* MOUSE SCROLL */}
			<div
				onClick={() => scrollToElement("about")}
				className="hidden md:flex justify-center items-end absolute left-1/2 -translate-x-1/2 bottom-8 w-8 h-14 border-2 border-primary rounded-full cursor-pointer"
			>
				<div className="bounce-top h-3 w-2 bg-primary rounded-full" />
			</div>

		</section>
	);
}

export default Hero
