import { useEffect,useState } from "react";

export default function TodoList() {
    //local storage for tasks
    function getStoredTodos(){
        let data=localStorage.getItem("todos")
        let json =JSON.parse(data)
        if (json){
            return json
        }
        return []
    }


  const [todos, setTodos] = useState(getStoredTodos()); //array of todos 


  useEffect(() => {
localStorage.setItem("todos",JSON.stringify(todos))
   },[todos] );
  function handleSubmit(event) {
    event.preventDefault();

    let task = event.target.task.value;
    if (!task) {
      alert("Please provide a valid task");
      return;
    }

    setTodos([...todos, { task: task, completed: false }]);
    event.target.reset();
  }

  function changeStatus(index) {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function deleteTask(index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <section className="gradient-custom-2 vh-100">
      <div className="container my-5">
        <div className="mx-auto rounded border p-4" style={{ width: "600px", backgroundColor: "#08618d" }}>
          <h2 className="text-white text-center mb-5"> My Todo List</h2>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" placeholder="Type your task" name="task" />
            <button className="btn btn-outline-light" type="submit">Add Task</button>
          </form>
          {
            todos.map((todo, index) => {
              return (
                <div key={index} className="rounded mt-4 p-2 d-flex" style={{ backgroundColor: todo.completed ? "pink" : "lavender" }}>
                  <div className="me-auto">
                    {todo.task}
                  </div>
                  <div>
                    <i className={"h5 me-2 " + (todo.completed ? "bi bi-check-square" : 'bi bi-square')} style={{ cursor: "pointer" }} onClick={() => changeStatus(index)}></i>
                    <i className={"h5 me-2 bi bi-trash"} style={{ cursor: "pointer" }} onClick={() => deleteTask(index)}></i>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

// useEffect:

// In your code, useEffect is used to store the todos array in the local storage whenever it changes. 
//It ensures that the todos are persisted across browser sessions.
// The useEffect hook takes two parameters: a function and an array of dependencies.
// In this case, the function is responsible for saving the todos array to the local storage, and the array of dependencies includes only todos.
// The effect will be called after every render if any of the dependencies have changed since the last render. In this case, the effect will be called whenever the todos array changes.
// Here's the relevant part of your code:
// javascript
// Copy code
// useEffect(() => {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }, [todos]);
// This effect ensures that whenever todos changes, it updates the local storage with the new value.
// todos array:

// The todos array is a state variable created using the useState hook. The initial state of todos is obtained 
//from the local storage using the getStoredTodos function.
// Since getStoredTodos retrieves the data from local storage and parses it using JSON.parse, 
//it ensures that the todos array is initialized with the same structure that was stored previously.
// If there are no todos stored in the local storage, an empty array [] is returned as the initial state.
// So, in summary, useEffect is responsible for persisting the todos array to local storage whenever it changes,
// and the todos array is initialized with the structure retrieved from local storage or with an empty array if no data is found. 
//This allows the todos array to maintain its structure with string and boolean attributes across different sessions.