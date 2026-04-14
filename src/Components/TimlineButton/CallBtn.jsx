"use client"
import { friendContext } from '@/Context/ContextProvider';
import { PhoneCall } from 'lucide-react';
import React, { useContext } from 'react';

const CallBtn = ({ matchedFriend }) => {
    const { setFriendData, friendData } = useContext(friendContext)
   
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const handleCall = () => {
        const newData = {
            ...matchedFriend,
            type: 'Call',
            time: formattedDate
        }
        setFriendData([...friendData, newData])
    }

    return (

        <div
            onClick={handleCall}
            className='text-center border border-gray-200  bg-white rounded-md py-2 flex justify-center items-center flex-col gap-2 cursor-pointer'>
            <PhoneCall />
            <p className='text-gray-500 text-xl'>Call</p>
        </div>

    );
};

export default CallBtn;