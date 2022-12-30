import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from "components/FriendList/FriendList"
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory"

import user from '../user.json';
import data from '../data.json';
import friends from "../friends.json"
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '200vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexDirection: 'column',
        color: '#010101',
        fontFamily: 'Roboto',
        fontWeight: '100',
        fontSize: '24px',
        backgroundColor: 'grey',
             }}
    >
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />

  
      <Statistics title="upload stats" stats={data} /> 
      
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
};
