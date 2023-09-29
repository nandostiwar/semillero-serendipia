import Tabla from '../components/Tabla';
import './styles/Mesero.css';
import { useQuery } from '@tanstack/react-query';
import { getMesasXMesero, getMeseroId } from '../API/RestauranteApi';
import { useParams } from 'react-router-dom';

export default function Mesero() {

  const MsroId = +useParams().MsroId;

  const {isLoading, data: Mesas, isError} = useQuery({
    queryKey: ['Mesas'],
    queryFn: () => getMesasXMesero(MsroId)
  })

  const {data: MeseroObtendido} = useQuery({
    queryKey: ['Meseros',MsroId],
    queryFn: () => getMeseroId(MsroId)
  })


  if(isLoading) return <div> Cargando informacion </div>
  else if (isError) return <div> Error: {error} </div>


  return (
    <div>
        <form className="formMesero">
            <h2 className="Linealh2" data-after-content={MeseroObtendido && MeseroObtendido.Nombre}> Mesero: </h2>
            <label className="lblMesas">Mesas
            <br/>Disponibles: </label>
            <input className="mesas" defaultValue={ Mesas.length } />
            <Tabla Titulo={"Mesas a Cargo:"} Th1={"N°Mesa"} Th2={"Cantidad Clientes"} Th3={"Ocupada"}
                TextoBoton={"Tomar Pedido"} Mesas={Mesas} IdMesero={MsroId}
            />
        </form>
    </div>
  )
}
