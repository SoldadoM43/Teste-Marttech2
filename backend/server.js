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

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));