import ItemCount from './ItemCount';



export const Item = ({id, marca, filtro, modelo, color, precio, img, detalle}) => {
    return (
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" alt={`{marca} {modelo}`} src={img}/>
                <div className="card-body">
                    <h4 className="card-marca">{marca}</h4>
                    <h5 className="card-modelo">{modelo}</h5>
                    <p className="card-color">Color: {color}</p>
                    <p className="card-precio">${precio}</p>
                    <p className="card-detalle">{detalle}</p>
                    <div>
                    <ItemCount/>
                    <button className=" btn-agregar">Agregar al carrito<i className="fas fa-shopping-cart" /></button>
                    </div>
                </div>
            </div>

    );
};

export default Item;