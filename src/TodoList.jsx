import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]); // array gol la inceput
  const [input, setInput] = useState(''); // text gol la inceput

  function handleAdd() {
    if (input.trim() === '') return; // nu adauga daca e doar spatiu gol
    setTodos([...todos, input]); // creeaza un array NOU: pune ce era inainte + noul input
    setInput(''); // goleste casuta dupa ce ai adaugat
  }


  //  functie->index task pe care am dat click
  function handleDelete(index) {
    // filter()-> array vechi=>>>array nou complet
    // _ -> textul task-ului- underscore = nu ne foloseste variabila.
    // i -> reprezinta indexul fiecarui task
    // i !== index-> pastreaza elem mai putin pe crl pe care am dat click 
    setTodos(todos.filter(function(_, i) {
      return i !== index;
    }));
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
      <h3>Todo list</h3>
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="adauga un task..."
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 15px' }}>adauga</button>

      <ul>
        {todos.map(function(todo, index) {
          //buton in lista
          return (
            <li key={index}>
              {}
              {todo} 
              
              {/*butonul de stergere 
                onClick={() => handleDelete(index)}: 
                () => -> nu sterge totul cand se incarca pagina doar cand se fcae click*/}
              <button 
                onClick={() => handleDelete(index)} 
                style={{ marginLeft: '10px' }}
              >
                Sterge
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;