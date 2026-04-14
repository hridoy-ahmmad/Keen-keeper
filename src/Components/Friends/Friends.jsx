"use client"
import useFriends from '@/Hooks/useFriends';
import FriendCard from './FriendCard';

const Friends = () => {
    const friendsData = useFriends()
    const frnds = friendsData.friends
    console.log(frnds);


    return (
        <div>
            <h1>your Friends</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-4'>
                {
                    frnds.map(friend => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;