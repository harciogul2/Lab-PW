const express = require('express');
const app = express();

//lab10 ex1: CORS - permite cereri de la React (port 5173)
const cors = require('cors');
app.use(cors());

//lab 9 ex 2  2: Conectare la MongoDB cu Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard')
 .then(function() {
 console.log('Conectat la MongoDB!');
 })
 .catch(function(err) {
 console.error('Eroare conectare MongoDB:', err);
 });

const PORT = 3000;

//lab8-ex 4
// Middleware pentru citirea JSON din body
app.use(express.json()); 

//lab9 ex3: import model
const Project = require('./models/Project');

// GET / - ruta principala Rută API pentru proiecte
app.get('/', function(req, res) {
  res.json({ message: 'Serverul functioneaza!' });
});

//lab 8 ex 2
/*Date (temporar in memorie,vom folosi MongoDB mai tarziu)
const projects = [
  { id: 1, title: "Pagina Personala", tech: "HTML, CSS", done: true },
  { id: 2, title: "Calculator Buget", tech: "JS", done: true },
  { id: 3, title: "Dashboard React", tech: "React", done: false },
  { id: 4, title: "API Meteo", tech: "React, API", done: false },
];

//lab 8
// GET /api/projects - returneaza toate proiectele
app.get('/api/projects', function(req, res) {
  res.json(projects);
});
*/

//lab9 ex4: GET /api/projects - returneaza toate proiectele din MongoDB
app.get('/api/projects', async function(req, res) {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Eroare ' + err });
  }
});

/*lab8 ex 3
//GET /api/projects/:id -returneaza un singur proiect dupa id
app.get('/api/projects/:id', function(req, res) {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(project);
});*/

//lab9 ex6: GET /api/projects/:id - returneaza un proiect dupa id din MongoDB
app.get('/api/projects/:id', async function(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Eroare ' + err });
  }
})
/*Return statistici
GET /api/stats — returnează statistici: total proiecte, câte finalizate, câte în lucru
app.get('/api/stats', function(req, res) {
  res.json({
    total: projects.length,
    finalizate: projects.filter(p => p.done).length,
    inLucru: projects.filter(p => !p.done).length,
  });
}); */

/*lab8 ex 4-adaugare proiect
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
});*/

//lab9 ex5: POST /api/projects - salveaza in MongoDB
app.post('/api/projects', async function(req, res) {
  try {
    const newProject = new Project({
      title: req.body.title,
      tech: req.body.tech,
      done: req.body.done || false,
    });
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/*lab8 ex 5-stergere proiect 
// DELETE /api/projects/:id - sterge un proiect dupa id
app.delete('/api/projects/:id', function(req, res) {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  projects.splice(index, 1);
  res.json({ message: 'Deleted' });
});
*/

//lab9 ex6: DELETE /api/projects/:id - sterge din MongoDB
app.delete('/api/projects/:id', async function(req, res) {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Eroare ' + err });
  }
});


/*lab8 ex6-actualizare proiect
// PUT /api/projects/:id - actualizeaza un proiect existent
app.put('/api/projects/:id', function(req, res) {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Not found' });
  }
  if (req.body.title) project.title = req.body.title;
  if (req.body.tech) project.tech = req.body.tech;
  if (req.body.done !== undefined) project.done = req.body.done;
  res.json(project);
});
*/

// Porneste serverul
app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});
