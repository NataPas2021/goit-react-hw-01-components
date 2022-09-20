import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return (<section className="statistics">
    {title &&
    <h2 className="title">{title}</h2>}
  
    <ul className="stat-list">
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}%</span>
    </li>
    </ul>
  </section>

    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
 };