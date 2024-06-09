
import './App.css';
import Bar from './Componente/Bar.js';
import Modal_about from './Componente/Modal_about.js';
import Preview from './Componente/Preview.js';

function App() {
  return (
    <div className='fondo'>
      <Bar></Bar>
      <Preview></Preview>
      <Modal_about></Modal_about>
    </div>
  );
}

export default App;
