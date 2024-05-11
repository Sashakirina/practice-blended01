import style from './CryptoHistory.module.css';
import { formatNewDate } from 'helpers/formatDate';

 const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({items}) => {
  return <table className={style.table}>
  <thead className={style.thead}>
      <tr>
        {tableHeaders.map(el => {
          return <th className={style.th} key={el}>{el}</th>
        }) }
    
    </tr>
  </thead>

    <tbody>
      {items.map((el, index) => { 
        return (<tr className={style.tr} key={el.id}>
          <td className={style.td}>{index+1}</td>
          <td className={style.td}>{el.price}</td>
          <td className={style.td}>{el.amount }</td>
      <td className={style.td}>{formatNewDate(el.date)}</td>
    </tr>)
      }) }
 
  
  </tbody>
</table>;
};
