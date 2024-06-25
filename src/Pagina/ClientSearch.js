
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import DivBar from '../Componente/DivBar.js';
import ContentSearch from '../Componente/ContentSearch.js';

function ClientSearch() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <BarraOpcion></BarraOpcion>
            <DivBar nombre = "Busqueda de clientes:"></DivBar>
            <ContentSearch></ContentSearch>
            <ModalAbout></ModalAbout>
        </div>
    );
}

export default ClientSearch;