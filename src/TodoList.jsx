import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  }

  function handleDelete(index) {
    setTodos(todos.filter(function(_, i) {
      return i !== index;
    }));
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className="section-card">
      <h3>todo list</h3>

      <div className="todo-input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="adauga un task..."
        />
        <button className="btn-primary" onClick={handleAdd}>adauga</button>
      </div>

      {todos.length === 0 && (
        <p className="state-msg">niciun task inca. adauga ceva!</p>
      )}

      <ul className="todo-list">
        {todos.map(function(todo, index) {
          return (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button className="btn-danger" onClick={() => handleDelete(index)}>
                sterge
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
