import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableString, TableColom} from './TransactionHistory.styled';

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
        {items.map((item, index) => {
          console.log(items)
           return (
            <TableString number={index} key={item.id}>
            <TableColom>{item.type}</TableColom>
            <TableColom>{item.amount}</TableColom>
            <TableColom>{item.currency}</TableColom>
          </TableString>
          )
      })}
        </TableBody>
  </Table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  })  
}