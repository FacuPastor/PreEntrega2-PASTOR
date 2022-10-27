import React from 'react'
import Zapatillas from '../APIrest/Zapatillas'
import Item from './Item'

const ItemList = () => {

    return (
        <div className="flex flex-wrap justify-between tienda">
            <h1>Productos destacados</h1>
            {Zapatillas.map((zapatilla) => (
                <Item 
                key={zapatilla.id}
                marca={zapatilla.marca}
                modelo={zapatilla.modelo}
                color={zapatilla.color}
                precio={zapatilla.precio}
                img={zapatilla.img}
                />
            ))}
    </div>
    )
}

export default ItemList;