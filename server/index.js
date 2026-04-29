const express = require('express');
const app = express();
const PORT = 3000;

// GET / - ruta principala Rută API pentru proiecte
app.get('/', function(req, res) {
  res.json({ message: 'Serverul functioneaza!' });
});

// Date (temporar in memorie,vom folosi MongoDB mai tarziu)
const projects = [
  { id: 1, title: "Pagina Personala", tech: "HTML, CSS", done: true },
  { id: 2, title: "Calculator Buget", tech: "JS", done: true },
  { id: 3, title: "Dashboard React", tech: "React", done: false },
  { id: 4, title: "API Meteo", tech: "React, API", done: false },
];

// GET /api/projects - returneaza toate proiectele
app.get('/api/projects', function(req, res) {
  res.json(projects);
});

//GET /api/projects/:id -returneaza un singur proiect dupa id
app.get('/api/projects/:id', function(req, res) {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(project);
});
//GET /api/stats — returnează statistici: total proiecte, câte finalizate, câte în lucru
app.get('/api/stats', function(req, res) {
  res.json({
    total: projects.length,
    finalizate: projects.filter(p => p.done).length,
    inLucru: projects.filter(p => !p.done).length,
  });
});

// Porneste serverul
app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});
