import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import { DropdownsContext } from "../context/authContext";
import Cards from "react-credit-cards";
import '../styles/CreditCardForms.css'
import "react-credit-cards/es/styles-compiled.css";
import swal from "sweetalert";

const CreditCardForm = () => {

const {itemCart} = useContext(DropdownsContext)

  const handleClick = (e)=>{
    e.preventDefault();
    
    itemCart.map(item => {
      const data  = {Paciente:item.Paciente,created:item.created,drug:item.drug}
      fetch('http://localhost:3080/pedido/create-drugs',{
        method:'POST',
        mode:'cors',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(resp=> resp.json())
      .then(resp => console.log(resp))

    })


    return swal("Compra realizada con éxito!","Gracias por confiar en Management Health", "success")

  }
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  if(!itemCart) return 'loading'

  




  return (
    <div style={{display:'flex',width:'100%',justifyContent:'space-around',marginTop:'5%'}}>

      <div style={{display:'flex'}}>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      ></Cards>

      <form>
        <input
          style={{marginLeft:'10px'}}
          type="tel"
          name="number"
          placeholder="Número de tarjeta"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

        <input
          style={{marginTop:'10px',marginLeft:'10px'}}
          type="text"
          name="name"
          placeholder="Nombre y Apellido como figura en la tarjeta"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
        <input
                style={{marginTop:'10px',marginLeft:'10px'}}
          type="text"
          name="expiry"
          placeholder="MM/AA Expiración"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
        <input
          style={{marginTop:'10px',marginLeft:'10px'}}
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

      </form>
      </div>

      <div>
        <div style={{border:'1px solid GRAY'}}>

      <table style={{width:'200px'}}>

  <thead>
    <p>Resumen Pedido</p>
    <tr>
      <th className="th_name">Nombre</th>
      <th className="th_name">Cantidad</th>
      <th id="th_price">Precio</th>
    </tr>
    <hr/>
  </thead>

    {itemCart.length !== 0 && 

   itemCart.map(item =>(

      <tbody>
    
      <tr >
      <td id="td_drugMap">{item.drug.name}</td>
      <td style={{paddingLeft:'50px',paddingTop:'10px',paddingBottom:'10px'}}>(x1)</td>
      <td id="td_drugMapPrice">${item.drug.price}</td>
    </tr>
    <hr/>
  
        </tbody>
   ))

    }
</table>
</div>

<button onClick={handleClick} id='button_pay' >PROCEDER A PAGAR</button>
      </div>
    </div>





  );
};

export default CreditCardForm;
