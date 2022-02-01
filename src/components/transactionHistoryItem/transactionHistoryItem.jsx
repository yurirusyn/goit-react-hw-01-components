import s from './transactionHistoryItemStyle.module.css';
import PropTypes from 'prop-types';
const TransactionHistoryItem = props => {
  const { type, amount, currency } = props;
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

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
