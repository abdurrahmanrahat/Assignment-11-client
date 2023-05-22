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
        </div>
    );
};

export default Home;