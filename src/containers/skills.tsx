import Image from "next/image";
import SectionTitle from "@/components/section-title";
import html5 from "@/assests/skills/html.png"; 
import css from "@/assests/skills/css.png"
import javascript from "@/assests/skills/javascript.png";
import typescript from "@/assests/skills/typescript.png";
import reactjs from "@/assests/skills/reactjs.png";
import redux from "@/assests/skills/redux.png";
import nodejs from "@/assests/skills/nodejs.png";
import tailwind from "@/assests/skills/tailwind.png";
import mongo from "@/assests/skills/mongodb.png";

const skillsData = [
	{
		title: "HTML 5",
		image: html5,
		progress: 95,
	},
	{
		title: "CSS3",
		image: css,
		progress: 95,
	},
	{
		title: "TailwindCSS",
		image: tailwind,
		progress: 95,
	},
	{
		title: "JavaScript",
		image: javascript,
		progress: 85,
	},
	{
		title: "TypeScript",
		image: typescript,
		progress: 75,
	},
	{
		title: "React",
		image: reactjs,
		progress: 90,
	},
	{
		title: "Redux",
		image: redux,
		progress: 90,
	},
	{
		title: "MongoDB",
		image: mongo,
		progress: 80,
	},
	{
		title: "NodeJS",
		image: nodejs,
		progress: 70,
	},

]

const Skills = () => {
	return (
		<section data-section="skills" id="about">
			<SectionTitle title="skills" subtitle="programming stack" />
			<div className="py-6 sm:py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
				{
					skillsData.map((skill, index) => (
						<div key={index} className="flex items-center py-3 gap-3" >
							<div className="w-[60px] h-[60px] flex">
								<Image src={skill.image} alt="html"  />
							</div>

							<div className="skill-progress flex-1">
								<h3>{skill.title}</h3>
								<div className="flex items-center space-x-4">
									<progress max={100} value={skill.progress} />
									<span>{skill.progress}%</span>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</section>
	); 
};

export default Skills;