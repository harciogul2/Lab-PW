const express = require('express');
const app = express();
const PORT = 3000;

//lab8-ex 4
// Middleware pentru citirea JSON din body
app.use(express.json()); 

// GET / - ruta principala Rută API pentru proiecte
app.get('/', function(req, res) {
  res.json({ message: 'Serverul functioneaza!' });
});
//lab 8 ex 2
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

//lab8 ex 3
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

//lab8 ex 4
// POST /api/projects - adauga un proiect nou
app.post('/api/projects', function(req, res) {
  const newProject = {
    id: projects.length + 1,
    title: req.body.title,
    tech: req.body.tech,
    done: req.body.done || false,
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// Porneste serverul
app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});
