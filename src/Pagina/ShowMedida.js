
import Bar2 from './../Componente/Bar2.js'
import Barra_opcion from './../Componente/Barra_opcion.js'
import Modal_about from './../Componente/Modal/Modal_about.js';
import Div_bar from '../Componente/Div_bar.js';
import ClientData from '../Componente/ClientData.js';
import MedidaData from '../Componente/MedidaData.js';
import MedidaDetalle from '../Componente/MedidaDetalle.js';

function ShowMedida() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <Barra_opcion></Barra_opcion>
            <Div_bar nombre = "Datos del cliente:"></Div_bar>
            <ClientData></ClientData>
            <Div_bar nombre = "Datos de la medida:"></Div_bar>
            <MedidaData></MedidaData>
            <Div_bar nombre = "Detalles:"></Div_bar>
            <MedidaDetalle></MedidaDetalle>
            <Modal_about></Modal_about>
        </div>
    );
}

export default ShowMedida;