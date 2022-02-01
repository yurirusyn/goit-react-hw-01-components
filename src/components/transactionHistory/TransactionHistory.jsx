import './transactionHistory.css';
import TransactionHistoryItem from '../transactionHistoryItem/transactionHistoryItem';
import transactions from '../../data/transactions.json';

const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map(({ id, ...item }) => {
        return <TransactionHistoryItem key={id} {...item} />;
      })}
    </table>
  );
};

export default TransactionHistory;
