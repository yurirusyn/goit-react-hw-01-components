import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import Container from './components/container/Container';

function App() {
  return (
    <Container>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </Container>
  );
}

export default App;
