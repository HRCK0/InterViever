 const express = require('express');
 const app = express();
 const port = 8383;

app.use(express.static('frontend'));

app.get('/:dynamic', (req, res) => {
    const {dynamic} = req.params;
    const {key} = req.query;
    const {store} = req.query;
    console.log(dynamic, key, store);
    res.status(200).json({protest: 'vucicu pederu'})
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));