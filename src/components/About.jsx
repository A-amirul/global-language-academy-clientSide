import { Flip, Zoom } from "react-awesome-reveal";
import { FaBook, FaBookReader, FaVideo } from "react-icons/fa";

const About = () => {
	return (
		<section className=" py-8 sm:py-16">
			<div className="container mx-auto px-4">
				<Flip>
					<h2 className="text-2xl md:text-5xl font-semibold mb-4 sm:mb-8 text-center">About Our Site Supports</h2>
				</Flip>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					<div className="bg-base-200 rounded-lg p-4 sm:p-6 shadow-md">
						<h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">Courses</h3> <FaBook className="w-[50px] h-[50px]"></FaBook>
						<Zoom>
							<p className="text-gray-700 text-xl font-medium">
								Explore our wide range of courses taught by industry experts. Enhance your language knowledge and skills in various subjects.
							</p>
						</Zoom>
					</div>
					<div className="rounded-lg p-4 sm:p-6 bg-base-200 shadow-md">
						<h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">Tutorials</h3><FaVideo className="w-[50px] h-[50px]"></FaVideo>
						<Zoom>
							<p className="text-gray-700 text-xl font-medium">
							Access step-by-step tutorials on various topics. Learn at your own pace and gain language knowledge.
						</p>
						</Zoom>
					</div>
						<div className="bg-base-200 rounded-lg p-4 sm:p-6 shadow-md">
							<h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">Resources</h3><FaBookReader className="w-[50px] h-[50px]"></FaBookReader>
						<Zoom>
							<p className="text-gray-700 text-xl font-medium">
								Discover a collection of educational resources, including articles, ebooks, and helpful links for further learning.
							</p>
							</Zoom>
						</div>
				</div>
			</div>
		</section>
	);
};

export default About;