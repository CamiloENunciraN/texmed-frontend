
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import DivBar from '../Componente/DivBar.js';
import {useListadoC} from '../Cliente/Cliente.js';

function ClientList() {

    const id = sessionStorage.getItem('idUser');
    const listaClientes = useListadoC(id);

    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <BarraOpcion></BarraOpcion>
            <DivBar nombre = "Listado de clientes:"></DivBar>
            {listaClientes}
            <ModalAbout></ModalAbout>
        </div>
    );
}

export default ClientList;