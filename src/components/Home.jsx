import { useState } from "react"


/* eslint-disable react/prop-types */
export function Home({nombreUsuario}){
    return(
        <div>
            <h1>Bienvenido {nombreUsuario} </h1>
            <h2>Terminemos de completaar tu informacion</h2>
             </div>
    )
}


export function Myform() {
  const [formData, setFormData] = useState({
    estado_emocional: 'Triste',
    edad: '20-30 años',
    sexo: 'Masculino',
    horario_disponible: '8:00am-10:00am',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(' http://localhost:3000/user', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // La solicitud se completó con éxito
        console.log('Datos guardados con éxito');
      } else {
        // Manejo de errores si la respuesta no es 200 OK
        console.error('Error al guardar los datos');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form className="formulario-1"   onSubmit={handleSubmit}>
      <div>
        <label htmlFor="estado_emocional">Estado de ánimo:</label>
        <select
          name="estado_emocional"
          value={formData.estado_emocional}
          onChange={handleInputChange}
        >
          <option>Triste</option>
          <option>Aburrido</option>
          <option>Enojado</option>
          <option>Deprimido</option>
          <option>Alegre</option>
        </select>
      </div>

      <div>
        <label htmlFor="edad">Rango de edad:</label>
        <select name="edad" 
        value={formData.edad} 
        onChange={handleInputChange}>
          <option>20-30 años</option>
          <option>15-20 años</option>
          <option>30-45 años</option>
          <option>+45 años</option>
        </select>
      </div>

      <div>
        <label htmlFor="sexo">Género:</label>
        <select name="sexo" 
        value={formData.sexo}
        onChange={handleInputChange}>
          <option>Masculino</option>
          <option>Femenino</option>
          <option>No Binario</option>
        </select>
      </div>

      <div>
        <label htmlFor="horario_disponible">Horario disponible:</label>
        <select
          name="horario_disponible"
          value={formData.horario_disponible}
          onChange={handleInputChange}
        >
          <option>8:00am-10:00am</option>
          <option>1:00pm-3:00pm</option>
          <option>8:00pm-10:00pm</option>
        </select>
      </div>

      <button  className="button-save" type="submit">Guardar</button>
    </form>
    
  );
}
