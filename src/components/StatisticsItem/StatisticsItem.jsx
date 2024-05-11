import styled from './Statistics.module.css';


export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <li className={styled.item}>
      {icon}
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};
