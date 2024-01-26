import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductSingle = (props) => {

  const { title, price, description, image, rating } = props;
  const product = props;
  const dispatch = useDispatch();

  return (
    <Card style={{width: "18rem", padding: "1rem"}}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
  
      <Card.Text>Price: ${price} 
      <br />
      Rating: ${rating.rate}
      <br />
      Description: ${description}
      </Card.Text>
     <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add product to card</Button>
      </Card.Body>
    </Card>
  );
}       

export default ProductSingle;