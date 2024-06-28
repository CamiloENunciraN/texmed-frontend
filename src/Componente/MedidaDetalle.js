import React from 'react';
import './MedidaDetalle.css';
import ButtonOne from './ButtonOne';
import {registrarMedida, modificarMedida} from '../Medida/Medida'
import { useNavigate } from 'react-router-dom';

function MedidaDetalle(data, metodo) {

const navigate = useNavigate();

if(data.metodo==="mostrar" && data.data.length!==0){
    const seleccionOpcion = ()=>{
        document.getElementById('tbolsillo').value = data.data.tipo_bolsillo;
        document.getElementById('tmanga').value = data.data.tipo_manga;
        document.getElementById('tcuello').value = data.data.tipo_cuello;
        document.getElementById('tbotones').value = data.data.tipo_botones;
        document.getElementById('tpretina').value = data.data.tipo_pretina;
        document.getElementById('tcinturon').value = data.data.tipo_cinturon;
        document.getElementById('fanotaciones').value = data.data.anotaciones;
    } 
seleccionOpcion();
}

const guardarMedida = () => {
    //traer campos cliente
    const nombre = document.getElementById('formNombre').value;
    const celular = document.getElementById('formTelefono').value;
    const direccion = document.getElementById('formDireccion').value;
    //traer campos medida
    const tipo_prenda = document.getElementById('fprenda').value;
    const unidades = document.getElementById('funidades').value;
    const cuello = document.getElementById('fcuello').value;
    const hombro = document.getElementById('fhombro').value;
    const pecho = document.getElementById('fpecho').value;
    const ancho_espalda = document.getElementById('fanchoespalda').value;
    const largo_manga = document.getElementById('flargomanga').value;
    const puno = document.getElementById('fpuno').value;
    const largo_total = document.getElementById('flargototal').value;
    const cintura = document.getElementById('fcintura').value;
    const codo = document.getElementById('fcodo').value;
    const entrepierna = document.getElementById('fentrepierna').value;
    const rodilla = document.getElementById('frodilla').value;
    const cadera = document.getElementById('fcadera').value;
    const ancho_pierna = document.getElementById('fanchopierna').value;
    //traer campos detalles
    const tipo_bolsillo = document.getElementById('tbolsillo').value;
    const tipo_manga = document.getElementById('tmanga').value;
    const tipo_cuello = document.getElementById('tcuello').value;
    const tipo_botones = document.getElementById('tbotones').value;
    const tipo_pretina = document.getElementById('tpretina').value;
    const tipo_cinturon = document.getElementById('tcinturon').value;
    const anotaciones = document.getElementById('fanotaciones').value;
    const idUser = sessionStorage.getItem('idUser');

    if(tipo_prenda==="Seleccione" || nombre === ""){
        alert("faltan datos importantes");
        return;
    }

    const data = {  "cliente": {"nombre":nombre,
                                "celular":celular,
                                "direccion": direccion,
                                "id_usuario": idUser},
                    "tipo_prenda": tipo_prenda,
                    "unidades": unidades,
                    "cuello": cuello,
                    "hombro": hombro,
                    "pecho": pecho,
                    "ancho_espalda": ancho_espalda,
                    "puno": puno,
                    "largo_total": largo_total,
                    "cintura": cintura,
                    "codo": codo,
                    "entrepierna": entrepierna,
                    "rodilla": rodilla,
                    "cadera": cadera, 
                    "ancho_pierna": ancho_pierna, 
                    "tipo_bolsillo": tipo_bolsillo, 
                    "tipo_manga": tipo_manga, 
                    "tipo_cuello": tipo_cuello, 
                    "tipo_botones": tipo_botones, 
                    "tipo_pretina": tipo_pretina, 
                    "tipo_cinturon": tipo_cinturon, 
                    "anotaciones": anotaciones}
    
    if(metodo === "mostrar"){
        modificarMedida (data, navigate);
    }else{
        registrarMedida(data, navigate);
    }
}

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
                <ButtonOne nombre="Guardar" onClick={guardarMedida}></ButtonOne>
            </div>
        </section>
    );
}

export default MedidaDetalle;