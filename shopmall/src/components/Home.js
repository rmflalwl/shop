import React from 'react'
import { Container } from "react-bootstrap";
import Card from './Card';
const Home = (props) => {
 return (
  <div>
   <Container className="background">
    <h1>20% Season Off</h1>
    <p>  This is a modified jumbotron that occupies the entire horizontal space
     of its parent. (^_^)     </p>
   </Container>
   <div className="container">
    <div className="row">
     {
      props.shoes.map((shoe, i) => {
       return <Card shoes={shoe} i={i} />
      })
     }
    </div>
   </div>
  </div>
 )
}
export default Home