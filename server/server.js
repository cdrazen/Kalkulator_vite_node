const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/save', (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400).json({ error: 'No data provided' });
    }

    const logEntry = `${new Date().toISOString()}: ${data}\n`;
    const filePath = path.join(__dirname, 'data.txt');

    fs.appendFile(filePath, logEntry, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ error: 'Failed to save data' });
        }
        console.log('Data saved successfully');
        res.json({ message: 'Data saved successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
