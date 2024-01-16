

const ClassCard = ({ pClass }) => {
	const { availableSeats, price, image, name, instructor, students } = pClass;
	return (
		<div className=" bg-white shadow-sm rounded-xl">
			<div className="card-body"> 
				<figure><img className="w-full h-full" src={image} alt="Album" /></figure>
				<h2 className="text-2xl font-semibold">{name} Language</h2>
				<p className="text-lg font-medium"> Instructor: {instructor}</p>
				<p className="font-medium">Course Fee:$ {price}</p>
				{/* <p className="font-medium">Available Seats:{availableSeats}</p> */}
				{/* <p className="font-medium">Students:{students}</p> */}

			</div>
		</div>
	);
};

export default ClassCard;