import React from 'react';

const TabButton = ({ label }) => {
  let handelClick = () => {
    console.log('Hello World!');
  };
  return (
    <li>
      <button
        onClick={() => {
          handelClick();
        }}
      >
        {label}
      </button>
    </li>
  );
};

export default TabButton;
