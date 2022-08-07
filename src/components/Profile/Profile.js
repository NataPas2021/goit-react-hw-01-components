import PropTypes from 'prop-types';

const Stats = ({ label , quantity }) => {
    return <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
}

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div className="profile">
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
      <Stats label="Followers:" quantity={`${stats.followers}`}/>
      <Stats label="Views:" quantity={`${stats.views}`}/>
      <Stats label="Likes:" quantity={`${stats.likes}`}/>
    </ul>
  </div>
    ) 
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.node.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired
}