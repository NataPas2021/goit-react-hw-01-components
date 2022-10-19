import PropTypes from 'prop-types';
import { InfoBlock, ItemInfo, ListItem } from './StatisticsList.styled';

export const StatisticsList = ({stats}) => {
    return (
    <InfoBlock>       
          {stats.map(({id, label, percentage}) => (
           <ListItem key={id}>
             <ItemInfo>{label}</ItemInfo>
             <span>{percentage + '%'}</span>
           </ListItem>
           ))}             
    </InfoBlock>
    )
}


StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
  
}