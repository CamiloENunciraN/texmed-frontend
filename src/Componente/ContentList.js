import React from 'react';
import './ContentList.css';
import FilaList from './FilaList';

function ContentList() {

    const test = [{ nombre: "Camilo", telefono: 555, correo: "correo@ejemplo.com", direccion: "esta es" },
    { nombre: "Laura", telefono: 666, correo: "correo@ejemplo.com", direccion: "esta es" },
    { nombre: "Pedro", telefono: 777, correo: "correo@ejemplo.com", direccion: "esta es" },
    { nombre: "Lucia", telefono: 558885, correo: "correo@ejemplo.com", direccion: "esta es" },
    { nombre: "Pablo", telefono: 559995, correo: "correo@ejemplo.com", direccion: "esta es" }];

    const titulo = { nombre: "Nombre", telefono: "Telefono", correo: "Correo", direccion: "Direccion" };
    return (
        <section className="contenData">
            <div id="contenList">
                <FilaList cliente={titulo}/>
                {test.map((cliente, index) => (
                    <FilaList key={index} cliente={cliente}/>
                ))}
            </div>
        </section>
    );
}

export default ContentList;