import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";


const DropDownProfesion = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [state, setState] = useState("Profesión");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const items = ["Médico", "Enfermero", "Acompañante"];

  console.log(state);

  return (
    <div className="left">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="primary" caret>{state}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Seleccione</DropdownItem>

          {items.map((val, id) => {
            return (
              <div key={id}>
                <DropdownItem divider></DropdownItem>
                <DropdownItem onClick={() => setState(val)}>{val}</DropdownItem>
              </div>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropDownProfesion;
