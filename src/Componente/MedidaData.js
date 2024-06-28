import React from 'react';
import './MedidaData.css';

function MedidaData(data, metodo) {

    if(data.metodo==="mostrar" && data.data.length!==0){
    const eleccion = ()=>{
        document.getElementById('fprenda').value = data.data.tipo_prenda;
    } 
    eleccion();
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
                    <input id='fcuello' value={data.data.cuello} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Hombro:</p>
                    <input id='fhombro' value={data.data.hombro} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Pecho:</p>
                    <input id='fpecho' value={data.data.pecho} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Ancho espalda:</p>
                    <input id='fanchoespalda' value={data.data.ancho_espalda} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Largo Manga:</p>
                    <input id='flargomanga' value={data.data.largo_manga} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Puño:</p>
                    <input id='fpuno' value={data.data.puno} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Largo total:</p>
                    <input id='flargototal' value={data.data.largo_total} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Cintura:</p>
                    <input id='fcintura' value={data.data.cintura} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Codo:</p>
                    <input id='fcodo' value={data.data.codo} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Entrepierna:</p>
                    <input id='fentrepierna' value={data.data.entrepierna} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Rodilla:</p>
                    <input id='frodilla' value={data.data.rodilla} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Cadera:</p>
                    <input id='fcadera' value={data.data.cadera} type='number' maxLength={5} className='inputFormOpciones' />
                </div>
                <div>
                    <p>Ancho pierna:</p>
                    <input id='fanchopierna' value={data.data.ancho_pierna} type='number' maxLength={5} className='inputFormOpciones' />
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