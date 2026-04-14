"use client"
import ContactHis from '@/Components/ContactHis/ContactHis';
import { friendContext } from '@/Context/ContextProvider';
import React, { useContext } from 'react';

const TimeLine = () => {
    const { friendData } = useContext(friendContext)


    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl font-bold text-green-950'> timeline </h1>
            <div className='space-y-2'>
                {
                    friendData.map((item, ind) => <ContactHis key={ind} item={item}></ContactHis>)
                }
            </div>
        </div>
    );
};

export default TimeLine;