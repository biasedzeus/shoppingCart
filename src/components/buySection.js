import { useState , useEffect} from "react";
import React
from "react";   
import axios from "axios";
import { commerce,datatype } from "faker";
import { Container,Row, Col } from "reactstrap";
import ItemCard from "./ItemCard";





const url = "https://api.pexels.com/v1/search?query=products&per_page=6&page=1"
// const localeURL = "http://myjson.dit.upm.es/api/bins/phz"

const BuySection = ({addIncart}) => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetchPhotos();
          }, []) // Dependecies 
     
    const fetchPhotos = async () => {
        const response= await axios.get(url, {
                    headers:{
                        Authorization : process.env.REACT_APP_API_KEY
                    }
                }) ;

        const {photos} = response.data; 
        //  also can be written as const photos = data.photos


        const allProducts = photos.map(photo => ({
            smallImage:photo.src.medium,
            tinyImage:photo.src.tiny,
            productName:commerce.product(),
            productPrice:commerce.price(),
            id:datatype.uuid()
        }));

        setProducts(allProducts);



    }

       


 

    

    return(
        <Container fluid  className="Navbar">
            <h1 className ="text-success text-center store-heading">

                Store


            </h1>
            <Row>
                {products && products.map(product =>(
                  <Col md={4} key={product.id}>
                       <ItemCard  product ={product} addIncart={addIncart} />


                  </Col>
                ))}
            </Row>
          
           


        </Container>
    )
}

export default BuySection;