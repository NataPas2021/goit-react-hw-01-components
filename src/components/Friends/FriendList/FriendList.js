import PropTypes from 'prop-types';
import { FriendListItem } from "../FriendListItem/FriendListItem"
import { ListWrapper } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
    <ul className="friend-list">
        {friends.map((friend) => (
        <ListWrapper key={friend.id} className="item">
          <FriendListItem friend={friend} />
        </ListWrapper>
        
        ))} 
        
    </ul>   
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    }))
}
