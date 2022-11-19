import { useState, useEffect } from "react";
import Zapatillas from "../APIrest/productos";
import Item from "../Componentes/Item";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [filter, setFilter] = useState("");
    const [zapatillas, setZapatillas] = useState([]);
    const { productId } = useParams();

    
    const getImages = () => {
        setTimeout(() => {
        const tienda = Zapatillas;
        setZapatillas(tienda);
        }, 1500);
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className="principal_container">
        <h1>Tienda - Productos destacados</h1>
        <h4>REFINA TU BUSQUEDA POR MARCAS</h4>
        <input
            id="filter"
            name="filter"
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
        />
        <button id="searchButton" className="searchButton" title="Buscar"> &#128270; </button>

        <div className="cards-container">
            {productId 
            ? zapatillas
                .filter((zapa) => zapa.marca.includes(filter))
                .filter((zapa) => zapa.marca === productId)
                .map((zapatillas, i) => (
                    <Item
                    key={i}
                    id={zapatillas.id}
                    marca={zapatillas.marca}
                    modelo={zapatillas.modelo}
                    color={zapatillas.color}
                    precio={zapatillas.precio}
                    img={zapatillas.img}
                    />
                ))
            : zapatillas
                .filter((zapa) => zapa.marca.includes(filter))
                .map((zapatillas, i) => (
                    <Item
                    key={i}
                    id={zapatillas.id}
                    marca={zapatillas.marca}
                    modelo={zapatillas.modelo}
                    color={zapatillas.color}
                    precio={zapatillas.precio}
                    img={zapatillas.img}
                    />
                ))}
        </div>
        </div>
    );
}

export default ItemDetailContainer;




// .then(data =>{
//     const arrayFiltrado = data.filter( x=> x.category === cat);
//     setProductos(arrayFiltrado);
//     const arraySinFiltro = data
//     console.log(data);
// if (cat){
//     console.log(cat); (setProductos(arrayFiltrado))
// } else{
//     ((setProductos(arraySinFiltrado)))
// }
// })