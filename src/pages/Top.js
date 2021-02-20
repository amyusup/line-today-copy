import React, { useState } from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Article from "../components/Article";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../redux/actions/article";

export default function Top() {
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state.article);

  React.useEffect(() => {
    dispatch(getArticle());
  }, []);
  // console.log(article[0]);
  return (
    <Row className="bg-grey vh-85 mx-0">
      <Col></Col>
      <Col className="bg-white p-0" sm={12} md={7}>
        <Navbar />
        <div className="bg-light-grey text-center">
          <ButtonGroup className="w-75 my-3 ">
            <Button variant="light" className="border">
              HOT Issue
            </Button>
            <Button variant="light" className="border">
              Watch Now
            </Button>
            <Button variant="light" className="border">
              K! Update
            </Button>
          </ButtonGroup>

          <Carousel />

          {/* //News */}
          <div className="mt-5 ml-4">
            {article[0].templates[1].sections[1].articles.map((item, index) => {
              return (
                <Row className="my-2"  onClick={() => (window.location = item.url.url)} style={{cursor:'pointer'}}>
                  <Col xs={5} md={3} >
                    <img
                      src={`https://obs.line-scdn.net/${item.thumbnail.hash}`}
                      height={60}
                    />
                  </Col>
                  <Col xs={7} md={9}>
                    <h6 className="text-left">{item.title}</h6>
                    <p className="text-left">
                      <small>{item.publisher}</small>
                    </p>
                  </Col>
                </Row>
              );
            })}

            <Article
              title={article[0].templates[5].title}
              article={article[0].templates[5].sections[0].articles}
            />
            <Article
              title={article[0].templates[7].title}
              article={article[0].templates[7].sections[0].articles}
            />
            <Article
              title={article[0].templates[8].title}
              article={article[0].templates[8].sections[0].articles}
            />
            <Article
              title={article[0].templates[9].title}
              article={article[0].templates[9].sections[0].articles}
            />
            <Article
              title={article[0].templates[10].title}
              article={article[0].templates[10].sections[0].articles}
            />
            <Article
              title={article[0].templates[11].meta.categoryName}
              article={article[0].templates[11].sections[0].articles}
            />
            <Article
              title={article[0].templates[12].title}
              article={article[0].templates[12].sections[0].articles}
            />
            <Article
              title={article[0].templates[13].title}
              article={article[0].templates[13].sections[0].articles}
            />
            <Article
              title={article[0].templates[14].title}
              article={article[0].templates[14].sections[0].articles}
            />
            <Article
              title={article[0].templates[16].title}
              article={article[0].templates[16].sections[0].articles}
            />
            <Article
              title={article[0].templates[17].title}
              article={article[0].templates[17].sections[0].articles}
            />
            <Article
              title={article[0].templates[19].title}
              article={article[0].templates[19].sections[0].articles}
            />
            <Article
              title={article[0].templates[20].title}
              article={article[0].templates[20].sections[0].articles}
            />
            <Article
              title={article[0].templates[21].title}
              article={article[0].templates[21].sections[0].articles}
            />
            <Article
              title={article[0].templates[23].title}
              article={article[0].templates[23].sections[0].articles}
              bgColor="bg-light-grey"
            />
          </div>
          <div className="bg-grey p-5">
            <small  className="mr-5">Term Of Use</small>
            <small>Privacy Policy</small>
            <small  className="ml-5">Disclaimer</small>
            <div><small>© Line Corporation</small></div>
          </div>
          
        </div>
      </Col>
      <Col></Col>
    </Row>
  );
}
