import PropTypes from 'prop-types';

const ProfileDescription = props => {
  const { username, tag, location, avatar } = props;
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
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
