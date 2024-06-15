
import Bar2 from './../Componente/Bar2.js'
import Barra_opcion from './../Componente/Barra_opcion.js'
import Modal_about from './../Componente/Modal/Modal_about.js';
import Div_bar from '../Componente/Div_bar.js';
import ContentList from '../Componente/ContentList.js';

function ClientList() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <Barra_opcion></Barra_opcion>
            <Div_bar nombre = "Listado de clientes:"></Div_bar>
            <ContentList></ContentList>
            <Modal_about></Modal_about>
        </div>
    );
}

export default ClientList;