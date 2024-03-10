import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (!presupuesto || presupuesto < 0) {
            setMensaje('No es un Presupuesto Valido');
            return;
        }

        setMensaje('');
        setIsValidPresupuesto(true);
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra" >
        <form className="formulario" onSubmit={handleSubmit}>
            <div className="campo">
                <label htmlFor="presupuesto">Definir Presupuesto</label>
                <input 
                    type="number" 
                    id="presupuesto"
                    className="nuevo-presupuesto"
                    placeholder="Ingresa tu Presupuesto"
                    value={presupuesto}
                    onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value="Ingresar" />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto