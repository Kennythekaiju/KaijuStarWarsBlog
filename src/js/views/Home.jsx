import React, {useContext} from "react";
import CharacterCard from "../component/CharacterCard.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import propTypes from "prop-types";
import CardSlider from "../component/CardSlider.jsx";


const Home = (props) => {
     const {store, action} = useContext(Context);
     
    return (
      <>
        <h1 className="text-danger ms-3">Characters</h1>
        <div className="characterDisplay d-flex flex-row text-center mt-5">
          
            <div className="col mx-3">
            {store.people.map((person, i) =>{
              
              return (
                <CharacterCard
                name={person.name}
                
              />
              )
            })}
             
            </div>
          
        </div>
    
      </>
    );
  };
  
export default Home;