import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./CreditCardForms.css";

const CreditCardForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      ></Cards>

      <form>
        <input
          type="tel"
          name="number"
          placeholder="Número de tarjeta"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

        <input
          type="text"
          name="name"
          placeholder="Nombre y Apellido como figura en la tarjeta"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
        <input
          type="text"
          name="expiry"
          placeholder="MM/AA Expiración"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
        <div>
          <button className="card-btn" type="submit">
            Comprar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
