import {useEffect, useState} from "react";
import { getTodos, createTodo, deleteTodo } from "../functions/index.js";
import './styles.css';


//_rfce usar para completar 
function Todo() {

    const [datos, setDatos] = useState([{}]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
        console.log(e.target.value);
    }

    useEffect(() => {
        
        const fetchData = async()=>{
            const result = await getTodos();
            setDatos(result);
            console.log("Datos -> ", result);
        }
        
        fetchData();
    }, [datos])

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            content: content
        };

        const createData = async()=>{
            const result = await createTodo(data);
            console.log("Ha sido creado el nuevo titulo y descripcion ", result);
        }
        
        createData();   
    }

    const removeTodo = async (id)=>{
        const result = await deleteTodo(id);
        console.log("resultado", result);
    }

    return (
        <div className=" contenedor">
            <h1>Tarea por hacer</h1>
            <div className="cartas">
                {   
                    datos.map((Datos)=>{
                        return <div>
                            {
                                Datos.title && <div class="card text-white bg-dark mb-3 ">
                                    <div class="card-header">{Datos.title && Datos.title }</div>
                                    <div class="card-body">
                                        <p class="card-text">{Datos.content && Datos.content}</p>
                                        
                                    </div>
                                    
                                    <button onClick={()=> removeTodo(Datos._id) } className="botoneliminar btn btn-danger"><i className="material-icons">delete</i></button>
                                </div> 
                            }
                            
                        </div>
                    })
                }
            </div>

            <div>
                <form className="col s12 m6 formulario" onSubmit={handleSubmit}>
                    <div className="col">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">chevron_right</i>
                        <input id="icon_prefix" type="text" className="validate"  onChange={handleTitleChange}/>
                        <label htmlFor="icon_prefix">Titulo</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">attachment</i>
                        <input id="icon_telephone" type="tel" className="validate" onChange={handleContentChange}/>
                        <label htmlFor="icon_telephone">Descripcion</label>
                    </div>
                    <button className="btn btn-outline-primary boton" >Agregar</button>
                    </div>                
                </form>
            </div>
        </div>
    )
}

export default Todo;
