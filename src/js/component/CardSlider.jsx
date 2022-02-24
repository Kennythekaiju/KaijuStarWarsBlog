import React from "react";
import propTypes from "prop-types";

const CardSlider = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm"><div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          
        ></img>
        <ul className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <li className="list-group-item ">Gender: {props.gender}</li>
          <li className="list-group-item ">Hair-Color: {props.hair_color}</li>
          <li className="list-group-item ">Eye-Color: {props.eye_color}</li>
        </ul>
        <div className="cardButtons d-flex">
          
            <button type="button" className="btn btn-primary">
              Learn More!
            </button>
          
          <button
            type="button"
            className="ms-auto btn btn-warning"
          >
           
              <i className="far fa-heart"></i>
            
          </button>
        </div>
      </div></div>
      </div>
    </div>
  );
};
export default CardSlider;
