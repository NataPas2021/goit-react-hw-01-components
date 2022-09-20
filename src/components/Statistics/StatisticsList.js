import { Statistics } from "./Statistics";

function StatisticsList({items}) {
<ul>
{items.map(({id,data}) => {
    return (
    <li key={id}>
        <Statistics
         title="Upload stats"
         stats={data} 
         />
    </li>
)})}
</ul>
}

export default StatisticsList;