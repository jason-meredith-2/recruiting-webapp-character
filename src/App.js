import './App.css';
import AttributeTable from './components/AttributeTable';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          <AttributeTable />
        </div>
      </section>
    </div>
  );
}

export default App;
