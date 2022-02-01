import PropTypes from 'prop-types';
import s from './profileStats.module.css';
const ProfileStats = props => {
  const { followers, views, likes } = props;
  return (
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}> {followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}> {views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}> {likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
