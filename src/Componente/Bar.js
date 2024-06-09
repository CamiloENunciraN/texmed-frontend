import React from 'react';
import './Bar.css';
import logo from './../Img/iconLogo.png'

function Bar() {
  return (
    <div id="bar">
        <img id="logo" src={logo} alt="" />
        <h1 id="title" class="link" >TEXMED</h1>
        <a id="iniciarSesion" class="link">Iniciar sesión</a>
        <a id="acercaDe" class="link">Acerca de</a>
    </div>
  );
}

export default Bar;
  