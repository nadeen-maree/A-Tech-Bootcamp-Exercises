import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Current time: {date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default CurrentTime;