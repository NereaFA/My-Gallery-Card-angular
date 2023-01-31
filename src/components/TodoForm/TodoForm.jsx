import { useRef } from "react";

// const initialList = {
//     name: "Aprender React",
//     isDone: "falso"
// }

export default function TodoForm({onSubmit}) {
    const inputRef = useRef();

    // const [data, setData] = useState(initialList);

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        //Dos formas de recoger el dato del input:
        console.log(document.querySelector(".fn-input-list").value);
        console.log(inputRef.current.value);
        onSubmit({name: inputRef.current.value, isDone: false})
    };

    // const changeValue = (e) =>{
    //     setData({...data, [e.target.name]: e.target.value})
    // }

    return (
        <form onSubmit={submit}> 

           <input ref={inputRef} className="fn-input-list" type="text" />
            <button>Guardar</button>
        </form>
        );
    }