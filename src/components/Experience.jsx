import React from "react";

import python from "../assets/python.svg";
import cLang from "../assets/c-programming.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import davinviResolve from "../assets/davinci.svg";
import PhotoShop from "../assets/ps.svg";

const Experience = () => {
	const techs = [
		{
			id: 1,
			src: python,
			title: "Python",
			style: "shadow-lime-500",
		},
		{
			id: 2,
			src: cLang,
			title: "C-Language",
			style: "shadow-cyan-800",
		},
		{
			id: 3,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 4,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 5,
			src: javascript,
			title: "JavaScript",
			style: "shadow-yellow-500",
		},
		{
			id: 6,
			src: reactImage,
			title: "React",
			style: "shadow-blue-600",
		},
		{
			id: 7,
			src: tailwind,
			title: "Tailwind",
			style: "shadow-sky-400",
		},

		{
			id: 8,
			src: github,
			title: "GitHub",
			style: "shadow-gray-400",
		},
		{
			id: 9,
			src: davinviResolve,
			title: "Davinci Resolve",
			style: "shadow-amber-700",
		},
		{
			id: 10,
			src: PhotoShop,
			title: "PhotoShop",
			style: "shadow-indigo-500",
		},
	];

	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Skills
					</p>
					<p className="py-6">These are the technologies/Languages I know.</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
