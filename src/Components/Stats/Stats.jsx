import React from 'react';

const Stats = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className=" shadow-sm border border-gray-200  rounded-xl  p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">10</h2>
                <p className="text-gray-600 mt-2">Total Friends</p>
            </div>

            <div className=" shadow-sm border border-gray-200 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">3</h2>
                <p className="text-gray-600 mt-2">On Track</p>
            </div>

            <div className=" shadow-sm border border-gray-200 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">6</h2>
                <p className="text-gray-600 mt-2">Need Attention</p>
            </div>

            <div className=" shadow-sm border border-gray-200 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">12</h2>
                <p className="text-gray-600 mt-2">Interactions This Month</p>
            </div>

        </div>

    )
};

export default Stats;