import React from 'react';

const HolaMundo = () => {

    const hello = 'Hola Mundo';
    const isTrue = true;
    return(
        <div className ="HolaMundo">
            <h1>{hello}</h1>
            <p>Hola papo, esto es un parrafo</p>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
            {isTrue ? <h4>Esto es verdadero</h4>: <h5>Falso</h5> }
            
        </div>
    )
}
export default HolaMundo;
