import FeedbackButton from './FeedbsckButton';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <ul className={styles.FeedbackOptions}>
      <FeedbackButton options={options} onLeaveFeedback={onLeaveFeedback} />
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;