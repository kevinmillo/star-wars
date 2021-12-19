import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Cardpeople } from "../component/cardpeople";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	//ACA PUEDO ESCRIBIR CODIGO DE JS
	// let num = 0;
	// console.log("mi numero es ", num)

	return (
	//SIEMPRE VA A SER HTML (Boostrap) + Algo de JS
		<div className="container ">
			<div class="row flex-row flex-nowrap overflow-auto row-cols-1 row-cols-md-3 g-4">
				{store.people.map((item, index) => {
					return (
						<Cardpeople name={item.name} hair_color={item.hair_color}/>
						);
					})}

					</div>
					
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
