import React, { useState, useEffect } from 'react';

const Loading = ({ isLoading, children}) => { 
  const [showChildren, setShowChildren] = useState(false);
  const [displayLoading, setDisplayLoading] = useState(true); 
  const delay = 2000 ;
  useEffect(() => {
    let timer;
    if (isLoading) {
      setShowChildren(false);
      setDisplayLoading(true); 
    } else {
      timer = setTimeout(() => {
        setShowChildren(true); 
        setDisplayLoading(false); 
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return (
    <>
      {displayLoading && <p>Loading...</p>} 
      {!displayLoading && showChildren && children} 
    </>
  );
};

export default Loading;
