import React from 'react';
import './Preview.css';
import span from './../Img/iconImage0.webp'
import ButtonOne from './ButtonOne.js'

function Preview() {
  return (
    <main id="container">
        <section id="left">
            <p id="span1">Almacena de forma sencilla las medidas de tus clientes.</p>
            <p id="span2">Obtenla disponible siempre y cuando la necesite.</p>
            <ButtonOne nombre = "Iniciar Prueba" onClick={modal_about} ></ButtonOne>
        </section>
        <section id="right">
            <img id="imgRuler" src={span} alt=''/>
        </section>
    </main>
  );
}


const modal_about = () => {
  const modal= document.getElementById("modalAbout");
  modal.showModal();
};

export default Preview;
  