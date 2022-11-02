import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

export const Item = ({id, marca, filtro, modelo, color, precio, img, detalle}) => {
  return (
    <div className='cardf'>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" alt={`{marca} {modelo}`} src={img} />
      <Card.Body>
        <Card.Title>{marca}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{modelo}</Card.Subtitle>
        <Card.Text></Card.Text>
        <p className="card-color">Color: {color}</p>
        <p className="card-precio">${precio}</p>
        <NavLink to = {`/detalle/${id}`} className="btn-agregar">Ver detalles del producto</NavLink> 
      </Card.Body>
    </Card>
    </div>
  );
}

export default Item;