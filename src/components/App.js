import { Profile } from "./Profile/ProfileInfo/Profile";
import user from "../user.json";
//import { Statistics } from "./Statistics/Statistics";
import data from "../data.json"
import StatisticsList from "./Statistics/StatisticsList";

export const App = () => {
  return (
    <div>
      <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      </div>
      
      <div>
      {data.map((data, id, title) => (
        <StatisticsList key={id} title="Upload stats" stats={data} /> &&
        <StatisticsList key={id} stats={data} />
      ))}
      </div>
    </div>
  );
};
