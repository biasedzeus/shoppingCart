import React from "react";

import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Button,
  CardTitle,
} from "reactstrap";

const ItemCard = ({ product, addIncart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg
        top
        width="100%"
        src={product.smallImage}
        className="prodImage"
      />
      <CardBody className="text-center itemproductName">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary itemproductPrice">
          Price : $ {product.productPrice}
        </CardText>
        <Button
          className="itemproductBuy"
          color="success"
          onClick={() => addIncart(product)}
        >
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
