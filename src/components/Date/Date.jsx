import React from 'react';

const DateComp = () => {

let fecha = new Date();

let diaSemana = ['Domingo','Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'];

let mesAnyo = ['Enero','Febrero', 'Marzo','abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


    return(
        <h4 className='date'>{diaSemana[fecha.getDay()]} {fecha.getDate()} de {mesAnyo[fecha.getMonth()]} de {fecha.getFullYear()}</h4>
    )
}

export { DateComp }

