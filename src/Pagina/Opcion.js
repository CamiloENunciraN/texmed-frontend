
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import ContentData from '../Componente/ContentData.js';
import DivBar from '../Componente/DivBar.js';

function Opcion() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <BarraOpcion></BarraOpcion>
            <DivBar nombre = "Opciones:"></DivBar>
            <ContentData></ContentData>
            <ModalAbout></ModalAbout>
        </div>
    );
}

export default Opcion;