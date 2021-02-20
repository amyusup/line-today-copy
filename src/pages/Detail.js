import React from "react";
import NavbarDetail from "../components/NavbarDetail";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
export default function Detail() {
    const {url} = useParams
    React.useEffect(()=>{
        window.location.assign(url)
    },[])
  return (
   <div></div>
  );
}
