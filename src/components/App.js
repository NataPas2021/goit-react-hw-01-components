import { Profile } from "./Profile/ProfileInfo/Profile";
import user from "../user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json"

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
      {data.map((data, id) => (
        <Statistics key={id} data={data} />
      ))}
      </div>
    </div>
  );
};
