import React from "react";

export const Cardpeople = (props) => {
	return (
<div className="cardv m-2 border" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Gender: </p>
    <p className="card-text">Hair Color: {props.hair_color} </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
	);
};
