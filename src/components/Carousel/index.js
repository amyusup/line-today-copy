import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function CustomCarousel() {
  const [index, setIndex] = React.useState(0);
  const { article } = useSelector((state) => state.article);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
//   console.log(article[0].templates[1].sections[0].articles);
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      prevIcon={
        <div
          className="bg-grey rounded-circle p-2"
          style={{ height: 35, width: 35 }}
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        </div>
      }
      nextIcon={
        <div
          className="bg-grey rounded-circle p-2"
          style={{ height: 35, width: 35 }}
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
        </div>
      }
    >
      {article[0].templates[1].sections[0].articles.map((item, index) => {
        return (
          <Carousel.Item key={index}  onClick={() => (window.location = item.url.url)}>
              
            <img
              className="d-block w-100"
              src={`https://obs.line-scdn.net/${item.thumbnail.hash}`}
              alt="First slide"
              height={350}
            />
            <Carousel.Caption>
              <p className="bg-white text-dark rounded p-3">
                {item.title}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
