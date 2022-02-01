import './statisticsStyle.css';
import data from '../../data/data.json';
import StatisticsListItem from '../statisticsListItem/StatisticsListItem';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
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
