import React, { useState} from "react";
import PropTypes from "prop-types";


const CharacterCard = (props) => {
 
  
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          
        />
        <ul className="card-body">
          <h5 className="card-title">Name:{props.name}</h5>
          <li className="list-group-item ">Gender: {props.gender}</li>
          <li className="list-group-item ">Hair Color: {props.hair_color}</li>
          <li className="list-group-item ">Eye Color: {props.eye_color}</li>
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
      </div>
    );
  };
  CharacterCard.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    
  };
  export default CharacterCard;