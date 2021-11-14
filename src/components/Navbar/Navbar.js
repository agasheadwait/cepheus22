import { useState } from "react";
import strip from "../../assets/Path_1320.svg";
import navElems from "./NavElems";
import NavElems from "./NavElems";
import "./Navbar.css";
import Scrollspy from "react-scrollspy";

const navItems = [
  { elem: "Home", key: 0, curr: true, link: "home" },
  { elem: "About Us", key: 1, curr: false, link: "abtUs" },
  { elem: "Events", key: 2, curr: false, link: "events" },
  { elem: "Schedule", key: 3, curr: false, link: "schedule" },
  { elem: "FAQ", key: 4, curr: false, link: "faq" },
  { elem: "Sponsors", key: 5, curr: false, link: "sponsors" },
  { elem: "Contact Us", key: 6, curr: false, link: "contactUs" },
];

const Navbar = () => {
  const [nav, setNav] = useState(navItems);

  const onChangeHandler = (event) => {
    console.log(event.id);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div>
          <img src={strip} />
        </div>
        <div className="navElemsContainer">
          <NavElems items={nav} onClick={onChangeHandler} />
        </div>
      </div>

      <Scrollspy
        items={[
          "home",
          "abtUs",
          "events",
          "schedule",
          "faq",
          "sponsors",
          "contactUs",
        ]}
        currentClassName="is-current"
        onUpdate={onChangeHandler}
      ></Scrollspy>
    </div>
  );
};

export default Navbar;
