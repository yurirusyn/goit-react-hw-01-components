import './transactionHistoryItemStyle.css';
const TransactionHistoryItem = props => {
  console.log(props);
  const {
    transactionHistory: { type, amount, currency },
  } = props;
  console.log(type);
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

export default TransactionHistoryItem;
