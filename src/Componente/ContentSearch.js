import React from 'react';
import './ContentSearch.css';
import FilaSearch from './FilaSearch';

function ContentSearch() {

    const test = [{ nombre: "Camilo", prenda: 555, fecha: "xxxxxxxxxx" },
    { nombre: "Laura", prenda: 666, fecha: "xxxxxxxxxx"},
    { nombre: "Pedro", prenda: 777, fecha: "xxxxxxxxxx" },
    { nombre: "Lucia", prenda: 558885, fecha: "xxxxxxxxxx"},
    { nombre: "Pablo", prenda: 559995, fecha: "xxxxxxxxxx" }];

    const titulo = { nombre: "Nombre", prenda: "Prenda", fecha: "Fecha"};
    return (
        <section className="contenData">
            <div id="contenList">
                <FilaSearch cliente={titulo}/>
                {test.map((cliente, index) => (
                    <FilaSearch key={index} cliente={cliente}/>
                ))}
            </div>
        </section>
    );
}

export default ContentSearch;