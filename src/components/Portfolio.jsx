import React from "react";
import ping from "../assets/portfolio/ping.png";
import bird from "../assets/portfolio/bird.jpg";
import face from "../assets/portfolio/face.jpg";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: face,
			linkTo: "https://github.com/ronit18/Face-Detection",
		},
		{
			id: 2,
			src: bird,
			linkTo: "https://github.com/ronit18/Flappy-Bird-Game",
		},
		{
			id: 3,
			src: ping,
			linkTo: "https://github.com/ronit18/Ping-Pong-Game",
		},
	];

	return (
		<div
			name="portfolio"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Portfolio
					</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src, linkTo }) => (
						<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
							<a href={linkTo}>
								<img
									src={src}
									alt=""
									className="rounded-md duration-200 hover:scale-105"
								/>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
