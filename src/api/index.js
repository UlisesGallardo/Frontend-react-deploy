import axios from "axios";

const url = "https://apppreact.herokuapp.com/todos";
export const getTodos = ()=>axios.get(url);
export const createTodo = (newTodo)=>axios.post(url, newTodo);
export const deleteTodo = (id)=>axios.delete(`${url}/${id}`);