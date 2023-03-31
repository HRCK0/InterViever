 const express = require('express');
 const app = express();
 const port = 8383;

app.use(express.static('frontend'));

app.get('/info', (req, res) => {
    res.status(200).json({protest: 'vucicu pederu'})
});

 app.listen(port, () => console.log(`Server has started on port: ${port}`));