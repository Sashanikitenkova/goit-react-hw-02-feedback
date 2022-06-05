import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div className={s.buttonFeedback}>
        {options.map(options => (
            <button type='button' key={options} onClick={() => onLeaveFeedback(options)}>{options}</button>
        ))}
    </div>
)

export default FeedbackOptions;