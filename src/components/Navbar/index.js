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

export default function Navbar() {
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
        <img alt="edit" src={`${window.location.origin}/images/logo.svg`} />
        <a href="masuk" className="text-decoration-none text-reset">
          Masuk
        </a>
      </div>
      <Row className="py-2 ml-1 navbar sticky-top" >
        <Col xs={9} md={10} lg={11}>
          <div className="mt-3 py-2" style={{ visibility: visibility }}>
            <ScrollMenu data={menu} selected={selected} onSelect={onSelect} />
          </div>
        </Col>
        <Col xs={2} md={2} lg={1} className="mt-3">
          <Dropdown
            onToggle={() => setVisibility("initial")}
            onClick={() => setVisibility("hidden")}
          >
            <Dropdown.Toggle variant="white"  />
            <Dropdown.Menu className="dropdown-menu ">
              {category.map((item) => {
                return (
                  <Badge key={item.id} variant="light" className="badge-menu">
                    {item.name}
                  </Badge>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
}
