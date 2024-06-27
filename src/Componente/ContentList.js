import React from 'react';
import './ContentList.css';
import FilaList from './FilaList';

function ContentList(data) {

    const titulo = { nombre: "Nombre", celular: "Celular", direccion: "Direccion" };
    return (
        <section className="contenDataL">
            <div id="contenList">
                <FilaList cliente={titulo}/>
                {data.data.map((cliente, index) => (
                    <FilaList key={index} cliente={cliente}/>
                ))}
            </div>
        </section>
    );
}

export default ContentList;