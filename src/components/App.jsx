import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendItems from './FriendItems/FriendItems';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'



export const App = () => {
  return (
    <div
      style={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
     <Statistics title="Upload stats" stats={data} />
     <FriendItems friends={friends} />
        </div>
       
  );
};
