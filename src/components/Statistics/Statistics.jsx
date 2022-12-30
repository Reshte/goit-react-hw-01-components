import PropTypes from 'prop-types';
import{Section,Title, List, Item, Label, Percentage } from './Statistics.styled'


export const Statistics = ({ title, stats }) => {
     return(
<Section>
  {title && <Title>{title}</Title>}
    <List>
   {stats.map(info => {return (
    <Item key = {info.id}>
      <Label>{info.label}</Label>
      <Percentage> {info.percentage}</Percentage>
    </Item>
   )})}
  </List>
</Section>
)}

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}