
import './App.css';
import Bar from './Componente/Bar.js';
import Modal_about from './Componente/Modal/Modal_about.js';
import Modal_cambioPass from './Componente/Modal/Modal_cambioPass.js';
import Modal_login from './Componente/Modal/Modal_login.js';
import Modal_registrar from './Componente/Modal/Modal_registrar.js';
import Preview from './Componente/Preview.js';

function App() {
  return (
    <div className='fondo'>
      <Bar></Bar>
      <Preview></Preview>
      <Modal_about></Modal_about>
      <Modal_login></Modal_login>
      <Modal_registrar></Modal_registrar>
      <Modal_cambioPass></Modal_cambioPass>
    </div>
  );
}

export default App;
