import React from 'react';
import './ContentData.css';
import {useUsuario} from "../Usuario/Usuario";

function ContentData() {

  const id = sessionStorage.getItem('idUser');
  const respuesta = useUsuario(id);

    return (
         <section id="contenConfi" className="contenDataU">
         {respuesta}
        </section>
    );
}

export default ContentData;