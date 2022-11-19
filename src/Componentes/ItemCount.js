import React from 'react'
import { useState} from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState (0);

    const handleResta = () => {
        setContador(contador - 1);
    }
    const handleSuma = () => {
        setContador(contador + 1);
    }


    return (
    <div className='btn-agregar'>
        <button disabled={contador === 0 ? true : false} onClick={handleResta}>-</button>
        <p>{contador + 1}</p>
        <button onClick={handleSuma}>+</button>
    </div>
    )
}

export default ItemCount