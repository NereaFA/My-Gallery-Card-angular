import { useState } from "react";

const initialValue = {
    title: "titulo",
    description: "descripción",
    imgUrl: "url imagen"
}

export default function Form(){

    const [data, setData] = useState(initialValue);

    const submit =(e) =>{
        e.preventDefault();
        console.log(data);
    };

    const changeValue = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
       
    }

    return (
    <form onSubmit={submit}> 
        <label>
            Titulo
            <input type="text" value={data.title} name="title" onChange={changeValue}/>
        </label>
       <br/>
        <label>
            Descripcion
            <input type="text" value={data.description} name="description" onChange={changeValue}/>
        </label>
       <br/>
        <label>
            imgUrl
            <input type="text" value={data.imgUrl} name="imgUrl" onChange={changeValue}/>
        </label>

        <button>Añadir</button>
    </form>
    );
}