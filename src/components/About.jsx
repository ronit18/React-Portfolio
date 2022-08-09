import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>

				<p className="text-xl mt-20">
					I am a student of Instrumentation and Control Engineering currently
					studying at GEC,Gandhinagar. I am a python and web-developer.
					Currently Im learning about web-development technologies like ReactJS
					and TailWindCSS.
					<br />I am good listener and flexible kind of person. I can adjust in
					any department which is releted to my knowledge. I can give all my
					dedication and hardwork to the project/Work I take. I have good
					knowledge of PLC, Python, Html, Microsoft office, C/C++,
					CSS(TailWindCSS), JavaScript(ReactJS). I have my many Projects on
					python such as Facial Landmark Detection, FlappyBirds game, PingPong
					game.
				</p>
			</div>
		</div>
	);
};

export default About;
