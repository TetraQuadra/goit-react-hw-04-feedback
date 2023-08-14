import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.statsBlock}>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
      <p className={styles.total}>total {total}</p>
      <p
        style={{
          color: `rgb(${
            100 - positivePercentage
          }%, ${positivePercentage}%, 0%)`,
        }}
        className={styles.positiveFeedback}
      >
        Positive feedback {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
