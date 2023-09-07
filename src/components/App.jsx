import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './Transaction/TransactionHistory';

import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        <Profile message="hello" {...user} />
      </>
      <>
        <Statistics stats={data} />
      </>
      <>
        <FriendsList friends={friends} />
      </>
      <>
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
};
