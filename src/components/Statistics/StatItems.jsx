import styles from './Statistics.module.css';

const StatItems = ({ options }) => (
    Object.keys(options).map(id => (
       (<li key={id} className={styles.value}>{id}: {options[id]}</li>)
    ))
)
export default StatItems;