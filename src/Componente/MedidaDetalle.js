import React from 'react';
import './MedidaDetalle.css';
import Button_one from './Button_one';

function MedidaDetalle() {
    return (
        <section className="contenDetalle">
            <div className='contenDataM'>
                <div>
                    <p>Tipo Bolsillo:</p>
                    <select id="tbolsillo" className='inputFormOpciones'>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                        <option value="Tradicional">Tradicional</option>
                        <option value="Lateral">Lateral</option>
                        <option value="Pecho">Pecho</option>
                        <option value="Trasero">Trasero</option>
                        <option value="Parche">Parche</option>
                    </select>
                </div>
                <div>
                    <p>Tipo Manga:</p>
                    <select id="tmanga" className='inputFormOpciones'>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                        <option value="Tradicional">Tradicional</option>
                        <option value="3/4">3/4</option>
                        <option value="Campana">Campana</option>
                        <option value="Reglan">Reglan</option>
                        <option value="Abullonada">Abullonada</option>
                        <option value="Francesa">Francesa</option>
                        <option value="Sastreria">Sastreria</option>
                    </select>
                </div>
                <div>
                    <p>Tipo Cuello:</p>
                    <select id="tcuello" className='inputFormOpciones'>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                        <option value="Tradicional">Tradicional</option>
                        <option value="Redondo">Redondo</option>
                        <option value="En V">En V</option>
                        <option value="Cisne">Cisne</option>
                        <option value="Barco">Barco</option>
                        <option value="Cerrado">Cerrado</option>
                        <option value="Tortuga">Tortuga</option>
                        <option value="Mao">Mao</option>
                        <option value="Doble">Doble</option>
                        <option value="Polo">Polo</option>
                    </select>
                </div>
                <div>
                    <p>Tipo Botones:</p>
                    <select id="tbotones" className='inputFormOpciones'>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                        <option value="Tradicional">Tradicional</option>
                        <option value="Pequeno">Pequeno</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Grande">Grande</option>
                        <option value="Invisible">Invisible</option>
                        <option value="Presion">Presion</option>
                        <option value="Automatico">Automatico</option>
                        <option value="Iman">Iman</option>
                    </select>
                </div>
                <div>
                    <p>Tipo Pretina:</p>
                    <select id="tpretina" className='inputFormOpciones'>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                        <option value="Tradicional">Tradicional</option>
                        <option value="Simple">Simple</option>
                        <option value="Doble">Doble</option>
                        <option value="Triple">Triple</option>
                        <option value="Cierre">Cierre</option>
                        <option value="Apertura">Apertura</option>
                    </select>
                </div>
                <div>
                    <p>Tipo Cinturon:</p>
                    <select id="tcinturon" className='inputFormOpciones'>
                        <option value="No">No</option>
                        <option value="Si">Si</option>
                        <option value="Tradicional">Tradicional</option>
                        <option value="Nylon">Nylon</option>
                        <option value="Elastano">Elastano</option>
                        <option value="Gamusa">Gamusa</option>
                        <option value="Seda">Seda</option>
                        <option value="Cinta">Cinta</option>
                    </select>
                </div>
            </div>
            <div className='contenDataD'>
                <div>
                    <p>Anotaciones:</p>
                    <textarea id='fanotaciones' type='text' maxLength={500} className='inputFormAnotaciones'></textarea>
                </div>
                <Button_one nombre="Guardar" onClick={guardarMedida}></Button_one>
            </div>
        </section>
    );
}

const guardarMedida = () => {

}



export default MedidaDetalle;