import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductSingle = (props) => {
  const { title, price, description, image, rating } = props;
  const product = props;
  const dispatch = useDispatch();

  return (
    <Card
      style={{
        width: "18rem",
        padding: "1rem",
        margin: "1rem",
        textOverflow: "ellipsis",
        height: "auto",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{
            width: "30%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Price: ${price}
          <br />
          Rating: {rating.rate}
          <br />
          {description}
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          Add Product to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductSingle;