"use client"
import ContactHis from '@/Components/ContactHis/ContactHis';
import NoTimeline from '@/Components/NoTimeLine/NoTimeLine';
import { friendContext } from '@/Context/ContextProvider';
import React, { useContext } from 'react';

const TimeLine = () => {
    const { friendData } = useContext(friendContext)


    return (
        <div className='container mx-auto md:mt-10 '>
            <h1 className='text-4xl font-bold text-green-950 my-4'> Timeline </h1>
            <div className='space-y-2'>
                {
                    friendData.length === 0 ? <NoTimeline /> : friendData.map((item, ind) => <ContactHis key={ind} item={item}></ContactHis>)
                }
            </div>
        </div>
    );
};

export default TimeLine;