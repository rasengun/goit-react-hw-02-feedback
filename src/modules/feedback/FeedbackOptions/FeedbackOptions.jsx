import s from '../feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(option => (
    <button
      key={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      className={s.button}
    >
      {option}
    </button>
  ));
  return <div className={s.buttonsWrapper}>{elements}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
