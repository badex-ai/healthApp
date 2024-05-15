import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {


   const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous route
  };

  return (
    <div>
      <button className="cursor-pointer" onClick={handleGoBack}>Back</button>
      {/* ... */}
    </div>
  );
}

export default BackBtn