interface SectionTitleProps {
	title: string;
	subtitle: string;
}


const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
	return (
		<div className="pt-6 pb-2 sm:py-6 flex flex-col space-y-4 items-center">
			<h5 className="text-base text-secondary uppercase">{subtitle}</h5>
			<h2 className="text-4xl sm:text-6xl font-bold capitalize">{title}</h2>
			<div className="relative max-w-32 w-full h-[6px] bg-primary/10 rounded overflow-hidden">
				<div className="absolute bg-primary w-3 h-full slide-in-left" />
			</div>
		</div>
	);
};

export default SectionTitle;