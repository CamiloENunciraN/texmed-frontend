
import './Login.css';
import Bar from '../Componente/Bar.js';
import ModalAbout from '../Componente/Modal/ModalAbout.js';
import ModalCambioPass from '../Componente/Modal/ModalCambioPass.js';
import ModalLogin from '../Componente/Modal/ModalLogin.js';
import ModalRegistrar from '../Componente/Modal/ModalRegistrar.js';
import Preview from '../Componente/Preview.js';

function Login() {
  return (
    <div className='fondo'>
      <Bar></Bar>
      <Preview></Preview>
      <ModalAbout></ModalAbout>
      <ModalLogin></ModalLogin>
      <ModalRegistrar></ModalRegistrar>
      <ModalCambioPass></ModalCambioPass>
    </div>
  );
}

export default Login;
