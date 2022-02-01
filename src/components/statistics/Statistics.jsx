import s from './statisticsStyle.module.css';
import data from '../../data/data.json';
import StatisticsListItem from '../statisticsListItem/StatisticsListItem';

const Statistics = () => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
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
