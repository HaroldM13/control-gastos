
const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long', 
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export {
    formatearCantidad,
    formatearFecha
}