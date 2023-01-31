import "./TodoList.css"

export default function TodoList({list, onChangeChecked}){
    console.log(list)
    return (
    <ul>
        {list.map((item, index) => (
            <li key={index}>
            <input type="checkbox" checked={item.isDone} onChange={(e) => onChangeChecked(e.target.checked, index)}/>
            <span className={item.isDone ? "checked": ""}>{item.name}</span>
            </li>
            ))}
    </ul>
    );
}