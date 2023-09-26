import "./Formulario.css"
import { useState } from "react"



// eslint-disable-next-line react/prop-types
export function Formulario({ setUser }) {
    const [nombre, Setnombre] = useState("")
    const [contraseña, SetContraseña] = useState("")
    const [error, Seterror] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            Seterror(true)
            return
        }
        Seterror(false)
        setUser([nombre])
    }

    return (
        <section>
            <h1>Login</h1>

            <form className='formulario' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => Setnombre(e.target.value)}
                />
                <input
                    type="password"
                    value={contraseña}
                    onChange={(e) => SetContraseña(e.target.value)}
                />
                <button>Iniciar Sesión</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}
