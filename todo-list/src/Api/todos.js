const url = 'http://assets.breatheco.de/apis/fake/todos/user/ricardolence';

export const getAllTodos = () => {
    return fetch(url, { 
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
}