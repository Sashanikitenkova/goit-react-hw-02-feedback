import s from './Statistics.module.css';

const Statistic = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <ul className={s.statistics}>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{positivePercentage}%</li>
        </ul>
    </div>
)

export default Statistic;