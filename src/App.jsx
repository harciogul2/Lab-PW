import Card from './Card';

function App() {
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

      {/* chemam componenta de 3 ori cu date diferite */}
      <Card title="proiect 1" description="pagina personala cu html si css" />
      <Card title="proiect 2" description="pagina interactiva cu javascript" />
      <Card title="proiect 3" description="dashboard cu react" />
    </div>
  );
}

export default App;