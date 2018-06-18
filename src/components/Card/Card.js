import React from "react";
import "./Card.css";

const Card = props => (
   
        <div className="card">
        <div className="img-container"  id={props.id} onClick={() => props.removeCard(props.id)}>
          <img alt={props.name} src={props.image}/>
        </div>
        </div>
     
);

export default Card
