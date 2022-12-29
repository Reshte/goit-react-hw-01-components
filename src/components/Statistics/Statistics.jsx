import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {
     return(
<section className="statistics">
    {title?? <h2 className="title">{title}</h2>}
    <ul className="stat-list">
   {stats.map(info => {return (
    <li key = {info.id} className="item">
      <span className="label">{info.label}</span>
     <span className="percentage"> {info.percentage}</span>
    </li>
   )})}
  </ul>
</section>
)}

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}