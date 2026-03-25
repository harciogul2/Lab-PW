// 1. importam useState din react, pe prima linie
import { useState } from 'react';
import Card from './Card';

function App() {
  // 2. declaram state-ul: 'count' e valoarea, 'setCount' e functia care o modifica. 0 e valoarea initiala.
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

      {/* 3. adaugam zona contorului */}
      <div style={{ padding: '15px', border: '1px solid #f7f7f7', marginBottom: '20px' }}>
        <p>ai apasat de {count} ori</p>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>

      <h3>proiectele mele:</h3>
      
      {projects.map(function(item, index) {
        return <Card key={index} title={item.title} description={item.description} />;
      })}
    </div>
  );
}

export default App;