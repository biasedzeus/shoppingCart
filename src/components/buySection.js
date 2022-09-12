import { useState , useEffect} from "react";
import React
from "react";   
import axios from "axios";
import { random,  commerce,datatype } from "faker";
import { Container,Row, Col } from "reactstrap";
import ItemCard from "./ItemCard";





const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localeURL = "http://myjson.dit.upm.es/api/bins/phz"

const BuySection = ({addIncart}) => {

    const [products,setProducts] = useState([])

    const fetchPhotos = async () => {
        const {data} = await axios.get(localeURL);
        ;


        const {photos} = data; 
        //  also can be written as const photos = data.photos


        const allProducts = photos.map(photo => ({
            smallImage:photo.src.medium,
            tinyImage:photo.src.tiny,
            productName:random.word(),
            productPrice:commerce.price(),
            id:datatype.uuid()
        }));

        setProducts(allProducts);



    }

       


 useEffect(() => {
   fetchPhotos();
     }, []) // Dependecies 


    

    return(
        <Container fluid  className="Navbar">
            <h1 className ="text-success text-center store-heading">

                Store


            </h1>
            <Row>
                {products.map(product =>(
                  <Col md={4} key={product.id}>
                       <ItemCard  product ={product} addIncart={addIncart} />


                  </Col>
                ))}
            </Row>
          
           


        </Container>
    )
}

export default BuySection;