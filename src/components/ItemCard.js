import React from "react";

import { Card,CardImg,CardBody,CardText,Button, CardTitle } from "reactstrap";

const ItemCard = ({product , addIncart}) =>{

        return(

            <Card className="mt-2 mb-1">


                <CardImg 
                top
                height="250"
                width="100%"
                src={product.smallImage}
                className=""/>
                <CardBody className = "text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className = "secondary"
                >Price : $ {product.productPrice}</CardText>
                <Button color = "success"
                onClick = {()=>addIncart(product)}>
                    Buy Now
                </Button>
                </CardBody>
            </Card>



        )



}



export default ItemCard;