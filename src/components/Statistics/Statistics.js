import PropTypes from 'prop-types';

const StatisticsItem = ({ label, persentage})=> {
    <li class="item">
        <span class="label">{label}</span>
        <span class="percentage">{persentage}</span>
      </li>
};

export const Statistics = ({ data: { title, stats }}) => {
    return (<section className="statistics">
    <h2 className="title">{title}</h2>
  
    <ul className="stat-list">
      <StatisticsItem label={`${stats.label}`} persentage={`${stats.persentage}`}/>
      

    </ul>
  </section>

    )
}

Statistics.propTypes = {
 data: PropTypes.shape({
    title: PropTypes.string,
    stats: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
 }).isRequired,
};