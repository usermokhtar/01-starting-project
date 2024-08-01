import Header from './Components/Header/Header';
import CoreConcept from './Components/CoreConcept';
import { CORE_CONCEPTS } from './data.js';

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
      </main>
    </div>
  );
}

export default App;
