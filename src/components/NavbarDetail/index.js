import React, { useState } from "react";
import { Row, Col, Dropdown, Badge } from "react-bootstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useSelector } from "react-redux";

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (category, selected) =>
  category.map((item) => {
    return <MenuItem text={item.name} key={item.id} selected={selected} />;
  });

export default function NavbarDetail() {
  const [selected, setSelected] = useState("TOP");
  const [visibility, setVisibility] = useState("initial");
  const { category } = useSelector((state) => state.article);

  let menuItems = Menu(category, selected);
  const menu = menuItems;

  const onSelect = (key) => {
    setSelected(key);
  };
  return (
    <div>
      <div className="d-flex justify-content-between pt-3 px-4 ">
        <img alt="edit" src={`${window.location.origin}/images/mini_logo.svg`} />
        <a href="masuk" className="text-decoration-none text-reset">
          Masuk
        </a>
      </div>
    </div>
  );
}
