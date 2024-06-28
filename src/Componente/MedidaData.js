import React from 'react';
import './MedidaData.css';
import { useState} from "react";

function MedidaData(data, metodo) {

    if(data.metodo==="mostrar" && data.data.length!==0){
        const [cuello, setCuello] = useState(data.data.cuello);
        const [hombro, setHombro] = useState(data.data.hombro);
        const [pecho, setPecho] = useState(data.data.pecho);
        const [ancho_espalda, setAnchoEspalda] = useState(data.data.ancho_espalda);
        const [largo_manga, setLargoManga] = useState(data.data.largo_manga);
        const [puno, setPuno] = useState(data.data.puno);
        const [largo_total, setLargoTotal] = useState(data.data.largo_total);
        const [cintura, setCintura] = useState(data.data.cintura);
        const [codo, setCodo] = useState(data.data.codo);
        const [entrepierna, setEntrepierna] = useState(data.data.entrepierna);
        const [rodilla, setRodilla] = useState(data.data.rodilla);
        const [cadera, setCadera] = useState(data.data.cadera);
        const [ancho_pierna, setAnchoPierna] = useState(data.data.ancho_pierna);

    const seleccionOpcion = ()=>{
        document.getElementById('fprenda').value = data.data.tipo_prenda;
        document.getElementById('funidades').value = data.data.unidades;
    } 
    seleccionOpcion();
    return (
        <section className="contenData">
            <div className='contenDataM'>
                <div>
                    <p>Prenda:</p>
                    <select id="fprenda" className='inputFormOpciones'>
                        <option value="Seleccione">Seleccione</option>
                        <option value="Camisa">Camisa</option>
                        <option value="Chaqueta">Chaqueta</option>
                        <option value="Pantalon">Pantalon</option>
                        <option value="Short">Short</option>
                        <option value="Falda">Falda</option>
                        <option value="Vestido">Vestido</option>
                    </select>
                </div>
                <div>
                    <p>Unidades:</p>
                    <select id="funidades" className='inputFormOpciones'>
                        <option value="Cm">Cm</option>
                        <option value="Pulgada">In</option>
                    </select>
                </div>
                <div>
                    <p></p>
                    <input className='oculto' />
                </div>
                <div>
                    <p></p>
                    <input className='oculto' />
                </div>
                <div>
                    <p>Cuello:</p>
                    <input id='fcuello' value={cuello} onChange={e => setCuello(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Hombro:</p>
                    <input id='fhombro' value={hombro} onChange={e => setHombro(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Pecho:</p>
                    <input id='fpecho' value={pecho} onChange={e => setPecho(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Ancho espalda:</p>
                    <input id='fanchoespalda' value={ancho_espalda} onChange={e => setAnchoEspalda(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Largo Manga:</p>
                    <input id='flargomanga' value={largo_manga} onChange={e => setLargoManga(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Puño:</p>
                    <input id='fpuno' value={puno} onChange={e => setPuno(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Largo total:</p>
                    <input id='flargototal' value={largo_total} onChange={e => setLargoTotal(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Cintura:</p>
                    <input id='fcintura' value={cintura} onChange={e => setCintura(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Codo:</p>
                    <input id='fcodo' value={codo} onChange={e => setCodo(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Entrepierna:</p>
                    <input id='fentrepierna' value={entrepierna} onChange={e => setEntrepierna(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Rodilla:</p>
                    <input id='frodilla' value={rodilla} onChange={e => setRodilla(e.target.value)}type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Cadera:</p>
                    <input id='fcadera' value={cadera} onChange={e => setCadera(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Ancho pierna:</p>
                    <input id='fanchopierna' value={ancho_pierna} onChange={e => setAnchoPierna(e.target.value)} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
            </div>
        </section>
    );
    }
    return (
        <section className="contenData">
            <div className='contenDataM'>
                <div>
                    <p>Prenda:</p>
                    <select id="fprenda" className='inputFormOpciones'>
                        <option value="Seleccione">Seleccione</option>
                        <option value="Camisa">Camisa</option>
                        <option value="Chaqueta">Chaqueta</option>
                        <option value="Pantalon">Pantalon</option>
                        <option value="Short">Short</option>
                        <option value="Falda">Falda</option>
                        <option value="Vestido">Vestido</option>
                    </select>
                </div>
                <div>
                    <p>Unidades:</p>
                    <select id="funidades" className='inputFormOpciones'>
                        <option value="Cm">Cm</option>
                        <option value="Pulgada">In</option>
                    </select>
                </div>
                <div>
                    <p></p>
                    <input className='oculto' />
                </div>
                <div>
                    <p></p>
                    <input className='oculto' />
                </div>
                <div>
                    <p>Cuello:</p>
                    <input id='fcuello' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Hombro:</p>
                    <input id='fhombro' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Pecho:</p>
                    <input id='fpecho' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Ancho espalda:</p>
                    <input id='fanchoespalda' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Largo Manga:</p>
                    <input id='flargomanga' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Puño:</p>
                    <input id='fpuno' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Largo total:</p>
                    <input id='flargototal' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Cintura:</p>
                    <input id='fcintura' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Codo:</p>
                    <input id='fcodo' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Entrepierna:</p>
                    <input id='fentrepierna' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Rodilla:</p>
                    <input id='frodilla' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Cadera:</p>
                    <input id='fcadera' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Ancho pierna:</p>
                    <input id='fanchopierna' type='number' maxLength={5} className='inputFormOpciones' />
                </div>
            </div>
        </section>
    );
}

export default MedidaData;