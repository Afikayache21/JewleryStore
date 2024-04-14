import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from './CartContext';

function Cart() {
  const { addToCart, cartList, removeFromCart, clearCart } = useContext(CartContext);
   
  let viewCart = cartList.map((item) => {
    return (
      <div key={item.id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.images[0]} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.content}
            </Card.Text>
            <Card.Text>
              ${item.price}
            </Card.Text>
            <Card.Text>
              {item.subheader}

            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )})

  return (
    {viewCart}
  );
}

export default Cart;