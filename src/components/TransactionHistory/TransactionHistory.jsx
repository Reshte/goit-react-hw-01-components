import PropTypes from 'prop-types';
import { Table, TableHead, TableBody,TableColom} from './TransactionHistory.styled';

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
       <TableBody >
        {items.map(item => {
          return (
            <tr number='1' key={item.id}>
            <TableColom>{item.type}</TableColom>
            <TableColom>{item.amount}</TableColom>
            <TableColom>{item.currency}</TableColom>
          </tr>
          )
      })}
        </TableBody>
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