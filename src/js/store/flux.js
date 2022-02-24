const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://www.swapi.tech/api";
	return {
		store: {
			people: [
				
			],
			planets: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
		
		
			loadSomeData: () => {
				console.log("working");
				fetch(`${base_url}/people`)
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.log(err))
				fetch(`${base_url}/planets`)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.log(err))

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
