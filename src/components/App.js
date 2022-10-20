import { Profile } from "./Profile/ProfileInfo/Profile";
import user from "./data/user.json";
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Statistics } from './StatisticsGeneral/Statistics/Statistics';
import { FriendList } from "./Friends/FriendList/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";

export const App = () => {
  return (
    <>
    <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    </div>
    <div>
      <Statistics title="Upload stats" stats={data} /> 
    </div>
    <div>
      <FriendList friends={friends} />;
    </div>
    <div>
      <TransactionHistory items={transactions} />;
    </div>
    </>
  );
};


