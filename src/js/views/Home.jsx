import React from "react";
import CharacterCard from "../component/CharacterCard.jsx";
import "../../styles/home.css";
import propTypes from "prop-types";

const Home = (props) => {
    
    return (
      <>
        <h1 className="text-danger ms-3">Characters</h1>
        <div className="characterDisplay d-flex flex-row text-center mt-5">
          
            <div className="col mx-3">
              {" "}
              <CharacterCard
                name={props.characters.name}
                gender={props.characters.gender}
                hair_color={props.characters.hair_color}
                eye_color={props.characters.eye_color}
                detail={props.characters.detail}
                
              />{" "}
            </div>
          
        </div>
    
      </>
    );
  };
  
export default Home;