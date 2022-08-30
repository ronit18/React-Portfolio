import React from "react";
// import Typewriter from "typewriter-effect";
import image from "../assets/image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import earthVideo from "../assets/video.mp4";
import spaceVideo from "../assets/space.mp4";

const Home = () => {
	return (
		<div name="home" className="w-full h-[100vh] top-[90px] ">
			<video
				className="object-cover h-full w-full absolute -z-10"
				// src={earthVideo}
				src={spaceVideo}
				autoPlay
				loop
				muted
			/>
			<div className="left-2">
				<div className="max-w-screen-lg pl-4 mx-auto flex flex-col items-center justify-center h-[100vh] px-auto md:flex-row">
					<div className="flex flex-col justify-center h-full pr-3">
						<h2 className="text-4xl sm:text-7xl font-bold text-white ">
							I'm a Web-Developer.
							{/* For Typing effect*/}
							{/* <Typewriter
								options={{
									strings: ["Python-developer.", "Web-developer."],
									autoStart: true,
									loop: true,
								}}
							/> */}
						</h2>

						<div>
							<Link
								to="contact"
								smooth
								duration={500}
								className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
							>
								Contact Me
								<span className="group-hover:rotate-90 duration-300">
									<MdOutlineKeyboardArrowRight
										size={25}
										className="ml-1"
									/>
								</span>
							</Link>
						</div>
					</div>

					<div className="mr-auto w-25">
						<div className="flex flex-col px-4">
							<img
								src={image}
								alt="my profile"
								className="rounded-2xl float-right-10"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
