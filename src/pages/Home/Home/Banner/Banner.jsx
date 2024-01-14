import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../../assets/banner1.png"
import banner2 from "../../../../assets/banner2.jpg"
import banner3 from "../../../../assets/banner3.png"

const Banner = () => {
	return (
		<div className=" pt-16">
			<Carousel
				showThumbs={false}
				infiniteLoop={true}
				autoPlay={true}
				interval={5000}
				stopOnHover={false}
				showStatus={false}
				showArrows={false}
				swipeable={true}
				className="carousel-container relative"
			>
				<div className="carousel-slide relative">
					<img src={banner1} alt="Banner 1" className="carousel-image" />

				</div>
				<div className="carousel-slide relative">
					<img src={banner2} alt="Banner2" className="carousel-image" />
				</div>
				<div className="carousel-slide relative">
					<img src={banner3} alt="Banner 3" className="carousel-image" />
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;