import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { PiEyes } from "react-icons/pi";
import { PiPizzaFill } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";

export const CardPizza = ({ name='Pizza Pomodoro Queso', price = 10990, ingredients='Pomodoro y queso', img='https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/D4PC26EIT5BW7JAMNQRUAXGMGQ.jpg' }) => {
  return (
    <Card style={{ width: '20rem', margin:'30px'}}>

        {/* Imagen */}
      <Card.Img variant="top" src={ img } />

        {/* Nombre de la pizza */}
      <Card.Body>
        <Card.Title style={{textAlign:'start'}} >{ name }</Card.Title>
      </Card.Body>

        {/* Cuerpo card */}
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{textAlign:'center'}}>Ingredientes:
        <Card.Text><PiPizzaFill style={{margin:'5px'}}/>{ ingredients.join(', ') }</Card.Text>
        </ListGroup.Item>
      </ListGroup>

        {/* Botones */}
      <Card.Body>
        <b><Card.Text style={{textAlign:'center', marginBottom:'15px'}}>Precio: ${price.toLocaleString('es-CL')}</Card.Text></b>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button style={{ backgroundColor:'white', color:'black' }}>Ver mas <PiEyes style={{ marginBottom:'1px'}}/></Button>
            <Button style={{ backgroundColor:'black', color:'white' }}>Añadir <IoCartOutline style={{ marginBottom:'2px'}} /></Button>
        </div>
      </Card.Body>
    </Card>
  );
}