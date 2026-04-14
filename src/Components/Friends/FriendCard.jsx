import Image from 'next/image';
import React from 'react';

const FriendCard = ({ friend }) => {

    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend

    console.log();


    return (
        <div className=" p-4">
            {/* Main Card Container */}
            <div className="bg-white w-full rounded-2xl shadow-sm border border-gray-100   p-8 flex flex-col items-center">

                {/* Profile Image Wrapper */}
                <div className="relative w-32 h-32 mb-6">
                    {/* <Image
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200"
                        alt="Emma Wilson"
                        className="rounded-full object-cover w-full h-full border-4 border-white shadow-sm"
                    /> */}
                </div>

                {/* Name */}
                <h2 className="text-[#2D3748] text-2xl font-bold mb-1">
                    {name}
                </h2>

                {/* Timestamp */}
                <span className="text-[#718096] text-sm mb-4">
                    {days_since_contact}d ago
                </span>

                {/* Badges Container */}
                <div className="flex flex-col gap-3 items-center">
                    {/* Family Tag */}
                    <div className='flex gap-1 '>
                        {
                            tags.map((tag, ind) =>
                                <div key={tag.ind}><p className="bg-[#D1FAE5] text-[#065F46] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                                    {tag}
                                </p> </div>)
                        }
                    </div>


                    {/* Overdue Tag */}
                    <span className="bg-[#EF4444] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                        Overdue
                    </span>
                </div>

            </div>
        </div>
    );
};

export default FriendCard;