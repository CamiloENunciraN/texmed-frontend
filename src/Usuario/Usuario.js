import axios from "axios";
import { useState } from "react";

const useUsuario = (id) => {
    const [response, setResponse] = useState([]);
    const getUsuario = async () => {
        try {
            const result = await axios.get(`https://pokeapi.co/resources/api/usuario/${id}`);
            setResponse(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    return (
        <h1></h1>
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


const useActualizarU = (putData) => {
    const res = null;
    const actualizarUsuario = async () => {
        axios.put('https://api.example.com/resources/api/usuario/actualizar', putData)
        .then(response => {
          res = response;
          console.log(response);
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };
    return (
        <h1>res</h1>
    );
}

const useCambiarCU = (putData) => {
    const res = null;
    const cambiarClave = async () => {
        axios.put('https://api.example.com/resources/api/usuario/cambiarclave', putData)
        .then(response => {
          res = response;
          console.log(response);
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };
    return (
        <h1>res</h1>
    );
}

const useDesactivarU = (putData) => {
    const res = null;
    const desactivarUsuario = async () => {
        axios.put('https://api.example.com/resources/api/usuario/desactivar', putData)
        .then(response => {
          res = response;
          console.log(response);
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };
    return (
        <h1>res</h1>
    );
}

export { useUsuario, registrarUsuario, iniciarSesion, useActualizarU, useCambiarCU, useDesactivarU};