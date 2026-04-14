"use client"
import useFriends from '@/Hooks/useFriends';
import FriendCard from './FriendCard';
import Loading from '../Loading/Loading';



const Friends = () => {
    const { friends, loading } = useFriends()

    if (loading) return <Loading />


    return (
        <div className='mt-10 container mx-auto'>
            <h1 className='text-3xl font-bold my-5 text-green-950'>your Friends</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-4'>
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;