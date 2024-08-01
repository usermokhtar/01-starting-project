import Header from './Components/Header/Header';
import CoreConcept from './Components/CoreConcept';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './Components/TabButton.jsx';

function App() {
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
            <TabButton label='Components' />
            <TabButton label='JSX' />
            <TabButton label='Props' />
            <TabButton label='State' />
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
