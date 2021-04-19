import styles from './FeedbackOptions.module.css';

const FeedbackButton = ({ options, onLeaveFeedback }) => {
  return (
      Object.keys(options).map(id => (
        (<li key={id}><button data-id={id} onClick={onLeaveFeedback} className={styles.button}>{id}</button></li>)
      ))
    );
  }

export default FeedbackButton;