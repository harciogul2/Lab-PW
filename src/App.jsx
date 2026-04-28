import { useState } from 'react';
import Card from './Card';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import ProjectList from './ProjectList';   // lab 6 - ex 1-4
import UserList from './UserList';         // lab 6 - ex 5 bonus

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>laborator pw</h1>
      <h2>iaru briana maria</h2>
      
      <p>cateva lucruri despre mine:</p>
      <ul>
        <li>studenta la calculatoare</li>
        <li>pasionata de tehnologie</li>
        <li>imi place motorsportul si sahul</li>
      </ul>

      <div style={{ padding: '15px', border: '1px solid #f7f7f7', marginBottom: '20px' }}>
        <p>ai apasat de {count} ori</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

      <QuickNote />
      <TodoList />
      <ContactForm />

      {/* lab 6: proiecte incarcate din JSON cu fetch */}
      <ProjectList />

      {/* lab 6 bonus: utilizatori de la API public */}
      <UserList />
    </div>
  );
}

export default App;
