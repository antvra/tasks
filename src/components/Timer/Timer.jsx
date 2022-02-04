import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addSeconds, format } from 'date-fns';

const Timer = ({ timer }) => {
  const [seconds, setSeconds] = useState(timer);
  const [timerActive, setTimerActive] = useState(false);
  useEffect(() => {
    if (seconds > 0 && timerActive) {
      const taskTimeout = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearTimeout(taskTimeout);
    }
    return null;
  }, [seconds, timerActive]);

  const helperDate = addSeconds(new Date(0), seconds);

  return (
    <span className="description">
      <button type="button" className="icon icon-play" aria-label="play" onClick={() => setTimerActive(true)} />
      <button type="button" className="icon icon-pause" aria-label="pause" onClick={() => setTimerActive(false)} />
      {format(helperDate, 'mm:ss')}
    </span>
  );
};

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
};

export default Timer;
