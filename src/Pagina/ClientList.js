
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import DivBar from '../Componente/DivBar.js';
import ContentList from '../Componente/ContentList.js';

function ClientList() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <BarraOpcion></BarraOpcion>
            <DivBar nombre = "Listado de clientes:"></DivBar>
            <ContentList></ContentList>
            <ModalAbout></ModalAbout>
        </div>
    );
}

export default ClientList;