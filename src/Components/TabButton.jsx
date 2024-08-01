import React from 'react';
import { useState } from 'react';

const TabButton = ({ label, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{label}</button>
    </li>
  );
};

export default TabButton;
