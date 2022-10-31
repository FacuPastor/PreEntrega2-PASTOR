import { useState, useEffect } from "react";
import Zapatillas from "../APIrest/Zapatillas";
import Item from "../Componentes/Item";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [filter, setFilter] = useState("");
    const [zapatillas, setZapatillas] = useState([]);
    const { cat } = useParams();

    const getImages = () => {
        setTimeout(() => {
        const tienda = Zapatillas;
        setZapatillas(tienda);
        }, 3000);
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className="principal_container">
        <h1>Tienda</h1>
        <input
            id="filter"
            name="filter"
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
        />

        <div className="cards-container">
            {cat ? zapatillas
                .filter((zapa) => zapa.marca.includes(filter))
                .filter((zapa) => zapa.marca === cat)
                .map((zapatillas, i) => (
                    <Item
                    id={i}
                    key={i}
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
                    id={i}
                    key={i}
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