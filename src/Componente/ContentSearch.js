import React from 'react';
import './ContentSearch.css';
import FilaSearch from './FilaSearch';

function ContentSearch(data) {

    const titulo = { anotaciones: "Nombre", tipo_prenda: "Prenda", fecha_creacion: "Fecha"};
    return (
        <section className="contenDataS">
            <div id="contenList">
                <FilaSearch cliente={titulo}/>
                {data.data.map((cliente, index) => (
                    <FilaSearch key={index} cliente={cliente}/>
                ))}
            </div>
        </section>
    );
}

export default ContentSearch;