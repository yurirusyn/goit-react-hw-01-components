import './friendListItem.css';
import PropTypes from 'prop-types';

const FriendListItem = props => {
  const {
    friends: { avatar, name, isOnline },
  } = props;
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

// FriendListItem.defaultProps = {
//   name: 0,
// };
