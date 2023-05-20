import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {


    const [allToys, setAllToys] = useState([]);
    const [animals, setAnimels] = useState([]);
    const [dolls, setDolls] = useState([]);
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {

        fetch(`https://assignment-11-server-three-lemon.vercel.app/alltoys`)
            .then(res => res.json())
            .then(data => setAllToys(data))


        // const animal = allToys.filter(toy => toy.subCategory === "animals");
        // const doll = allToys.filter(toy => toy.subCategory === "dolls");
        // const electronic = allToys.filter(toy => toy.subCategory === "electronics");

        // setAnimels(animal);
        // setDolls(doll);
        // setElectronics(electronic);

    }, [])

    // const { image, _toyName, price, _id, rating } = allToys;

    console.log(allToys);



    return (
        <div className='text-center mt-10'>
            <Tabs>
                <TabList>
                    <Tab>Dolls</Tab>
                    <Tab>Animels</Tab>
                    <Tab>Electronic toys.</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid lg:flex gap-5  lg:ml-[200px] p-5'>

                        <div className="card w-96 glass  h-[400px]">
                            <figure><img src='https://i.ibb.co/1ZyJ3NW/doll1.jpg' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : animated Doll</h2>
                                <h2 className="card-title">price : $12.5</h2>
                                <h2 className="card-title"> <FaStar /> 4.6</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 glass  h-[400px]">
                            <figure><img src='https://i.ibb.co/XbZp8RZ/doll2.jpg' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : safari doll</h2>
                                <h2 className="card-title">price : $34.99</h2>
                                <h2 className="card-title"> <FaStar /> 4.7</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View details</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:flex gap-5  lg:ml-[200px] p-5' >

                        <div className="card w-96 glass border-2 h-[400px] ">
                            <figure><img src='https://i.ibb.co/gJHM8nN/animels1.jpg' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : Tortoise</h2>
                                <h2 className="card-title">price : $29.99</h2>
                                <h2 className="card-title">Rating :<FaStar /> 4.5</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 glass  h-[400px]">
                            <figure><img src='https://i.ibb.co/fGMSr4X/animals2.jpg' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name : kangaroo</h2>
                                <h2 className="card-title">peice :$49.99</h2>
                                <h2 className="card-title">Rating :<FaStar /> 5</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View details</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:flex gap-5  lg:ml-[200px] p-5'>

                        <div className="card w-96 glass  h-[400px]">
                            <figure><img src='https://i.ibb.co/yYC8WwH/e1.jpg' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Play Kitchen Set</h2>
                                <h2 className="card-title">peice :$59.99</h2>
                                <h2 className="card-title">Rating :<FaStar /> 4.9</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 glass  h-[400px]">
                            <figure><img src='https://i.ibb.co/PzzQc4z/e2.jpg' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Remote Control Car</h2>
                                <h2 className="card-title">price :$39.99</h2>
                                <h2 className="card-title">Rating :4.3</h2>
                                <h2 className="card-title">Rating :<FaStar /> 5</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View details</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;