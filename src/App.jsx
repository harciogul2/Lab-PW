// importam useState din react
import { useState } from 'react';
import Card from './Card';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';

function App() {
  // count->valoarea setCount->functia care o modifica
  const [count, setCount] = useState(0);

  const projects = [
    { title: "proiect 1", description: "pagina personala" },
    { title: "proiect 2", description: "calculator buget" },
    { title: "proiect 3", description: "dashboard react" },
    { title: "proiect 4", description: "aplicatie meteo" },
    { title: "proiect 5", description: "joculet de memorie" }
  ];

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

      {/* zona contorului cu toate cele 3 butoane */}
      <div style={{ padding: '15px', border: '1px solid #f7f7f7', marginBottom: '20px' }}>
        <p>ai apasat de {count} ori</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

      <QuickNote />
      <TodoList />
      <ContactForm />

      <h3>proiectele mele:</h3>
      
      {projects.map(function(item, index) {
        return <Card key={index} title={item.title} description={item.description} />;
      })}
    </div>
  );
}

export default App;