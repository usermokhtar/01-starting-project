import Header from './Components/Header/Header';
import CoreConcept from './Components/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import TabButton from './Components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('components'); // Initialize state with a default value

  const onSelect = (newText) => {
    setText(newText.toLowerCase()); // Ensure the key matches the EXAMPLES object
  };

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
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
        </section>
      </main>
    </div>
  );
}

export default App;
