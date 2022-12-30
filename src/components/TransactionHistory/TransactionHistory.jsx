import PropTypes from 'prop-types';
import { Table, TableHead} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
<Table>
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
      </TableHead>
       <tbody >
      {items.map(item => {return(
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
          )
      })}
        </tbody>
  </Table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  })  
}