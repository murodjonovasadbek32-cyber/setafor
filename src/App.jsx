import { useState } from 'react';
import './App.css';

const lights = [
  { id: 'red', name: 'Qizil' },
  { id: 'yellow', name: 'Sariq' },
  { id: 'blue', name: 'Ko‘k' },
];

export default function App() {
  const [active, setActive] = useState('red');

  return (
    <main className="app">
      <p className="eyebrow">REACT SVETOFOR</p>
      <h1>Rangni tanlang.</h1>
      <p className="description">Doirani bosing — tanlangan chiroq yonadi.</p>

      <div className="traffic-light" role="group" aria-label="Svetofor chiroqlari">
        {lights.map((light) => (
          <button
            key={light.id}
            type="button"
            className={`light ${light.id} ${active === light.id ? 'on' : ''}`}
            aria-label={`${light.name} chiroq`}
            aria-pressed={active === light.id}
            onClick={() => setActive(light.id)}
          >
            <span>{light.name}</span>
          </button>
        ))}
      </div>

      <p className="status" role="status">
        {lights.find((light) => light.id === active).name} chiroq yondi
      </p>
    </main>
  );
}
