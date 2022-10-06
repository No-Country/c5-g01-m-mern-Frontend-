
import { useContext ,useEffect} from "react";
import { Card } from "react-bootstrap";
import { DropdownsContext } from "../context/authContext";
import './CardItem.css'


function CardItem ({image, name, price,id}){


  const {itemCart,setCart,userInfo} = useContext(DropdownsContext);
  const date = new Date()
 

  const addToCart = () =>{
    console.log(id)

      fetch(`http://localhost:3080/drug/get-drugsById/${id}`)
      .then(resp => resp.json())
      .then(respJSON => setCart([...itemCart,{drug:respJSON.msg,Paciente:userInfo.data._id,created:date.toLocaleString()},]))

  console.log(itemCart)
    
}

    return (

       <Card style={{ width: '20%',height:'400px',marginLeft:'7%',marginBottom:'1%'}}>
         <Card.Img variant="top" style={{width:'100%',objectFit:'cover',height:'80%'}} src={image} />
         <div id='Card_Body'>
         <Card.Body>
          <div id='FlexContent'>
            <div>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
           ${price}
           </Card.Text>
           </div>

           <button onClick={ addToCart} id="Card_AddToCart">Agregar</button>
           </div>
         </Card.Body>
         </div>
       </Card>

);
};
export default CardItem;