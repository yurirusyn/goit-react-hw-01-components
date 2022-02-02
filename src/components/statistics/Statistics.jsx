import s from './statisticsStyle.module.css';
import StatisticsListItem from '../statisticsListItem/StatisticsListItem';
import PropTypes from 'prop-types';

const Statistics = ({ data, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticsListItem
              key={id}
              label={label}
              percentage={percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
