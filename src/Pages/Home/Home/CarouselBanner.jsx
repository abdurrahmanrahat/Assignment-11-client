import img1 from '../../../assets/sliderImage/slider1.jpg';
import img2 from '../../../assets/sliderImage/slider2.jpg';
import img3 from '../../../assets/sliderImage/slider3.jpg';
import img4 from '../../../assets/sliderImage/slider4.jpg';

const CarouselBanner = () => {
    return (
        <div className="carousel w-full h-[620px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                {/* Carousel Text */}
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 md:w-1/2">
                        <h2 className="text-6xl font-bold">Sports through Innovative Toy Experiences</h2>
                        <p>Unleash the athlete within with our dynamic collection of sports toys, designed to inspire active play, skill development, and endless fun.</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Play-On</button>
                        </div>
                    </div>
                </div>
                {/* Carousel icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-14 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                {/* Carousel Text */}
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 md:w-1/2">
                        <h2 className="text-6xl font-bold">Sports through Innovative Toy Experiences</h2>
                        <p>Unleash the athlete within with our dynamic collection of sports toys, designed to inspire active play, skill development, and endless fun.</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Play-On</button>
                        </div>
                    </div>
                </div>
                {/* Carousel icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-14 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                {/* Carousel Text */}
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 md:w-1/2">
                        <h2 className="text-6xl font-bold">Sports through Innovative Toy Experiences</h2>
                        <p>Unleash the athlete within with our dynamic collection of sports toys, designed to inspire active play, skill development, and endless fun.</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Play-On</button>
                        </div>
                    </div>
                </div>
                {/* Carousel icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-14 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                {/* Carousel Text */}
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 md:w-1/2">
                        <h2 className="text-6xl font-bold">Sports through Innovative Toy Experiences</h2>
                        <p>Unleash the athlete within with our dynamic collection of sports toys, designed to inspire active play, skill development, and endless fun.</p>
                        <div>
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Play-On</button>
                        </div>
                    </div>
                </div>
                {/* Carousel icon */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-14 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default CarouselBanner;