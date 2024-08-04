import React from 'react';

const Section = ({ tile, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{tile}</h2>
      {children}
      {/* Add any additional props as needed */}
    </section>
  );
};

export default Section;
