import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
function App() {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
