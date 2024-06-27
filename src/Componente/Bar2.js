import React from 'react';
import logo from './../Img/iconLogo.png'
import { useNavigate } from 'react-router-dom';

function Bar2() {
  const navegate = useNavigate();
  return (
    <div id="bar">
            <img id="logo" src={logo} alt=''/>
            <h1 id="title" className="link" onClick={()=>(navegate("/dashboard"))}>TEXMED</h1>
            <p id="acercaDe" className="link" onClick={modal_about}>Acerca de</p>
            <p id="configuracion" className="link" onClick={()=>(navegate("/opcion"))}>Opciones</p>
            <p id="cerrarSesion" className="link" onClick={()=>{
              sessionStorage.removeItem('idUser');
              sessionStorage.removeItem('tipoC');
              sessionStorage.removeItem('estado');
              navegate("/");
            }}>Cerrar sesión</p>
    </div>
  );
}

const modal_about = () => {
  const modal= document.getElementById("modalAbout");
  modal.showModal();
};

export default Bar2;