import axios from "axios";
import { useState, useEffect } from "react";
import user from "../Img/userIcon.png";

const useUsuario = (id) => {
    const [response, setResponse] = useState({"suscripcion":{"tipo":"","fecha_inicio":""}});
    const getUsuario = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/texmed-backend/resources/api/usuario/${id}`);
            setResponse(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    useEffect(()=>{
        getUsuario();

    },[] );

    return (
        <section id="contenConfi" className="contenDataU">
            <div id="contenConfi_left">
            <form>
                <h1>Datos Personales</h1>
                <div>
                    <p>Nombre:*</p>
                    <input id="nombreU" value={response.nombre} className='inputFormOpcionesU' type="text" placeholder="Lucia" title="Escriba su nombre" maxLength={100} required />
                </div>
                <div>
                    <p>Correo:*</p>
                    <input id="correoU" value={response.correo} className='inputFormOpcionesU' type="email" placeholder="Correo@correo.com" title="Escriba su correo" maxLength={50} required />
                </div>
                <div>
                    <p>Tarjeta:</p>
                    <input id="tarjetaU" value={response.tarjeta} className='inputFormOpcionesU' type="number" placeholder="34598700" title="Escriba su tarjeta" maxLength={20} />
                </div>
                <div>
                    <p>Cuenta:</p>
                    <input id="cuentaU" value={response.suscripcion.tipo} className='inputFormOpcionesU' type="text" placeholder="Basica" title="Su tipo de cuenta es" maxLength={20} disabled />
                </div>
                <div>
                    <input id="guardarDatos" type="submit" value="Guardar" className="buttonMain" onClick={actualizarUsuario}/>
                </div>
            </form>
            </div>
            <div id="contenConfi_mid">
                <img src={user} alt='' />
                <p id="fechaFinalizacion">Fecha creacion ={response.suscripcion.fecha_inicio}</p>
            </div>
            <div id="contenConfi_right">
                <input id="desactivarCuenta" onClick={()=>{alert("Desactivar cuenta no disponible... Proximamente en la Version 1.2")}} type="button" value="Desactivar Cuenta" className="buttonMain" title="Su cuenta sera desactivada y no podra hacer uso de ella" />
                <input id="cambiarPass" onClick={()=>{alert("Cambiar clave no disponible... Proximamente en la Version 1.2")}} type="button" value="Cambiar Contraseña" className="buttonMain" />
            </div>
        </section>
    );
}


    const registrarUsuario = async (postData , formNot) => {
        axios.post('http://localhost:8080/texmed-backend/resources/api/usuario/registrarse', postData)
        .then(response => {
            if(response.data==="Usuario ya registrado"){
                formNot.innerHTML = response.data;
                formNot.style.backgroundColor = '#F66151FF';
                formNot.style.color = 'black';
                return;
            }
            formNot.innerHTML = "Usuario registrado correctamente!, Ya puede iniciar sesion";
            formNot.style.backgroundColor = '#A5F386';
            formNot.style.color = 'black';
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };


    const iniciarSesion = async (postData, formNot, navigate) => {
        axios.post('http://localhost:8080/texmed-backend/resources/api/usuario/iniciarsesion', postData)
        .then(response => {
            if(response.data===""){
                formNot.innerHTML = "Datos no validos";
                formNot.style.backgroundColor = '#F66151FF';
                formNot.style.color = 'black';
                return;
            }
                sessionStorage.setItem('idUser', response.data.id);
                sessionStorage.setItem('estadoC', response.data.estado);
                sessionStorage.setItem('tipoC', response.data.suscripcion.tipo);
                navigate ("/dashboard");
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };


    const actualizarUsuario = async () => {
        const nombre =document.getElementById("nombreU").value;
        const correo =document.getElementById("correoU").value;
        const tarjeta =document.getElementById("tarjetaU").value;
        const id = sessionStorage.getItem("idUser");
        const putData = {"nombre":nombre,"correo":correo,"tarjeta":tarjeta, "id":id}
        axios.put('http://localhost:8080/texmed-backend/resources/api/usuario/actualizar', putData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };



    const cambiarClave = async () => {
        axios.put('https://api.example.com/resources/api/usuario/cambiarclave', putData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };

    const desactivarUsuario = async () => {
        axios.put('https://api.example.com/resources/api/usuario/desactivar', putData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };


export { useUsuario, registrarUsuario, iniciarSesion, actualizarUsuario, cambiarClave, desactivarUsuario};