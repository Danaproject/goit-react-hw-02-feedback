import FeedbackStats from './FeedbackStats';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => {
    return (
        <ul className={styles.statistics}>
            <FeedbackStats options={options} />
            <li className={styles.value}>Total: {total}</li>
            <li className={styles.value}>Positive feedback: {positivePercentage}%</li>
        </ul>
    );
}
  
Statistics.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        }).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;