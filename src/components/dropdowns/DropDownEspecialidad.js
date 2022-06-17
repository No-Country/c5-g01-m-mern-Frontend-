import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";




const DropDownEspecialidad = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [state, setState] = useState("Especialidad");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const items = ["Clínico", "Cardiología", "Psicología", "Kinesiología","Oncología"];

  console.log(state);

  return (
    <div className="center">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="primary" caret>{state}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Seleccione</DropdownItem>

          {items.map((val, id) => {
            return (
              <div key={id}>
                <DropdownItem  divider></DropdownItem>
                <DropdownItem onClick={() => setState(val)}>{val}</DropdownItem>
              </div>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default DropDownEspecialidad;
