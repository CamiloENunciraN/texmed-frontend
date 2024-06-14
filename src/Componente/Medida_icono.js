import React from 'react';
import './Medida_icono.css';
import Camisa from "../Img/Prendas/iconCamisa.png"
import Pantalon from "../Img/Prendas/iconPantalon.png"
import Short from "../Img/Prendas/iconPantalon.png"
import Vestido from "../Img/Prendas/iconVestido.png"
import Falda from "../Img/Prendas/iconFalda.png"

function Medida_icono(medida) {
    var tipo=null;
    if(medida.medida.tipo_prenda==="Camisa"){
        tipo= <img src={Camisa} alt='' />;
      }else if(medida.medida.tipo_prenda=="Chaqueta"){
        tipo= <img src={Camisa} alt='' />;
      }else if(medida.medida.tipo_prenda==="Pantalon"){
        tipo= <img src={Pantalon} alt='' />;
      }else if(medida.medida.tipo_prenda==="Short"){
        tipo= <img src={Short} alt='' />;
      }else if(medida.medida.tipo_prenda==="Vestido"){
        tipo= <img src={Vestido} alt='' />;
      }else if(medida.medida.tipo_prenda==="Falda"){
        tipo= <img src={Falda} alt='' />;
      }

    return (
        <div className="medidaCliente" title="Ver medida">
            <div className="medidaClienteImg" id={`agregada_${medida.medida.id}`} >
                {tipo}
            </div>
            <p className="medidaClienteNombre" >{medida.medida.nombre}</p>
        </div>
    )
}

export default Medida_icono;