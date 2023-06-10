
const ClassCard = ({ pClass }) => {
	const { availableSeats,price, image, name, instructor, } = pClass;
	return (
		<div className=" bg-base-200 shadow-sm ">
			<figure><img src={image} alt="Album" /></figure>
			<div className="card-body ">
				<h2 className="text-2xl font-semibold">{name} Language</h2>
				<p className="text-lg font-medium"> Instructor: {instructor}</p>
				<p className="font-medium">Course Fee: {price}</p>
				<p className="font-medium">Available Seats:{availableSeats}</p>
				
			</div>
		</div>
	);
};

export default ClassCard;