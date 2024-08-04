import React from 'react';
import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from '../Components/CoreConcept.jsx';
const CoreConcepts = () => {
  return (
    <div>
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CoreConcepts;
