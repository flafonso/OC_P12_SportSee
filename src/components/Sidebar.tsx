import SportBtn from "./SportBtn";
import YogaIcon from "../assets/YogaIcon";
import SwimmingIcon from "../assets/SwimmingIcon";
import CyclingIcon from "../assets/CyclingIcon";
import BodybuildingIcon from "../assets/BodybuildingIcon";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <SportBtn>
          <YogaIcon />
        </SportBtn>
        <SportBtn>
          <SwimmingIcon />
        </SportBtn>
        <SportBtn>
          <CyclingIcon />
        </SportBtn>
        <SportBtn>
          <BodybuildingIcon />
        </SportBtn>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}

export default Sidebar;
