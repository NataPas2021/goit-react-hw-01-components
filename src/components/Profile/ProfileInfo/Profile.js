import PropTypes from 'prop-types';
import { ProfileStats } from '../ProfileStats/ProfileStats';
import { ProfileWrapper, UserInfo, UserImage, UserData, DataItem, StatsList } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<ProfileWrapper>
    <UserInfo>
      <UserImage
        src={avatar}
        alt="User avatar"
        width="60" height="60"
      />
      <UserData>
        <DataItem>{username}</DataItem>
        <DataItem>{tag}</DataItem>
        <DataItem>{location}</DataItem>
      </UserData>
    </UserInfo>
  
    <StatsList>
      <ProfileStats label="Followers:" quantity={`${stats.followers}`}/>
      <ProfileStats label="Views:" quantity={`${stats.views}`}/>
      <ProfileStats label="Likes:" quantity={`${stats.likes}`}/>
    </StatsList>
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