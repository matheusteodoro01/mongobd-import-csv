const db = require('./config/db');
const lista3Repository = require('./repository/lista3Repository');

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('./lista4.csv',)
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
        console.log(row)
        lista3Repository.create(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
    });