import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './Friends/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: '120px'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} /> 
      <FriendList friends={friends} />
    </div>
  );
};
