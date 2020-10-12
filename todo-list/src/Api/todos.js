const url = 'https://assets.breatheco.de/apis/fake/todos/user/ricardolence';
const headers = {
    "Content-Type": "application/json",
}

export const createNewTodoList = ()=>{
    return fetch(url, {
        method:"POST",
        body:JSON.stringify([]),
        headers:headers
    })
}

export const getAllTodos = () => {

    return fetch(url, { 
        method: "GET",
        headers:headers
    })
}

export const createAndDeleteTodo = (todos) => {
    return fetch(url, {
        method:"PUT",
        body:JSON.stringify(todos),
        headers:headers
    })
}

