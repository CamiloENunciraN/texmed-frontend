
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import DivBar from '../Componente/DivBar.js';
import ClientData from '../Componente/ClientData.js';
import MedidaData from '../Componente/MedidaData.js';
import MedidaDetalle from '../Componente/MedidaDetalle.js';

function ShowMedida() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <BarraOpcion></BarraOpcion>
            <DivBar nombre = "Datos del cliente:"></DivBar>
            <ClientData></ClientData>
            <DivBar nombre = "Datos de la medida:"></DivBar>
            <MedidaData></MedidaData>
            <DivBar nombre = "Detalles:"></DivBar>
            <MedidaDetalle></MedidaDetalle>
            <ModalAbout></ModalAbout>
        </div>
    );
}

export default ShowMedida;