const getState = ({ getStore, getActions, setStore }) => {
  
    return {
		store: {
			todos:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {},
			loadSomeData: () => {
				const url = 'https://3000-e29484b0-2914-4979-abe1-2bebed36a338.ws-eu01.gitpod.io/todo';
				const header = { "Content-Type": "application/json" };

				fetch(url, {
					method: "GET",
					headers: header
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
                        console.log(data);
                        setStore({todos:data.todos})
					})
					.catch(err => {
						console.log(err);
					});
            },
            async addTodo(todo){
                const url = 'https://3000-e29484b0-2914-4979-abe1-2bebed36a338.ws-eu01.gitpod.io/create/todo';
                const header = { "Content-Type": "application/json" };
                let response = false;
                await fetch(url, {
                    method:"POST",
                    body:JSON.stringify(todo),
                    headers:header,
                })
                .then( res =>{
                    return res.json();
                }).then( data => {
                    console.log(data);
                    response = true;
                }).catch( err => {
                    console.log(err);
                })
                return response;
            },
            async deleteTodo(id){
                const url = 'https://3000-e29484b0-2914-4979-abe1-2bebed36a338.ws-eu01.gitpod.io/delete/todo/'+id;
                const header = { "Content-Type": "application/json" };
                let response = false;
                await fetch(url, {
                    method:"DELETE",
                    headers:header
                })
                .then( res =>{
                    return res.json()
                })
                .then( data => {
                    console.log(data);
                    response = true;
                })
                .catch( err => {
                    console.log(err);
                })
                return response;
            }		
        }
	};
};

export default getState;