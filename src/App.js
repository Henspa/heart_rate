import './App.css';
import React, {useState} from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [rate, setRate] = useState(0);
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  function calculate(e) {
    e.preventDefault();
    setUpper((220 - age) * 0.85);
    setLower((220 - age) * 0.65);
  }

  return (
    <form onSubmit={calculate}>

      <h3>Heart rate limits calculator</h3>
      <div>
        <label>Age</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)}></input>
      </div>
      <div>
        <label>Heart rate limits</label>
          <output>{lower} - {upper}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
  );
}

export default App;
