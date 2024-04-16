import React, { useState, useEffect } from 'react';

const Alert = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Set the duration for the alert to remain visible (3000 milliseconds = 3 seconds)

    return () => clearTimeout(timer); // Cleanup function to clear the timer on unmount
  }, []);

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' ,zIndex:'1',backgroundColor:'green ',borderRadius:'10px',color:'white'}}
     className={`alert ${visible ? 'show' : 'hide'}`}>
      {message}
    </div>
  );
};

export default Alert;
