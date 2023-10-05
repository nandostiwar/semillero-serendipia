import Tabla from '../components/Tabla';
import './styles/Mesero.css';
import { useQuery } from '@tanstack/react-query';
import { getMesasXMesero, getMeseroId } from '../API/RestauranteApi';

export default function Mesero() {

  const MsroId = () => {
    const MeseroId = JSON.parse(localStorage.getItem("User"));
    if(MeseroId){
      return MeseroId.id;
    }else{
      return null;
    }
  };

  const { isLoading, data: Mesas, isError, error } = useQuery({
    queryKey: ['Mesas', MsroId()],
    queryFn: () => getMesasXMesero(MsroId())
  })

  const { data: MeseroObtendido } = useQuery({
    queryKey: ['Meseros', MsroId()],
    queryFn: () => getMeseroId(MsroId())
  })


  if (isLoading) return <div> Cargando informacion </div>
  else if (isError) return <div> Error: {error} </div>

  return (
    <div>
      <form className="formMesero">
        <h2 className="Linealh2" data-after-content={MeseroObtendido && MeseroObtendido.Nombre}> Mesero: </h2>
        <label className="lblMesas">Mesas
          <br />   Asignadas: </label>
        <input className="mesas" defaultValue={Mesas.length} />
        <Tabla Titulo={"Mesas a Cargo:"} Th1={"N°Mesa"} Th2={"Cantidad Clientes"} Th3={"Ocupada"}
          TextoBoton={"Tomar Pedido"} Mesas={Mesas}
        />
      </form>
    </div>
  )
}
