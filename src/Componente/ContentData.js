import React from 'react';
import './ContentData.css';
import user from "../Img/userIcon.png";

function ContentData() {
    return (
        <section id="contenConfi" class="contenData">
            <div id="contenConfi_left">
                    <form>
                        <h1>Datos Personales</h1>
                        <div>
                            <p>Nombre:*</p>
                            <input id="nombreU" className='inputFormOpciones' type="text" placeholder="Lucia" title="Escriba su nombre" maxLength={100} required />
                        </div>
                        <div>
                            <p>Correo:*</p>
                            <input id="correoU" className='inputFormOpciones' type="email" placeholder="Correo@correo.com" title="Escriba su correo" maxLength={50} required />
                        </div>
                        <div>
                            <p>Tarjeta:</p>
                            <input id="tarjetaU" className='inputFormOpciones' type="number" placeholder="34598700" title="Escriba su tarjeta" maxLength={20} />
                        </div>
                        <div>
                            <p>Cuenta:</p>
                            <input id="cuentaU" className='inputFormOpciones' type="text" placeholder="Basica" title="Su tipo de cuenta es" maxLength={20} disabled />
                        </div>
                        <div>
                            <input id="guardarDatos" type="submit" value="Guardar" class="buttonMain" />
                        </div>
                    </form>
            </div>
            <div id="contenConfi_mid">
                <img src={user} alt='' />
                <p id="fechaFinalizacion">Suscripcion hasta el 15 de julio 2024</p>
            </div>
            <div id="contenConfi_right">
                <input id="desactivarCuenta" type="button" value="Desactivar Cuenta" class="buttonMain" title="Su cuenta sera desactivada y no podra hacer uso de ella" />
                <input id="cambiarPass" type="button" value="Cambiar Contraseña" class="buttonMain" />
            </div>
        </section>
    );
}

export default ContentData;