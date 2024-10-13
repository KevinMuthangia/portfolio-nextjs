import { ProjectType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface Props extends ProjectType {
	reverse?: boolean;
	bg: string;
	index: number
}


const ProjectTile = ({ image, title, description, stack, reverse, demoLink, codeLink, bg, index }: Props) => {

	return (
		<>
		<h5 className={`${bg} py-5 text-base text-secondary uppercase px-[5%]`}>project #{index + 1}</h5>
		<div className={`flex ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col gap-8 ${bg} pt-6 pb-6 sm:pb-12 px-[5%]`}>
			{/* Image */}
			<div className='flex-1 bg-primary/10 max-h-[60vh] h-full rounded overflow-hidden'>
				<Image src={image} alt="project" className='w-full h-full object-top object-cover' />
			</div>

			{/* Description */}
			<div className='flex-1 flex flex-col gap-3 h-full'>
				<h3 className='text-4xl font-bold'>{title}</h3>
				<p className='text-sm'>{description}</p>
				<div>
					<h4 className='text-base uppercase font-medium text-primary mb-2'>Technologies</h4>
					<div className='flex flex-wrap items-center gap-4 mb-4'>
						{
							stack.map((item, index: number) => (
								<div key={index} className='bg-primary/10 px-4 py-2 rounded text-secondary'>{item}</div>
							))
						}
					</div>
				</div>
				<div className='flex  gap-4 text-center'>
					<Link href={demoLink} target="_blank" rel="noopener noreferrer" className='flex-1 bg-primary py-3'>View Live Demo</Link>
					<Link href={codeLink} target="_blank" rel="noopener noreferrer" className='flex-1 bg-[#fcfcfc] text-primary py-3'>Source Code</Link>
				</div>
			</div>

		</div>
		</>
	);
};

export default ProjectTile;