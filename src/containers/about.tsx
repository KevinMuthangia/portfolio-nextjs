import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import SectionTitle from "@/components/section-title";
import photo from "@/assests/photo.jpg";


const About = () => {
	return (
		<section data-section="about" id="about">
			<SectionTitle title="About" subtitle="Get to know me" />
			{/* IMAGE */}
			<div className="flex flex-col md:flex-row items-start py-6 sm:py-12 gap-12">
				<div className="flex-1 w-full aspect-square bg-primary/20">
					<Image src={photo} alt="my-photo" className="w-full h-full object-cover" />
				</div>

				{/* info */}
				<div className="flex-[2] flex flex-col space-y-4">
					<h4 className="text-xl">
						Hello! I am Kevin Muthangia
					</h4>
					<div className="h-[4px] bg-primary w-32" />
					<h2 className="text-3xl font-medium">
						I'm a front end react developer based in Nairobi, Kenya
					</h2>
					<p className="text-base text-white/80 font-extralight">
						I am a self-taught front-end developer with a passion for creating responsive and 
						interactive web applications using React. Through dedication and hands-on projects, I've 
						honed my skills in JavaScript, HTML, CSS, and modern libraries and frameworks like React and Next.js. 
					</p>
					<p className="text-base text-white/80 font-extralight">
						My focus is on crafting clean, intuitive user interfaces that provide great user experiences. I'm 
						always eager to learn new technologies and continuously improve my craft. Let's bring ideas to 
						life through code!
					</p>
					<div className="flex flex-col md:flex-row flex-wrap gap-4 my-4">
						<Link href="https://github.com/KevinMuthangia" target="_blank" rel="noopener noreferrer">
							<button className="w-full md:w-fit flex justify-center items-center space-x-6 px-12 py-3 bg-primary hover:bg-primary/80 text-white duration-200">
								<span className="text-2xl"><FaGithub /></span>
								<span>Github</span>
							</button>
						</Link>
						<button className="px-12 py-3 border border-primary text-white hover:bg-primary/10 duration-200">Download Cv</button>
					</div>
				</div>
			</div>

		</section>
	);
};

export default About;