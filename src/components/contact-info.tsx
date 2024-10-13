import Link from "next/link";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsMap, BsTelephone } from "react-icons/bs";

const contactInfo = [
	{
		icon: <AiOutlineUser />,
		title: 'Name',
		value: 'Kevin Muthangia',
	},
	{
		icon: <BsMap />,
		title: 'Location',
		value: 'Nairobi, Kenya',
	},
	{
		icon: <BsTelephone />,
		title: 'Call Me',
		value: '+254 768634775',
	},
	{
		icon: <AiOutlineMail />,
		title: 'Email Me',
		value: 'kevmuthangia@gmail.com',
	},
];


const ContactInfo = () => {
	return (
		<div className="flex flex-col space-y-4">
			<p className="text-base py-2">
				Always available for freelance work if the right project comes along, Feel free to contact me!
			</p>

			<div className="flex flex-col space-y-4">
				{
					contactInfo.map((info, index) => (
						<div 
							key={index}
							className="flex justify-start items-center gap-12"
						>
							<div className="text-primary text-[2rem] leading-10">{info.icon}</div>
							<div>
								<h4 className="text-lg font-bold">{info.title}</h4>

								{	//EMAIL
									info.title === "Email Me"  && <Link href={`emailto:${info.value}`} className={`text-base text-secondary hover:text-primary hover:underline duration-200`}>{info.value}</Link>
								}

								{  //PHONE
									info.title === "Call Me" && <Link href={`tel:${info.value}`} className={`text-base text-secondary hover:text-primary hover:underline duration-200`}>{info.value}</Link>
								}
									
								{	//OTHERS
									info.title !== "Call Me" && info.title !== "Email Me" && <p className="text-base text-secondary">{info.value}</p>
								}
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default ContactInfo;