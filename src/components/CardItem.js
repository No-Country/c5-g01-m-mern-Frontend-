
import { useContext } from "react";
import { Card } from "react-bootstrap";
import barbijos from '../assets/images/Barbijos.jpg';
import { DropdownsContext } from "../context/authContext";
import './CardItem.css'

function CardItem ({image, name, price, buttonAdd,id}){


  const {itemCart,setCart,userInfo,setUserInfo} = useContext(DropdownsContext);
  console.log(userInfo)
  const date = new Date()

  console.log(itemCart)

    return (
      
       <Card style={{ width: '27rem',marginLeft:'2%',marginBottom:'0.5%'}}>
         <Card.Img variant="top" src={barbijos} />
         <div id='Card_Body'>
         <Card.Body>
          <div id='FlexContent'>
            <div>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
           ${price}
           </Card.Text>
           </div>

           <button onClick={() => setCart({drug:id,Paciente:userInfo.data._id,created:date.toLocaleString()}) } id="Card_AddToCart">Agregar</button>
           </div>
         </Card.Body>
         </div>
       </Card>
);
};
export default CardItem;