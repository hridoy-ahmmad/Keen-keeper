
'use client'
import { friendContext } from '@/Context/ContextProvider';
import { Video } from 'lucide-react';
import React, { useContext } from 'react';

const VideoBtn = ({ matchedFriend }) => {
    const { setFriendData, friendData } = useContext(friendContext)
    const date = new Date();

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const handleVideo = () => {
        const newData = {
            ...matchedFriend,
            type: 'Video',
            time: formattedDate
        }
        setFriendData([...friendData, newData])
    }

    return (
        <div
            onClick={handleVideo}
            className='text-center border border-gray-200  bg-white rounded-md py-2 flex justify-center items-center flex-col gap-2 cursor-pointer'>
            <Video />
            <p className='text-gray-500 text-xl'>Video</p>
        </div>
    );
};

export default VideoBtn;