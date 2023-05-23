import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const AnimationOS = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 200,
        })
    }, [])

    return (
        <div className="my-20">
            <h2 className='text-4xl text-center font-semibold mb-12'>Welcome to React AOS Animation</h2>

            <div className="flex flex-col gap-10 justify-center items-center">
                <div className="w-1/2 h-40 bg-purple-600 text-white flex items-center justify-center font-semibold text-3xl" data-aos="fade-right">Fade Right Animation</div>
                <div className="w-1/2 h-40 bg-purple-600 text-white flex items-center justify-center font-semibold text-3xl" data-aos="fade-left">Fade Left Animation</div>
                <div className="w-1/2 h-40 bg-purple-600 text-white flex items-center justify-center font-semibold text-3xl" data-aos="flip-up">Flip Up Animation</div>
                <div className="w-1/2 h-40 bg-purple-600 text-white flex items-center justify-center font-semibold text-3xl" data-aos="flip-down">Flip Down Animation</div>
                <div className="w-1/2 h-40 bg-purple-600 text-white flex items-center justify-center font-semibold text-3xl" data-aos="zoom-in-up">Zoom In Up Animation</div>
                <div className="w-1/2 h-40 bg-purple-600 text-white flex items-center justify-center font-semibold text-3xl" data-aos="zoom-in-left">Zoom In Left Animation</div>
            </div>
        </div>
    );
};

export default AnimationOS;