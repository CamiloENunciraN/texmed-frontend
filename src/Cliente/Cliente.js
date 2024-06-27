import axios from "axios";
import { useState, useEffect } from "react";
import ContentList from '../Componente/ContentList.js';
import ContentSearch from '../Componente/ContentSearch.js';

const useListadoC = (id) => {
    const [listado, setListado] = useState([]);
    const getLIstadoC = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/texmed-backend/resources/api/cliente/listado/${id}`);
            setListado(result.data);
            console.log(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    useEffect(()=>{
        getLIstadoC();
    },[]);
    return (
        <ContentList data = {listado}></ContentList>
    );
}

const useCliente = (nombre, id) => {
    const [cliente, setCliente] = useState([]);
    const getCliente = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/texmed-backend/resources/api/cliente/busqueda/${nombre}/${id}`);
            setCliente(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    useEffect(()=>{
        getCliente();
    },[]);
    return (
        <ContentSearch data = {cliente}></ContentSearch>
    );
}



export { useCliente, useListadoC };