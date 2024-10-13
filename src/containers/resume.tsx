"use client"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from "@/components/section-title";
import likizo from "@/assests/resume/likizo.png"
import lockdownice from "@/assests/resume/lockdownice.png"
import gnlegal from "@/assests/resume/gnlegal.png";
import Image, { StaticImageData } from 'next/image';

interface Props {
	date: string 
	title: string
	iconBg: string 
	company_name: string
	points: string[],
	icon: StaticImageData
}

const experiences = [
    {
      title: "Data Entry",
      company_name: "Lock Down Ice",
      icon: lockdownice,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
    	"Sourced and managed product images: Retrieved and organized product images, ensuring quality and relevance for online display.",
		"Product uploading: Uploaded product data, images, and descriptions to the company's website, ensuring accuracy and completeness.",
		"Competitive analysis: Conducted regular price comparisons with similar businesses, contributing to competitive pricing strategies.",
		"Ensured data integrity: Verified product listings, checked for errors, and ensured all information was up-to-date and correctly formatted for the website."
      ],
    },
    {
      title: "WordPress Developer",
      company_name: "Likizo Cottages & Resort",
      icon: likizo,
      iconBg: "#23334a",
      date: "May 2023 - July 2023",
      points: [
		"Content creation: Generated engaging and SEO-optimized text content for the website .",
		"Image sourcing and enhancement: Sourced high-quality images from stock platforms and other sources, upscaled them using image enhancement tools to ensure clarity and optimal resolution for web use.",
		"WordPress template modification: Customized WordPress templates to align with brand aesthetics and functional requirements, including adjustments to layout, colors, fonts, and page elements.",
      ],
    },
    {
      title: "WordPress Developer",
      company_name: "Gakahu & Rosana Advocates",
      icon: gnlegal,
      iconBg: "#fff",
      date: "Jun 2023 - Aug 2023",
      points: [
		"Website migration: Assisted in transferring the website content to a newly designed layout, ensuring smooth transition with minimal downtime.`",
		"WordPress plugin management: Installed and configured essential WordPress plugins to enhance blog functionality.",
       	"Image sourcing and uploading: Sourced high-quality images for blog posts, ensuring alignment with content and audience needs.",
		"Content formatting: Ensured proper image placement, alt tags, and metadata for SEO, improving the blog's search engine visibility.",
      ],
    }
  ];


const ExperienceCard = ({experience}: {experience: Props}) => {
	const { date, title,iconBg, company_name,points, icon} = experience;
	return (
		<VerticalTimelineElement
			visible={true}
			contentStyle={{background: '#050816', color: '#fff',	boxShadow:" 0 3px 0 #915eff"}}
			contentArrowStyle={{borderRight: '7px solid #915EFF'}}
			date={date}
			iconStyle={{background: iconBg, overflow: "hidden"}}
			icon={
				<div className="flex justify-center items-center w-full h-full overflow-hidden">
					<Image src={icon} alt={company_name} width={100} height={100} className="w-full" />
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{title}</h3>
				<p className="text-secondary text-base font-semibold m-0">{company_name}</p>
			</div>
			<ul className="mt-5 list-disc list-black marker:text-primary ml-5 space-y-2">
				{
					points.map((point:string, index:number) => {
						const p = point.split(":")

						return (
						<li key={`experience-point-${index}`} className="text-white font-light text-[15px] pl-1 tracking-wider">
							<b className='font-bold'>{p[0]}:</b> {p[1]}
						</li>
						)
					})
				}
			</ul>
		</VerticalTimelineElement>
	)
}

const Resume = () => {
	return (
		<section data-section="resume" id='resume'>
			<SectionTitle title="Resume" subtitle="What i have done so far" />
			<div className="py-6 sm:py-12 flex flex-col">
				<VerticalTimeline>
					{
						experiences.map((experience, index) => (
							<ExperienceCard key={index} experience={experience} />
						))
					}
				</VerticalTimeline>
			</div>
		</section>
	);
};

export default Resume

