const joy = require('joy');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

function validateCourse(course) {
    const schema = {
        name: Joi.stryng().min(2).require(),
    }
    return Joi.validate(course, schema);
}

app.post('/api/courses', (req, res) => {
    const { error } =   validateCourse(rec.body);
    
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.puth(course);
    res.send(course);

});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c.id ===parseInt(req.params.id));

    if (!course) {
        return res.status(404).send('Não foi possível encontrar o Id');
    }
    const { error } = validateCourse(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    course.name = req.body.name;
    res.send(course);
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Id não encontrado');
    }
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Não foi possível localizar o Id');
    }
    const index = course.indexOf(course);
    course.splice(index, 1);
    res.send(course);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));