import userData from '../../data/user.json';
import ProfileStats from '../profileStats/profileStats';
import ProfileDescription from '../profileDescription/ProfileDescription';
import './profileStyle.css';
const Profile = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div className="profile">
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats {...stats} />
    </div>
  );
};

export default Profile;
