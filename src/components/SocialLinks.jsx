import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill, BsInstagram } from "react-icons/bs";
import { BiHome } from "react-icons/bi";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					Home <BiHome size={30} />
				</>
			),
			href: "https://ronit-bio.vercel.app",
			style: "rounded-tr-md",
		},
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/ronit-gandhi-a7bb091b6/",
		},
		{
			id: 2,
			child: (
				<>
					InstaGram <BsInstagram size={30} />
				</>
			),
			href: "https://www.instagram.com/_._mr.gandhi_._/?igshid=YmMyMTA2M2Y%3D",
		},
		{
			id: 3,
			child: (
				<>
					GitHub <FaGithub size={30} />
				</>
			),
			href: "https://github.com/ronit18",
		},

		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: "../assets/resume.pdf",
			style: "rounded-br-md",
			download: true,
		},
	];

	return (
		<div className="lg:flex flex-col top-[35%] left-0 fixed">
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={
							"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md cursor-pointer duration-300 text-white backdrop-blur-2xl" +
							" " +
							style
						}
					>
						<a
							href={href}
							className="flex justify-between items-center w-full text-white"
							download={download}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
