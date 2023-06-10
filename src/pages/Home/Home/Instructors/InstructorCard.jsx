
const InstructorCard = ({ instructor }) => {
	const { image, email, name, classesTaken, classNames } = instructor;
	console.log(instructor);

	return (
		<div className=" bg-base-200 shadow-sm ">
			<figure><img src={image} alt="Album" /></figure>
			<div className="card-body ">
				<h2 className="text-2xl font-semibold">{name} Language</h2>
				<p className="font-medium">Email: {email}</p>
				<p className="font-medium">Class Taken:{classesTaken}</p>
				<p className="font-medium">Class Taken:</p>
				{
					classNames?.map((className, index) => <p key={className._id}>{ index+1 }. {className}</p>)
				}
			</div>
		</div>
	);
};

export default InstructorCard;