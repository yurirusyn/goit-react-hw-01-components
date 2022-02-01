import s from './friendListItem.module.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FriendsStatus = styled.span`
  background-color: ${props => (props.isOnline ? 'Green' : 'DarkRed')};
`;

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <li className={s.item}>
      <FriendsStatus isOnline={isOnline}>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </FriendsStatus>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
