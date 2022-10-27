import { Link } from 'react-router-dom'



export const Item = ({id, marca, filtro, modelo, color, precio, img, detalle}) => {
    return (
            <div className="card">
                <img className="card-img-top" alt={`{marca} {modelo}`} src={img}/>
                <div className="card-body">
                    <h4 className="card-marca">{marca}</h4>
                    <h5 className="card-modelo">{modelo}</h5>
                    <p className="card-color">Color: {color}</p>
                    <p className="card-precio">${precio}</p>
                    <Link to = {`/${filtro}/${id}`} className="btn-agregar">Ver detalles del producto</Link> 
                </div>
            </div>

    );
};

export default Item;