
import {useMedida, modificarVisualMedida} from '../Medida/Medida'

function ShowMedida() {

  const id = sessionStorage.getItem('medida');
  const medida = useMedida(id);
  //modificarVisualMedida({"id":id});

    return (
        <div className='fondo'>
        {medida}
        </div>
    );
}

export default ShowMedida;