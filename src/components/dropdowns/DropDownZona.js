import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const DropDownZona = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [state, setState] = useState("Zona geográfica");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const items = ["CABA", "Prov. Buenos Aires", "Otra Provincia"];

  console.log(state);

  return (
    <div className="center">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="primary" caret>
          {state}
        </DropdownToggle>
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
export default DropDownZona;
