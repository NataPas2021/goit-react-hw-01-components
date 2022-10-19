import PropTypes from 'prop-types';
import {GrStatusGoodSmall} from "react-icons/gr";
import { IconStatus } from './FriendListItem.styled';

export const FriendListItem = ({friend: {avatar, isOnline, name}}) => {
    return (
      <>
      
      <IconStatus isOnline={isOnline}>
        <GrStatusGoodSmall/>   
      </IconStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
      </>
    )
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })  
}
