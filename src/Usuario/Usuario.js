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

const useRegistrarU = (postData) => {
    const res = null;
    const registrarUsuario = async () => {
        axios.post('https://api.example.com/resources/api/usuario/registrarse', postData)
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

const useIniciarS = (postData) => {
    const res = null;
    const iniciairSesion = async () => {
        axios.post('https://api.example.com/resources/api/usuario/iniciarsesion', postData)
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

export { useUsuario, useRegistrarU, useIniciarS, useActualizarU, useCambiarCU, useDesactivarU};