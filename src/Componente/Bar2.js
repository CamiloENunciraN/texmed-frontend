import React from 'react';
import logo from './../Img/iconLogo.png'
import { useNavigate } from 'react-router-dom';

function Bar2() {
  const navegate = useNavigate();
  return (
    <div id="bar">
            <img id="logo" src={logo}/>
            <h1 id="title" class="link" onClick={()=>(navegate("/dashboard"))}>TEXMED</h1>
            <p id="acercaDe" class="link" onClick={modal_about}>Acerca de</p>
            <p id="configuracion" class="link" onClick={()=>(navegate("/opcion"))}>Opciones</p>
            <p id="cerrarSesion" class="link" onClick={()=>{
              sessionStorage.removeItem('idUser');
              sessionStorage.removeItem('tipoC');
              navegate("/");
            }}>Cerrar sesión</p>
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