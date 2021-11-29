import * as api from "../api/index.js";

export const getTodos = async()=>{
    try{
        const {data} = await api.getTodos();
        return data;
    }catch(error){
        console.log(error);
    }
}


export const createTodo = async(datos)=>{
    try{
        const {data} = await api.createTodo(datos);
        return data;
    }catch(error){
        console.log(error);
    }
}

export const deleteTodo = async(id)=>{
    try{
        console.log(id)
        const {data} = await api.deleteTodo(id);
        return data
    }catch(error){
        
    }
}