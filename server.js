import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
import router from './router/songRoute';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const dbPromise = open({
  filename: 'data.db',
  driver: sqlite3.Database
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded());

app.use('/', router);

const setup = async () => {
  const db = await dbPromise;
  await db.migrate();
  app.listen(8000, () => {
    console.log('listening on localhost:8000');
  });
};

setup();
