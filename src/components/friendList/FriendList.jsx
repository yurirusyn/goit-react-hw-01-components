import s from './friendListStyle.module.css';
import friendsData from '../../data/friends.json';
import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = () => {
  return (
    <ul className={s.friendList}>
      {friendsData.map(({ id, ...el }) => {
        return <FriendListItem key={id} {...el} />;
      })}
    </ul>
  );
};

export default FriendList;
