

import CarouselBanner from "./CarouselBanner";
import GallerySec from "./GallerySec";

const Home = () => {
    return (
        <div>
            {/* Carousel Section */}
            <CarouselBanner></CarouselBanner>

            {/* Gallery Section */}
            <GallerySec></GallerySec>
        </div>
    );
};

export default Home;