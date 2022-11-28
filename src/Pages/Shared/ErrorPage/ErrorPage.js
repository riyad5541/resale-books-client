import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                 
                    <div className='max-w-md text-center'>
                    <img className='h-96' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
                        <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
                            <span className='sr-only'>Error</span>
                            
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl mb-8'>
                            Sorry, we couldn't find this page.
                        </p>
                        <Link to='/'>
                           <button classes='btn px-8 py-3 font-semibold rounded'>
                                Back to homepage</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;