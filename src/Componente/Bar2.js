import React from 'react';
import './Bar2.css';
import logo from './../Img/iconLogo.png'

function Bar2() {
  return (
    <div id="bar">
            <img id="logo" src={logo}/>
            <h1 id="title" class="link" onClick={dashboard}>TEXMED</h1>
            <p id="acercaDe" class="link" onClick={modal_about}>Acerca de</p>
            <p id="configuracion" class="link" onClick={opciones}>Opciones</p>
            <p id="cerrarSesion" class="link" onClick={cerrarsesion}>Cerrar sesión</p>
    </div>
  );
}

const dashboard = () => {

};

const opciones = () => {

};

const modal_about = () => {
  const modal= document.getElementById("modalAbout");
  modal.showModal();
};

const cerrarsesion = () => {

};

export default Bar2;