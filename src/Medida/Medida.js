import axios from "axios";
import { useState } from "react";
import Medida_dash from "./../Componente/Medida_dash"

const useVisualizadas = (id) => {
    const [medidaV, setVisualizados] = useState([]);
    const getVisualizados = async () => {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setVisualizados(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    return (
        <Medida_dash data={medidaV}></Medida_dash>
    );
}

const useRecientes = (id) => {
    const [medidaR, setRecientes] = useState([]);
    const getRecientes = async () => {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setRecientes(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    return (
        <Medida_dash data={medidaR}></Medida_dash>
    );
}

const useMedida = (id) => {
    const [medida, setMedida] = useState([]);
    const getMedida = async () => {
        try {
            const result = await axios.get(`https://pokeapi.co/resources/api/medida/ver/${id}`);
            setMedida(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    return (
        <h1></h1>
    );
}

const useRegistrarM = (postData) => {
    const res = null;
    const registrarMedida = async () => {
        axios.post('https://api.example.com/posts', postData)
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

const useModificarM = (putData) => {
    const res = null;
    const modificarMedida = async () => {
        axios.put('https://api.example.com/posts', putData)
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

const useModificarVisual = (putData) => {
    const res = null;
    const modificarVisualMedida = async () => {
        axios.put('https://api.example.com/posts', putData)
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

export { useVisualizadas, useRecientes, useMedida, useRegistrarM, useModificarM, useModificarVisual };