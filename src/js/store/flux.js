const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async() => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/people", requestOptions)
					.then(response => response.json())
					.then(async result => 
						{
							let personajes = result.results;
							let listaPersonajes = [];
							for (let i=0;i<personajes.length;i++)
							{
								let personaje = {
									uid: personajes[i].uid,
									name: personajes[i].name,
									hair_color:"",
									eye_color: ""
								}
								var requestOptions = {
									method: 'GET',
									redirect: 'follow'
								};
								
								
								await fetch(personajes[i].url, requestOptions)
									.then(response => response.json())
									.then(result => {
										personaje.hair_color = result.result.properties.hair_color;
										personaje.eye_color = result.result.properties.eye_color;
										personaje.gender = result.result.properties.gender;
										console.log("Armando el personaje",personaje)
										listaPersonajes.push(personaje)
										// setStore({ people: [...people,personaje] })
									})
									.catch(error => console.log('error', error));
								}
								console.log("LISTA",listaPersonajes)
								setStore({people:listaPersonajes});
							})
					.catch(error => console.log('error', error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
