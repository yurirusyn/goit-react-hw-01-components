import PropTypes from 'prop-types';
import './statisticsListItemStyle.css';
const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

export default StatisticsListItem;

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
