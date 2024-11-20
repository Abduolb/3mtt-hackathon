const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve your HTML, CSS, and JS files from the public folder

app.post('/suggest', (req, res) => {
    const { concern } = req.body;
    let suggestion = 'Please consult a mental health professional.';

    if (concern.toLowerCase().includes('anxiety')) {
        suggestion = 'Here are some resources for managing anxiety: [Link]';
    } else if (concern.toLowerCase().includes('stress')) {
        suggestion = 'Here are some stress management tips: [Link]';
    }

    res.json({ message: suggestion });
});

app.listen(port, () => {
    console.log(Server running at http://localhost:${port});
});