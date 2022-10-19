import PropTypes from 'prop-types';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import {WrapperStatistics, TitleContainer, Title} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
  return (
    <WrapperStatistics>
      <TitleContainer>
       {title && <Title>{title}</Title>}
      </TitleContainer>
     <StatisticsList stats={stats} /> 
    </WrapperStatistics>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number  
  }).isRequired
  )}
