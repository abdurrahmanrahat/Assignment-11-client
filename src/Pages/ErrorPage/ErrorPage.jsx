import { Link, useRouteError } from 'react-router-dom'
import ErrorImg from '../../assets/error-page.png'

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='container'>
            <div className='md:flex justify-evenly'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <h2 className='mb-8 font-bold text-5xl mt-5'>
                        <span>Error</span>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='fs-4 font-bold mb-4'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded btn btn-warning'
                    >
                        Go to homepage
                    </Link>
                </div>
                <div>
                    <img src={ErrorImg} className='w-100 text-center' alt="" />
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
