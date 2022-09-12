import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container className="cart-container" fluid>
      <h1 className="text-success yourcart">Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem className="listItem" key={item.id}>
            <div className="flex-container">
                <div className="image-prodName">

              <img className="cartimage" height={60} src={item.tinyImage} alt="prodimage" />
              <div className="prodname-price">
                <p className="productName">{item.productName}</p>
                <p>Delivery charges @ 0%</p>
              </div>
                </div>
                <p className="price">{item.productPrice}$</p>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* // If EVerything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="card text-center mt-3">
            <div className="subtotal">
                <p>Subtotal</p>
                <span>{amount}$</span>
            </div>
            <div className="subtotal">
                <p>Shipping</p>
                <span>3$</span>
            </div>
            <div className="total">
                <p>Total</p>
                <span><span className="usd">USD</span>{amount + 3}$</span>
            </div>
            <Button className="pay-btn" color="success" onClick={buyNow}>
              PAY HERE
            </Button>
          {/* <CardHeader>Grand Total :</CardHeader>
          <CardBody>
            your amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              PAY HERE
            </Button>
          </CardFooter> */}
        </Card>
      ) : (
        <div className="emptycardcontainer">
        <div className="emptycard">
            <h4>Cart is Empty</h4>
            <h6>Add items to get started.</h6>

        </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
