import './friendListStyle.css';
import friendsData from '../../data/friends.json';
import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = () => {
  return (
    <ul className="friend-list">
      {friendsData.map(el => {
        return <FriendListItem friends={el} key={el.id} />;
      })}
    </ul>
  );
};

export default FriendList;
