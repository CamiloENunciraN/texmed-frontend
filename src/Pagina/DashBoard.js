
import './DashBoard.css';
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import DivBar from '../Componente/DivBar.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import { useVisualizadas, useRecientes} from './../Medida/Medida.js';

function DashBoard() {
  const id = sessionStorage.getItem('idUser');
  const medidaR = useRecientes(id);
  const medidaV = useVisualizadas(id);

  return (
    <div className='fondo'>
      <Bar2></Bar2>
      <BarraOpcion></BarraOpcion>
      <DivBar nombre = "Recientemente Creadas:"></DivBar>
      {medidaR}
      <DivBar nombre = "Recientemente Visualizadas:"></DivBar>
      {medidaV}
      <ModalAbout></ModalAbout>
    </div>
  );
}

export default DashBoard;