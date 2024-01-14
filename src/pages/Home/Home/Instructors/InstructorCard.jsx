
const InstructorCard = ({ instructor }) => {
	const { image, email, name, classesTaken, classNames } = instructor;

	return (
		<div className=" bg-white shadow-sm ">
			<div className="card-body rounded-lg bg-white h-100">
				<figure><img className="w-25 h-25" src={image} alt="Album" /></figure>
				<h2 className="text-xl font-semibold">{name}</h2>
				<p className="font-small">Class Taken:{classesTaken}</p>
				<p className="font-small">Class Name:</p>
				<p className="font-small">Email: {email}</p>
				{
					classNames?.map((className, index) => <p key={className._id}>{ index+1 }. {className}</p>)
				}
			</div>
		</div>
	);
};

export default InstructorCard;