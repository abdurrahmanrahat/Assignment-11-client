import AnimationOS from "../AnimationOS/AnimationOS";
import Discount from "../Discount/Discount";
import Preview from "../Preview/Preview";
import ToysCategory from "../ToysCategory/ToysCategory";
import CarouselBanner from "./CarouselBanner";
import GallerySec from "./GallerySec";

const Home = () => {
    return (
        <div>
            {/* Carousel Section */}
            <CarouselBanner></CarouselBanner>

            {/* Gallery Section */}
            <GallerySec></GallerySec>

            {/* Shop by Category Section */}
            <ToysCategory></ToysCategory>

            {/* Discount Section */}
            <Discount></Discount>

            {/* Preview Section */}
            <Preview></Preview>

            {/* AOS React Animation */}
            <AnimationOS></AnimationOS>
        </div>
    );
};

export default Home;