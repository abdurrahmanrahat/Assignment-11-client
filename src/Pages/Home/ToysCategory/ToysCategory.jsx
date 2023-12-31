import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const ToysCategory = () => {
    const [toggle, setToggle] = useState(null);
    const [skateboardToys, setSkateboardToys] = useState([]);
    const [golfsetToys, setGolfsetToys] = useState([]);
    const [plasticToys, setPlasticToys] = useState([]);

    const updateToggle = id => {
        setToggle(id);
    }

    // load data
    useEffect(() => {
        fetch('https://assignment-11-server-six-lovat.vercel.app/skateboardToys')
            .then(res => res.json())
            .then(data => setSkateboardToys(data))
    }, [])

    useEffect(() => {
        fetch('https://assignment-11-server-six-lovat.vercel.app/golfsetToys')
            .then(res => res.json())
            .then(data => setGolfsetToys(data))
    }, [])

    useEffect(() => {
        fetch('https://assignment-11-server-six-lovat.vercel.app/plasticToys')
            .then(res => res.json())
            .then(data => setPlasticToys(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl text-center font-semibold mb-8'>Shop by Sportoy Category</h2>

            <div>
                <div className="btn-group flex justify-center">
                    <button onClick={() => updateToggle(1)} className="btn">Skateboard</button>
                    <button onClick={() => updateToggle(2)} className="btn">Golf Set</button>
                    <button onClick={() => updateToggle(3)} className="btn">Plastic Toys</button>
                </div>

                <div className={toggle === 1 || toggle === null ? 'block' && 'grid md:grid-cols-2' : 'hidden'}>
                    {
                        skateboardToys.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}
                        ></ToyCard>)
                    }
                </div>
                <div className={toggle === 2 || toggle === null ? 'block' && 'grid md:grid-cols-2' : 'hidden'}>
                    {
                        golfsetToys.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}
                        ></ToyCard>)
                    }
                </div>
                <div className={toggle === 3 || toggle === null ? 'block' && 'grid md:grid-cols-2' : 'hidden'}>
                    {
                        plasticToys.map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}
                        ></ToyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToysCategory;