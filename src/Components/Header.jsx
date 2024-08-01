import React from 'react';
import Img1 from '../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  let startDescription = reactDescriptions[genRandomInt(2)];
  return (
    <div>
      {/* Test Commit1 by adding a Comment */}
      {/* Test Commit2 by adding a Comment */}
      <header>
        <img src={Img1} alt='Stylized atom' />
        <h1>React Essentials</h1>
        <p>
          {startDescription} React concepts you will need for almost any app you
          are going to build !
        </p>
      </header>
    </div>
  );
};

export default Header;
