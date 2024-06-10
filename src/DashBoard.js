
import './DashBoard.css';
import Bar from './Componente/Bar.js';
import Modal_about from './Componente/Modal/Modal_about.js';

function DashBoard() {
  return (
    <div className='fondo'>
      <Bar></Bar>
      <Modal_about></Modal_about>
    </div>
  );
}

export default DashBoard;