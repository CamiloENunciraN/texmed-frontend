
import './Opcion.css';
import Bar2 from './../Componente/Bar2.js'
import Barra_opcion from './../Componente/Barra_opcion.js'
import Modal_about from './../Componente/Modal/Modal_about.js';
import ContentData from '../Componente/ContentData.js';
import Div_bar from '../Componente/Div_bar.js';

function Opcion() {
    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <Barra_opcion></Barra_opcion>
            <Div_bar nombre = "Opciones"></Div_bar>
            <ContentData></ContentData>
            <Modal_about></Modal_about>
        </div>
    );
}

export default Opcion;