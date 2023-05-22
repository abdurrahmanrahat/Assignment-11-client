// import IconImage from '../../../assets/icon-image.png'
import gallery1 from '../../../assets/gellaryImage/gallery1-min.jpg';
// import gallery2 from '../../../assets/gellaryImage/gallery2-min.jpg';
import gallery3 from '../../../assets/gellaryImage/gallery3-min.jpg';
import gallery4 from '../../../assets/gellaryImage/gallery4-min.jpg';
import gallery5 from '../../../assets/gellaryImage/gallery5-min.jpg';
import gallery6 from '../../../assets/gellaryImage/gallery6-min.jpg';
// import gallery7 from '../../../assets/gellaryImage/gallery7-min.jpg';
// import gallery8 from '../../../assets/gellaryImage/gallery8-min.jpg';
import gallery9 from '../../../assets/gellaryImage/gallery9-min.jpg';

const GallerySec = () => {
    return (
        <div className='my-16'>
            <h2 className='text-5xl text-center font-semibold mb-4'>Gallery Section</h2>
            {/* <div className='flex justify-center'>
                <hr className='text-gray-600 w-25 text-end' />
                <img className='' src={IconImage} alt="" />
                <hr className='text-gray-600 w-25 text-start' />
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-80' src={gallery1} alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-80' src={gallery3} alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-80' src={gallery4} alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-80' src={gallery5} alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-80' src={gallery6} alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-80' src={gallery9} alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default GallerySec;