import PropTypes from 'prop-types';
import { ProfileStats } from '../ProfileStats/ProfileStats';
import { ProfileWrapper } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<ProfileWrapper className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
        width="60" height="60"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <ProfileStats label="Followers:" quantity={`${stats.followers}`}/>
      <ProfileStats label="Views:" quantity={`${stats.views}`}/>
      <ProfileStats label="Likes:" quantity={`${stats.likes}`}/>
    </ul>
  </ProfileWrapper>
    ) 
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.node.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired
}