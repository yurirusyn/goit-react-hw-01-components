import './statisticsStyle.css';
import data from '../../data/data.json';
import StatisticsListItem from '../statisticsListItem/StatisticsListItem';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(el => {
          return (
            <StatisticsListItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
