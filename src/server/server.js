import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const PORT = 3306; // MySQL server port

//Don`t touch my trulalal
const _queryShops = 'SELECT * FROM shops';
const _queryDrugs = 'SELECT * FROM drugs';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    connectionLimit: 2,
    host: 'db1.ho.ua',
    user: 'drugstores',
    password: '20020206Gomer',
    database: 'drugstores',
});

pool.getConnection((err) => {
    if (!err) {
        console.log('Connected! :D');
    } else {
        console.log('Lost connection :(');
    }
});

app.listen(PORT);

app.get('/shops', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        } else {
            connection.query(_queryShops, (err, rows) => {
                connection.release();

                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                console.log('Success', rows);
                res.send(rows);
            });
        }
    });
});

app.get('/drugs', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        } else {
            connection.query(_queryDrugs, (err, rows) => {
                connection.release();

                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                console.log('Success', rows);
                res.send(rows);
            });
        }
    });
});

app.post('/user_order', (req, res) => {
    const userOrder = req.body;

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const insertQuery = `
            INSERT INTO user_order (name, email, phone, address)
            VALUES (?, ?, ?, ?)
        `;

        const values = [
            userOrder.name,
            userOrder.email,
            userOrder.phone,
            userOrder.address,
        ];

        connection.query(insertQuery, values, (err, result) => {
            connection.release();

            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
                return;
            }

            console.log('Success', result);
            res.send('Favorite updated successfully');
        });
    });
});
