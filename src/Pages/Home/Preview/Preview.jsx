import photo from '../../../assets/rahat-pic.jpg';
import { FaUserCheck } from 'react-icons/fa';

const Preview = () => {
    return (
        <div className="my-20">
            <h2 className='text-5xl text-center font-semibold mb-4'>Sportoy Website Preview</h2>
            <p className="w-1/2 mx-auto text-center mb-6">Get a sneak peek of your website final look with Sportoy Web Preview. Easily assess design and content elements before launching, ensuring a visually appealing and user-friendly experience for your visitors</p>

            <div className="flex justify-center">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-warning">
                            <FaUserCheck className='w-20 p-0'></FaUserCheck>
                        </div>
                        <div className="stat-title">Total Seller</div>
                        <div className="stat-value text-warning">978</div>
                        <div className="stat-desc">25% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={photo} />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Preview;