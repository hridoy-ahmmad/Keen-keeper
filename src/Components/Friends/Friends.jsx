"use client"
import useFriends from '@/Hooks/useFriends';
import React, { use } from 'react';

const Friends = () => {
    const friends = useFriends()
    console.log(friends.friends);

    return (
        <div>
            Friends
        </div>
    );
};

export default Friends;