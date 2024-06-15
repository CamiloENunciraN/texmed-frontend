
import Bar2 from './../Componente/Bar2.js'
import Barra_opcion from './../Componente/Barra_opcion.js'
import Modal_about from './../Componente/Modal/Modal_about.js';
import Div_bar from '../Componente/Div_bar.js';
import ContentSearch from '../Componente/ContentSearch.js';

function ClientSearch() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <Barra_opcion></Barra_opcion>
            <Div_bar nombre = "Busqueda de clientes:"></Div_bar>
            <ContentSearch></ContentSearch>
            <Modal_about></Modal_about>
        </div>
    );
}

export default ClientSearch;