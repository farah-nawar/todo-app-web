import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo'; // Corrected the import statement and component name

function App() {
  return (
    <>
      <TodoList /> {/* Corrected the component name */}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
