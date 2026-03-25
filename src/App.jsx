import Card from './Card';

function App() {
  // declaram array-ul cu proiectele noastre
  const projects = [
    { title: "proiect 1", description: "pagina personala" },
    { title: "proiect 2", description: "calculator buget" },
    { title: "proiect 3", description: "dashboard react" },
    // am adaugat inca 2 proiecte pentru experiment
    { title: "proiect 4", description: "aplicatie meteo cu javascript" },
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

      <h3>proiectele mele:</h3>
      git
      {projects.map(function(item, index) {
        return <Card key={index} title={item.title} description={item.description} />;
      })}
    </div>
  );
}

export default App;