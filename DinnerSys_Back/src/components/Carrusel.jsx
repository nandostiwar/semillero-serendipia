import { useState } from "react";
import './Carrusel.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePedidoXMesaId, UpdateMesa } from "../API/RestauranteApi";

export default function Carrusel({ Mesas }) {
    const { UserId: MsroId } = useAuth();
    //Para saber cual mesa se seleccionó y que solo se pueda seleccionar una mesa
    const [MesaATomarPedido, setMesaATomarPedido] = useState(null);
    const navigate = useNavigate();

    const MesaCheckeada = (id, isChecked) => {
        if (MesaATomarPedido === id) {
            setMesaATomarPedido(null);
            // Esto es para deseleccionar la mesa
        } else {
            // Esto es para seleccionar la mesa
            setMesaATomarPedido(id);
        }
    };

    const queryClient = useQueryClient();
    
    // Para actualizar (CantidadClientes===0) la mesa que estaba ocupada y que fue seleccionada
    const LiberarMesa = useMutation({
        mutationFn: UpdateMesa,
        onSuccess: () => {
            queryClient.invalidateQueries('Mesas');
            // alert("Modificado");
        },
        onError: (error) => {
            alert(`error: ${error}`);
        }
    });

    const EliminarPedidoXMesaId = useMutation({
        mutationFn: DeletePedidoXMesaId,
        onSuccess: () => {
            queryClient.invalidateQueries('Pedidos');
        },
        onError: (error) => {
            alert(`error: ${error}`);
        }
    });

    const OnHandleClickLiberar = (Mesa) => {
        /* Creamos la mesa y le ponemos todos los atributos que tiene la mesa que solicitamos y solo actualizamos el 
        CantidadClientes*/
        let NewMesa = {
            ...Mesa,
            CantidadClientes: 0,
        }

        LiberarMesa.mutate(NewMesa);

        /* Ahora, procedemos a eliminar el pedido por el Id de la Mesa Seleccionada */
        EliminarPedidoXMesaId.mutate(Mesa.id);


    };

    function OnOrdenar(Mesa) {
        localStorage.setItem("Mesa", JSON.stringify(Mesa));
        navigate(`/Mesero/${MsroId}/Pedidos`);
    };

    return (
        <>
            <section className="carrusel">
                <div className="mesas-title">
                    <h3>Mesas Ocupadas </h3>
                </div>
                {Mesas.filter(me => me.CantidadClientes > 0).map(mesa => (
                    <div key={mesa.id}>
                        <input type="checkbox" id={`checkbox${mesa.id}`} name="mesasSelect" checked={mesa.CantidadClientes > 0} readOnly />
                        <label htmlFor={`checkbox${mesa.id}`} className='circulo-container'> <span className='icon-mesas'> </span> <p> {mesa.id} </p> </label>
                        <div className="carrusel-container-btn">
                            <button className="btnCarrusel" onClick={() => OnHandleClickLiberar(mesa)}  > Liberar </button>
                        </div>
                    </div>

                ))}
                <div className="container-dz">
                    <button className="desplazar"> {'>'} </button>
                    <button className="desplazarLeft"> {'<'} </button>
                </div>
            </section >

            <section className="carrusel">
                <div className="mesas-title">
                    <h3>Mesas Libres </h3>
                </div>
                {Mesas.filter(me => me.CantidadClientes === 0).map(mesa => (
                    <div key={mesa.id}>
                        <input type="checkbox" id={`checkbox${mesa.id}`} checked={MesaATomarPedido === mesa.id} onChange={(ev) => { MesaCheckeada(mesa.id, ev.target.checked) }} />
                        <label htmlFor={`checkbox${mesa.id}`} className='circulo-container'> <span className='icon-mesas'> </span> <p> {mesa.id} </p> </label>
                        {MesaATomarPedido === mesa.id &&
                            <div className="carrusel-container-btn">
                                <button id={`checkbox${mesa.id}`} type='button' className="btnCarrusel" onClick={() => OnOrdenar(mesa)}> Ordenar </button>
                            </div>
                        }
                    </div>
                ))}
                <div className="container-dz">
                    <button className="desplazar"> {'>'} </button>
                    <button className="desplazarLeft"> {'<'} </button>
                </div>
            </section>

        </>
    )
}