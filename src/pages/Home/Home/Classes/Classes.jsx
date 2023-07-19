import { useContext } from "react";
import useTitle from "../../../../../useTitle";
import useClasses from "../../../../hooks/useClasses";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useMyClass from "../../../../hooks/useMyClass";
import { Zoom } from "react-awesome-reveal";

const Classes = () => {
	const [classes] = useClasses();
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const [, refetch] = useMyClass();

	const handleSelect = singleClass => {
		console.log(singleClass);
		const { availableSeats, price, image, name, instructor, _id } = singleClass;
		if (user && user.email) {
			const selectClass = { classId: _id, availableSeats, price, image, name, instructor, email: user?.email }
			fetch('https://global-language-academy-server-sable.vercel.app/myClass', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(selectClass)
			})
				.then(res => res.json())
				.then(data => {
					if (data?.insertedId) {
						refetch();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'successfully added to my class',
							showConfirmButton: false,
							timer: 1500
						})
					}
				})
		}
		else {
			Swal.fire({
				title: 'Please Login to select a Class',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login Now!'
			}).then((result) => {
				if (result.isConfirmed) {
					navigate('/login', { state: { from: location } });
				}
			})
		}
	}

	useTitle("Classes");
	return (
		<div className="py-20">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{
					classes?.map((singleClass, index) => <div key={index}>
					
						<div className=" bg-base-200 shadow-sm ">
							<Zoom>
								<figure><img src={singleClass?.image} alt="Album" /></figure>
							</Zoom>
							<div className="card-body ">
								<h2 className="text-2xl font-semibold">{singleClass?.name} Language</h2>
								<p className="text-lg font-medium"> Instructor: {singleClass?.instructor}</p>
								<p className="font-medium">Course Fee:$ {singleClass?.price}</p>
								<div className="md:flex">
									<p className="font-medium">Available Seats:{singleClass?.availableSeats}</p>
									<button className="btn btn-outline  bg-green-600 text-white" onClick={() => handleSelect(singleClass)}>Select</button>
								</div>

							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	);
};

export default Classes;