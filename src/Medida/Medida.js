import axios from "axios";
import { useState, useEffect } from "react";
import MedidaDash from "./../Componente/MedidaDash";

const useVisualizadas = (id) => {
    const [medidaV, setVisualizados] = useState([]);
    const getVisualizados = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/texmed-backend/resources/api/medida/listado/visualizada/${id}`);
            setVisualizados(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    useEffect(()=>{
      getVisualizados(id);
    },[]);
    return (
        <MedidaDash data={medidaV}></MedidaDash>
    );
}

const useRecientes = (id) => {
    const [medidaR, setRecientes] = useState([]);
    const getRecientes = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/texmed-backend/resources/api/medida/listado/recientes/${id}`);
            setRecientes(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    useEffect(()=>{
        getRecientes(id);
    },[]);
    return (
        <MedidaDash data={medidaR}></MedidaDash>
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