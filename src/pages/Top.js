import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Dropdown, Row, Col, Badge, ButtonGroup, Button } from "react-bootstrap";

// list of items
const list = [
  { name: "TOP" },
  { name: "Rekomendasi" },
  { name: "Showbiz" },
  { name: "News" },
  { name: "Life" },
  { name: "Regional" },
  { name: "Hot Issue" },
  { name: "Intermezzo" },
  { name: "Trending" },
  { name: "Watch Now" },
  { name: "K! Update" },
  { name: "Sci-Tech" },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

export default function Top() {
  const [selected, setSelected] = useState("TOP");
  const [visibility, setVisibility] = useState("initial");
  let menuItems = Menu(list, selected);
  const menu = menuItems;

  const onSelect = (key) => {
    setSelected(key);
  };
  return (
    <div className="bg-grey vh-85 shadow">
      <div className="bg-white container">
        <div className="d-flex justify-content-between">
          <img alt="edit" src={`${window.location.origin}/images/logo.svg`} />
          <a href="masuk" className="text-decoration-none text-reset mr-2">
            Masuk
          </a>
        </div>
        <Row>
          <Col xs="11">
            <div className="mt-3" style={{ visibility: visibility }}>
              <ScrollMenu data={menu} selected={selected} onSelect={onSelect} />
            </div>
          </Col>
          <Col xs="1" className="mt-2">
            <Dropdown
              onToggle={() => setVisibility("initial")}
              onClick={() => setVisibility("hidden")}
            >
              <Dropdown.Toggle variant="white" />
              <Dropdown.Menu className="dropdown-menu">
                <Badge variant="dark" className="badge-menu">
                  TOP
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Rekomendasi
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Showbiz
                </Badge>
                <Badge variant="light" className="badge-menu">
                  News
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Life
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Regional
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Hot Issue
                </Badge>
                <Badge variant="light" className="badge-menu">
                  TOP
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Rekomendasi
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Showbiz
                </Badge>
                <Badge variant="light" className="badge-menu">
                  News
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Life
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Regional
                </Badge>
                <Badge variant="light" className="badge-menu">
                  Hot Issue
                </Badge>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <div className="bg-light-grey container">
        <ButtonGroup className="w-100 pr-4 my-3">
          <Button variant="light" className="py-2 px-5">HOT Issue</Button>
          <Button variant="light" className="py-2 px-5">Watch Now</Button>
          <Button variant="light" className="py-2 px-5">K! Update</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
