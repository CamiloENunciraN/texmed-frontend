
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import DivBar from '../Componente/DivBar.js';
import ContentSearch from '../Componente/ContentSearch.js';
import {useCliente} from '../Cliente/Cliente'

function ClientSearch() {

    const id = sessionStorage.getItem('idUser');
    const nombre = sessionStorage.getItem('busqueda');
    const clientebusqueda = useCliente(nombre, id);

    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <BarraOpcion></BarraOpcion>
            <DivBar nombre = "Busqueda de clientes:"></DivBar>
            {clientebusqueda}
            <ModalAbout></ModalAbout>
        </div>
    );
}

export default ClientSearch;