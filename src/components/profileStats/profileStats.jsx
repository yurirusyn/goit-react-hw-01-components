import PropTypes from 'prop-types';
import './profileStats.css';
const ProfileStats = props => {
  const {
    stats: { followers, views, likes },
  } = props;
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
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

ProfileStats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};
