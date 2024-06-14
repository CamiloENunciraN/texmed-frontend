
import './DashBoard.css';
import Bar2 from './../Componente/Bar2.js'
import Barra_opcion from './../Componente/Barra_opcion.js'
import Div_bar from './../Componente/Div_bar.js'
import Medida_dash from '../Componente/Medida_dash.js';
import Modal_about from './../Componente/Modal/Modal_about.js';

function DashBoard() {
  return (
    <div className='fondo'>
      <Bar2></Bar2>
      <Barra_opcion></Barra_opcion>
      <Div_bar nombre = "Recientemente Creadas:"></Div_bar>
      <Medida_dash ></Medida_dash>
      <Div_bar nombre = "Recientemente Visualizadas:"></Div_bar>
      <Medida_dash ></Medida_dash>
      <Modal_about></Modal_about>
    </div>
  );
}

export default DashBoard;