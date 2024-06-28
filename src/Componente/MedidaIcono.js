import React from 'react';
import './MedidaIcono.css';
import Camisa from "../Img/Prendas/iconCamisa.png"
import Pantalon from "../Img/Prendas/iconPantalon.png"
import Short from "../Img/Prendas/iconPantalon.png"
import Vestido from "../Img/Prendas/iconVestido.png"
import Falda from "../Img/Prendas/iconFalda.png"
import { useNavigate } from 'react-router-dom';

function MedidaIcono(medida) {
    var tipo=null;
    const navigate = useNavigate();
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

const vermedida = ()=>{
    sessionStorage.setItem('medida', medida.medida.id);
    navigate('/showmedida');
}

    return (
        <div className="medidaCliente" title="Ver medida" onClick={vermedida}>
            <div className="medidaClienteImg" id={medida.medida.id} >
                {tipo}
            </div>
            <p className="medidaClienteNombre" >{medida.medida.cliente.nombre}</p>
        </div>
    )
}

export default MedidaIcono;