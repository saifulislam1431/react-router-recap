import React, { useState } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const Home = () => {
    const [show, setShow] = useState(false);
    console.log(show);
    const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
    ];
    return (
        <div>
            <h1>Home My</h1>
            <div>
                <PieChart height={800} width={800}>
                    <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>

            {
                show ? "" : <div className='text-center mb-6'>
                    <button className='btn btn-secondary' onClick={() => setShow(!show)}>Show More</button>
                </div>
            }


        </div>
    );
};

export default Home;