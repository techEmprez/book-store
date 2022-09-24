import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 70;
const ProgressBar = () => (
  <div style={{ width: 100, height: 100, marginRight: '30px' }}>
    <CircularProgressbar
      value={percentage}
      styles={buildStyles({
        strokeLinecap: 'butt',
      })}
      text={`${percentage}%`}
    />

  </div>
);

export { ProgressBar, percentage };
