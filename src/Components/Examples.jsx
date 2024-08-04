import React from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Section from './Section.jsx';
const Examples = () => {
  const [text, setText] = useState('components'); // Initialize state with a default value

  const onSelect = (newText) => {
    setText(newText.toLowerCase()); // Ensure the key matches the EXAMPLES object
  };
  return (
    <div>
      <Section title='Examples' id='examples'>
        <menu>
          {Object.keys(EXAMPLES).map((example) => (
            <TabButton
              key={example}
              label={example}
              onSelect={() => onSelect(example)}
            />
          ))}
        </menu>
        <div id='tab-content'>
          <h3>
            {EXAMPLES[text] ? EXAMPLES[text].title : 'No content available'}
          </h3>
          <p>{EXAMPLES[text]?.description}</p>
          <pre>
            <code>{EXAMPLES[text]?.code}</code>
            {EXAMPLES[text]?.code && <h4>Code Example</h4>}
          </pre>
        </div>
      </Section>
    </div>
  );
};

export default Examples;
