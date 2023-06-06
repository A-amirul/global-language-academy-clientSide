import { Link, useRouteError } from 'react-router-dom'
import errorImg from "../../assets/interactive-404.gif"

const ErrorPage = () => {
	const { error, status } = useRouteError()
	return (
		<section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
			<div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
				<img className='w-1/2 h-80 rounded-2xl' src={errorImg} alt="404" />

				<div className='max-w-md text-center'>
					<h2 className='mb-8 font-extrabold text-9xl text-red-600'>
						<span className='sr-only'>Error</span> {status || "Something went wrong!!!"}
					</h2>

					<p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
						{error?.message}
					</p>
					<button className='btn-outline btn '><Link to='/' className=' px-4 py-2 text-xl rounded text-semibold'>
						Back to Home
					</Link></button>
				</div>
			</div>
		</section>
	)
}

export default ErrorPage;