"use client"
import React, { useState } from "react";


const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		
		console.log(formData)
	};

	return (
		<form 
			onSubmit={handleSubmit}
			className="flex-1 w-full grid md:grid-cols-2 gap-4"
		>
			<h3 className='md:col-span-2 text-xl capitalize text-secondary mb-6'> Message me</h3>
			
			{/* NAME */}
			<div >
				<input 
				placeholder="Name"
				name="name"
				type="text"
				value={formData.name}
				onChange={handleChange}
				className="w-full px-4 py-4 lg:py-[10px] rounded-sm text-white outline-none border border-transparent  focus:border-b-primary bg-black/60 "
				/>
			</div>

			{/* EMAIL */}
			<div>
				<input 
				placeholder="Email"
				name="email"
				type='email'
				value={formData.email}
				onChange={handleChange}
				className="w-full px-4 py-4 lg:py-[10px] rounded-sm text-white outline-none border border-transparent  focus:border-b-primary bg-black/60"
				/>
			</div>

			{/* SUBJECT */}
			<div className="md:col-span-2">
				<input 
				placeholder="Subject"
				name="subject"
				type='text'
				value={formData.subject}
				onChange={handleChange}
				className="w-full px-4 py-4 lg:py-[10px] rounded-sm text-white outline-none border border-transparent  focus:border-b-primary bg-black/60"
				/>
			</div>

			{/* MESSAGE */}
			<div className="md:col-span-2">
				<textarea 
				placeholder="Message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				rows={8}
				className=" resize-none w-full px-4 py-4 lg:py-[10px] rounded-sm text-white outline-none border border-transparent  focus:border-b-primary bg-black/60"
				/>
			</div>

			<button 
				type="submit"
				className="w-full bg-primary hover:bg-primary/80 text-white py-4 duration-200"
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactForm;