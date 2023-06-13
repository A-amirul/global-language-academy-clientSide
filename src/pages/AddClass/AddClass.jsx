import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const AddClass = () => {
	const { user } = useContext(AuthContext);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = data => {

		fetch("https://global-language-academy-server-a-amirul.vercel.app/classes", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(result => {
				console.log(result);
				if (result.insertedId) {
					reset();
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Class added successfully',
						showConfirmButton: false,
						timer: 1500
					})

				}

			})


	};
	return (
		<div className="w-full p-10">
			<h1 className='text-5xl font-bold text-center'>Add a Class</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control w-full mb-4">
					<label className="label">
						<span className="label-text font-semibold">Class Name*</span>
					</label>
					<input type="text" placeholder="Class Name"
						{...register("name", { required: true, maxLength: 120 })}
						className="input input-bordered w-full " />
				</div>

				<div className="form-control w-full my-4">
					<label className="label">
						<span className="label-text font-semibold">Class Image</span>
					</label>
					<input type="text" placeholder='Class Image URL' {...register("image", { required: true })} className="input input-bordered w-full " />
				</div>


				<div className="form-control w-full mb-4">
					<label className="label">
						<span className="label-text font-semibold">Instructor Name</span>
					</label>
					<input type="text" placeholder="Instructor Name"
						{...register("instructor", { required: true, maxLength: 120 })}
						className="input input-bordered w-full " defaultValue={user?.displayName} readOnly />
				</div>
				<div className="form-control w-full mb-4">
					<label className="label">
						<span className="label-text font-semibold">Instructor Email</span>
					</label>
					<input type="email" placeholder="Instructor email" defaultValue={user?.email} readOnly
						{...register("email", { required: true })}
						className="input input-bordered w-full " />
				</div>

				<div className="flex my-4">
					<div className="form-control w-full mb-4">
						<label className="label">
							<span className="label-text font-semibold">Available Seats*</span>
						</label>
						<input type="number" placeholder="Available Seats"
							{...register("availableSeats", { required: true })}
							className="input input-bordered w-full " />
					</div>

					<div className="form-control w-full ml-4">
						<label className="label">
							<span className="label-text font-semibold">Price*</span>
						</label>
						<input type="number" {...register("price", { required: true })} placeholder="($) Price" className="input input-bordered w-full " />
					</div>
				</div>
				<div className='text-center'>
					<input className="btn btn-outline bg-red-400 text-white normal-case px-8 py-4" type="submit" value="Add Class" />

				</div>

			</form>
		</div>
	);

};

export default AddClass;