import axios from "axios";
import { useState } from "react";

const useListadoC = (id) => {
    const [listado, setListado] = useState([]);
    const getLIstadoC = async () => {
        try {
            const result = await axios.get(`https://pokeapi.co/resources/api/cliente/listado/${id}`);
            setListado(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    return (
        <h1></h1>
    );
}

const useCliente = (nombre, id) => {
    const [cliente, setCliente] = useState([]);
    const getCliente = async () => {
        try {
            const result = await axios.get(`https://pokeapi.co/resources/api/cliente/busqueda/${nombre}/${id}`);
            setCliente(result.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    return (
        <h1></h1>
    );
}



export { useCliente, useListadoC };