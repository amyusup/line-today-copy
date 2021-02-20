import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Article(props) {
  const { title, article, bgColor } = props;
  const history = useHistory();
  return (
    <>
      <div
        className={`text-left p-5 mr-4 my-5 ${bgColor ? bgColor : "bg-white"}`}
      >
        <h4 className="mb-5">{title}</h4>
        <Row>
          {article.map((item, index) => {
            return (
              <Col
                key={index}
                xs={12}
                md={6}
                style={{ cursor: "pointer" }}
                onClick={() => (window.location = item.url.url)}
              >
                <img
                  src={`https://obs.line-scdn.net/${item.thumbnail.hash}`}
                  height={150}
                  style={{ width: "90%", cursor: "hand" }}
                />
                <h6 className="text-left">{item.title}</h6>
                <p className="text-left">
                  <small>{item.publisher}</small>
                </p>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
