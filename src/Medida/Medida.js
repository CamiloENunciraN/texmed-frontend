import axios from "axios";
import { useState, useEffect } from "react";
import MedidaDash from "./../Componente/MedidaDash";
import DivBar from '../Componente/DivBar.js';
import ClientData from '../Componente/ClientData.js';
import MedidaData from '../Componente/MedidaData.js';
import MedidaDetalle from '../Componente/MedidaDetalle.js';
import Bar2 from './../Componente/Bar2.js'
import BarraOpcion from '../Componente/BarraOpcion.js'
import ModalAbout from '../Componente/Modal/ModalAbout.js';

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
            const result = await axios.get(`http://localhost:8080/texmed-backend/resources/api/medida/ver/${id}`);
            setMedida(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    useEffect(()=>{
        getMedida();
    },[]);

    return (
        <div className='fondo'>
            <Bar2></Bar2>
            <BarraOpcion></BarraOpcion>
            <DivBar nombre = "Datos del cliente:"></DivBar>
            <ClientData data = {medida} metodo ="mostrar"></ClientData>
            <DivBar nombre = "Datos de la medida:"></DivBar>
            <MedidaData data = {medida} metodo ="mostrar"></MedidaData>
            <DivBar nombre = "Detalles:"></DivBar>
            <MedidaDetalle data = {medida} metodo ="mostrar"></MedidaDetalle>
            <ModalAbout></ModalAbout>
        </div>
    );
}

    const registrarMedida = async (postData, navigate) => {
        axios.post('http://localhost:8080/texmed-backend/resources/api/medida/registrar', postData)
        .then(response => {
          alert(response.data);
          navigate('/dashboard');
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };

    const modificarMedida = async (putData, navigate) => {
        axios.put('http://localhost:8080/texmed-backend/resources/api/medida/actualizar', putData)
        .then(response => {
          alert(response.data);
          navigate('/dashboard');
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };


    const modificarVisualMedida = async (putData) => {
        axios.put('http://localhost:8080/texmed-backend/resources/api/medida/visualizada', putData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error posting data: ', error);
        });
    };

export { useVisualizadas, useRecientes, useMedida, registrarMedida, modificarMedida, modificarVisualMedida };