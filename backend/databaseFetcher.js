const {Client} = require('pg');

const client = new Client ({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'cuxon123patos456',
    database: 'jobs'
});

module.exports = (
    client
)


