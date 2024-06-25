import React from 'react';
import './ModalAbout.css';
import './Modal.css';

function ModalAbout() {
  return (
    <dialog id="modalAbout">
      <input type="button" className="formCerrar" value="X" id="formAboutCerrar" onClick={cerrar} />
        <form id="formAbout">
          <a className="formTitle" >TEXMED</a>
          <div id="contAbout">
            <div id="contAboutLeft">
              <p>TEXMED es una aplicación diseñada para todas aquellas personas dedicadas al diseño y confección de prendas de vestir, que permite administrar las medidas de sus clientes de forma ordenada y sencilla. Disponible en cualquier lugar y al alcance de tu mano, facilita la toma de medidas y el uso posterior de estas en el proceso de confección.</p>
            </div>
            <div id="contAboutRight">
              <div className="contAboutRightPlan">
                <div className="contAboutRightPlanTitle"><a>Plan Basico</a></div>
                <div className="contAboutRightPlanBody"></div>
                <div className="contAboutRightPlanPrice"><a className="link" id="priceRegB" >Obtener por: 0 Pesos/Mes</a></div>
              </div>
              <div className="contAboutRightPlan">
                <div className="contAboutRightPlanTitle" id="contAboutRightPrimeTitle"><a>Plan Premium</a></div>
                <div className="contAboutRightPlanBody">
                  <a>-Disponibilidad 24/7.</a>
                  <a>-Registro de clientes ilimitado.</a>
                  <a>-Busquedas Avanzadas.</a>
                  <a>-Estadisticas de tus clientes.</a>
                </div>
                <div className="contAboutRightPlanPrice"><a className="link" id="priceRegP" >Obtener por: 20.000 Pesos/Mes</a></div>
              </div>
            </div>
          </div>
        </form>
    </dialog>
  );
}

const cerrar = () => {
  const modal= document.getElementById("modalAbout");
  modal.close();
};

export default ModalAbout;