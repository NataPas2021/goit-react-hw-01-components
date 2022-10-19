import PropTypes from 'prop-types';
import {StatsInfo, StatsItem} from './ProfileStats.styled';

export const ProfileStats = ({ label , quantity }) => {
    return <StatsInfo>
      <StatsItem>{label}</StatsItem>
      <StatsItem>{quantity}</StatsItem>
    </StatsInfo>
}

ProfileStats.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.node.isRequired,
}