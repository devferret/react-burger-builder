import React from 'react';

import classes from './Spinner.css';

const spinner = () => (
  <div className={classes.Spinner}>
    <div className={classes.Dot1} />
    <div className={classes.Dot2} />
  </div>
);

export default spinner;
