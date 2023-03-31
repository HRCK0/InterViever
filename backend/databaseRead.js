const client = require('./databaseFetcher');

client.connect();

let data;

client.query('SELECT * FROM jobs', (err, res) => {
    if (!err){
        data = res.rows;
        console.log('Here is the data: ', data);
    }
        
    else
        console.log(`There is an error here: ${err.message}`);

    client.end();
});

module.exports = (
    data
)
