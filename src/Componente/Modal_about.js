import React from 'react';
import './Modal_about.css';
import './Modal.css';

function Modal_about() {
  return (
    <dialog id="modalAbout">
      <input type="button" class="formCerrar" value="X" id="formAboutCerrar" />
        <form id="formAbout">
          <a class="formTitle">TEXMED</a>
          <div id="contAbout">
            <div id="contAboutLeft">
              <p>TEXMED es una aplicación diseñada para todas aquellas personas dedicadas al diseño y confección de prendas de vestir, que permite administrar las medidas de sus clientes de forma ordenada y sencilla. Disponible en cualquier lugar y al alcance de tu mano, facilita la toma de medidas y el uso posterior de estas en el proceso de confección.</p>
            </div>
            <div id="contAboutRight">
              <div class="contAboutRightPlan">
                <div class="contAboutRightPlanTitle"><a>Plan Basico</a></div>
                <div class="contAboutRightPlanBody"></div>
                <div class="contAboutRightPlanPrice"><a class="link" id="priceRegB">Obtener por: 0 Pesos/Mes</a></div>
              </div>
              <div class="contAboutRightPlan">
                <div class="contAboutRightPlanTitle" id="contAboutRightPrimeTitle"><a>Plan Premium</a></div>
                <div class="contAboutRightPlanBody">
                  <a>-Disponibilidad 24/7.</a>
                  <a>-Registro de clientes ilimitado.</a>
                  <a>-Busquedas Avanzadas.</a>
                  <a>-Estadisticas de tus clientes.</a>
                </div>
                <div class="contAboutRightPlanPrice"><a class="link" id="priceRegP">Obtener por: 20.000 Pesos/Mes</a></div>
              </div>
            </div>
          </div>
        </form>
    </dialog>
  );
}

export default Modal_about;