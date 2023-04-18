import React from 'react';
import './App.css';
import AttributeTable from './components/AttributeTable';
import CharacterClass from './components/CharacterClass';
import SkillsTable from './components/SkillsTable';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function App() {
  const characterClasses = () => {
    return Object.keys(CLASS_LIST).map(characterClass => {
      return (<CharacterClass name={characterClass} />)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          <AttributeTable />
          {characterClasses()}
          <SkillsTable />
        </div>
      </section>
    </div>
  );
}

export default App;
