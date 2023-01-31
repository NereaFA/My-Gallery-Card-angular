import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Gallery from './components/Gallery/Gallery';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';



function App() {
  const [todoList, setTodoList] = useState([{name: "Regar las Plantas", isDone: false}]);

  const addNewItemList = (data) => {
    setTodoList([...todoList, data])
  }

  const changeIsDone = (isDone, index) => {
    const initialList = [...todoList]
    initialList[index]= {...initialList[index], isDone}
    setTodoList(initialList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <h2>FORMULARIO</h2>
        <Form></Form>
    
        <Gallery></Gallery>
      <br/>
      <h2>formulario lista</h2>

      <TodoForm onSubmit={addNewItemList}></TodoForm>
      <TodoList onChangeChecked={changeIsDone} list={todoList}></TodoList>

      </header>
    </div>
  );
}

export default App;
