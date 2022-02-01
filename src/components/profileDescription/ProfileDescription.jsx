import PropTypes from 'prop-types';
import s from './profileDescription.module.css';

const ProfileDescription = props => {
  const { username, tag, location, avatar } = props;
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className={s.avatar} />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
};

export default ProfileDescription;

ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
