
import './DashBoard.css';
import Bar2 from './../Componente/Bar2.js'
import Barra_opcion from './../Componente/Barra_opcion.js'
import Div_bar from './../Componente/Div_bar.js'
import Modal_about from './../Componente/Modal/Modal_about.js';
import { useVisualizadas, useRecientes} from './../Medida/Medida.js';

function DashBoard() {
  sessionStorage.setItem('idUser', 1);
  const id = sessionStorage.getItem('idUser');
  const medidaV = useVisualizadas(id);
  const medidaR = useRecientes(id);
  return (
    <div className='fondo'>
      <Bar2></Bar2>
      <Barra_opcion></Barra_opcion>
      <Div_bar nombre = "Recientemente Creadas:"></Div_bar>
      {medidaR}
      <Div_bar nombre = "Recientemente Visualizadas:"></Div_bar>
      {medidaV}
      <Modal_about></Modal_about>
    </div>
  );
}

export default DashBoard;