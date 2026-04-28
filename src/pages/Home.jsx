import { useState } from 'react';
import QuickNote from '../QuickNote';
import TodoList from '../TodoList';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Home</h2>
      <p>Bine ai venit pe dashboard-ul meu!</p>

      <p>cateva lucruri despre mine:</p>
      <ul>
        <li>studenta la calculatoare</li>
        <li>pasionata de tehnologie</li>
        <li>imi place motorsportul si sahul</li>
      </ul>

      <div className="section-card">
        <h3>contor</h3>
        <div className="counter-display">{count}</div>
        <p className="counter-label">apasari</p>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>−1</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
      </div>

      <QuickNote />
      <TodoList />
    </div>
  );
}

export default Home;
