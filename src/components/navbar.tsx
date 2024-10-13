"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaTimes } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import logo from "@/assests/logo.svg"
import { scrollToElement } from "@/utils/scrollToElement"

const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [activeSection, setActiveSection] = useState<string | null>(null);
  	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		//create new instance and pass a callback function
		observer.current = new IntersectionObserver((entries) => {
		const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
			//Update state with the visible section ID
			if (visibleSection) {
				setActiveSection(visibleSection.id);
			}
		}, {
			root: null, // Use the viewport as the root
			rootMargin: '-64px',
			threshold: 0.1, // Trigger when 10% of the section is visible
		});

		//Get custom attribute data-section from all sections
		const sections = document.querySelectorAll('[data-section]');

		sections.forEach((section) => {
			observer?.current?.observe(section);
		});
		//Cleanup function to remove observer
		return () => {
			sections.forEach((section) => {
				observer?.current?.unobserve(section);
			});
		};
  	}, []);


	function toggleSidebar () {
		setShowSidebar(!showSidebar)
	}

	return (
		<header className="px-[5%] h-16 fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-black/70 backdrop-blur-xl ">
			<Link href={"/"}>
				<div className="flex items-center space-x-3">
					<Image src={logo} alt="KM" height={50} width={50} />
					<p className="text-xl font-medium">| Kevin <span className="hidden lg:inline">Muthangia</span></p>
				</div>
			</Link>

			{/* Desktop */}
			<nav className=" hidden lg:flex space-x-4">
				{
					navlinks.map((link, index) => (
						<div
							key={index}
							className={`${activeSection === link.name ? "nav-link nav-link-active text-primary" : "nav-link"} nav-link text-base tracking-wide font-medium uppercase cursor-pointer`} 
							onClick={() => scrollToElement(link.name)}
						>
								{link.name}
						</div>
					))
				}
			</nav>

			{/* Mobile */}
			<button 
				onClick={toggleSidebar}
				className="lg:hidden text-3xl"
			>
				<RxHamburgerMenu />
			</button>

			<div className={`lg:hidden flex flex-col space-y-8 px-2 pt-2 bg-black fixed h-screen w-60 ${showSidebar ? "right-0" : "-right-64" } top-0 duration-500 ease-in-out`}>
				<button
					onClick={toggleSidebar} 
					className="text-2xl hover:text-primary duration-200"
				>
					<FaTimes />
				</button>

				<nav className="flex flex-col space-y-4">
					{
						navlinks.map((link, index) => (
							<div
								key={index}
								onClick={() => {
									scrollToElement(link.name)
									setShowSidebar(false)
								}}
								className={`${activeSection === link.name ? "text-primary" : ""} text-base uppercase py-2 px-6 hover:text-primary hover:bg-main w-fit rounded-full cursor-pointer duration-200 ease-in`} 
							>
									{link.name}
							</div>
						))
					}
				</nav>
			</div>
		</header>
	)
}

export default Navbar


const navlinks = [
	{
		name: "home",
		path: "/"
	},
	{
		name: "about",
		path: "/about"
	},
	{
		name: "resume",
		path: "/experience"
	},
	{
		name: "projects",
		path: "/projects"
	},
	{
		name: "contact",
		path: "/contact"
	},

]