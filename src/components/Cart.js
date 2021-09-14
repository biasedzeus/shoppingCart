import React from "react";
import { Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardBody,
    CardHeader,
    Card,
    CardFooter,
    Col,
    Row,
    CardText

} from "reactstrap";

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount)+ parseFloat(item.productPrice);
        
    });

    return (
        <Container fluid>

            <h1 className ="text-success">
                Your cart

            </h1>
            <ListGroup>
                {cartItem.map(item =>(
                    <ListGroupItem key={item.id} >
                        <Row>
                            <Col>
                            <img

                            height={80}
                            src={item.tinyImage}
                                />
                            
                            
                            </Col>

                            <Col className ="text-center">
                                <div className="text-primary">
                                    {item.productName}


                                </div>
                                <span>
                                    Price:{item.productPrice}
                                </span>

                                <Button
                                color="danger"
                                onClick= {()=>removeItem(item)}

                                >
                                    Remove
                                </Button>

                            
                            
                            </Col>
                        </Row>

                    </ListGroupItem>


                  

                  
                ))}

            </ListGroup>
            {/* // If EVerything is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className ="text-center mt-3">
                        <CardHeader>
                            Grand Total :
                        </CardHeader>
                        <CardBody>
                            your amount for {cartItem.length} product is {amount}
                        </CardBody>
                        <CardFooter>
                            <Button 
                            color = "success"
                            onClick = {buyNow}
                            >
                                PAY HERE
                            </Button>
                        </CardFooter>

                    </Card>
                    

                ) : (
                    <h1 className ="text-warning">
                    Cart is Empty</h1>
                )
            }




        </Container>
    )



}




export default Cart ;

