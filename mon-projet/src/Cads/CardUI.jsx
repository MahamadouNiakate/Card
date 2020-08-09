import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Toffe 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 claassName="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          exercitationem voluptatum labore illo sit commodi cum, iste maxime
          modi architecto placeat voluptate repudiandae recusandae at veniam
          pariatur sint officiis accusamus inventore magnam molestias beatae
          dignissimos.
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  );
};

export default Card;
