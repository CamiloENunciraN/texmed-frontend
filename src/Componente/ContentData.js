import React from 'react';
import './ContentData.css';
import {useUsuario} from "../Usuario/Usuario"

function ContentData() {

  const id = sessionStorage.getItem('idUser');
  const usuario = useUsuario(id);
  
    return (
        <section id="contenConfi" className="contenDataU">
        {usuario}
         </section>

    );
}

export default ContentData;