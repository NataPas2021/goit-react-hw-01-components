import PropTypes from 'prop-types';
import { TableGrid, Table, TableHeadTitles, TableRow, TableItem } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
<TableGrid>
  <Table>
   <thead>
    <tr>
      <TableHeadTitles>Type</TableHeadTitles>
      <TableHeadTitles>Amount</TableHeadTitles>
      <TableHeadTitles>Currency</TableHeadTitles>
    </tr>
   </thead>
    <tbody>
    {items.map(({id, type, amount, currency}) => {
        return (
            <TableRow key={id}>
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </TableRow>
        )
    })}
    </tbody>
  </Table>
</TableGrid>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}