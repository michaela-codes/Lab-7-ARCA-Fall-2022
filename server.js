const express = require('express');
const bodyParser = require('body-parser');
const listRouter = require('./routes/toDo.router')
const port = 3000;
const colorMiddleware = require('./middleware/toDoColorChecker')
const errorHandler = require('./middleware/errorHandler')
const db = require("./lib/db");

const app = express();
app.use(bodyParser.json());

app.post('*', colorMiddleware());
app.put('*', colorMiddleware());
app.patch('*', colorMiddleware());


app.use('/api/v1/todolist', listRouter);

app.use(errorHandler());

const dbConfig = {
  url: "127.0.0.1",
  port: 27017,
  database: "arcadb",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
  },
};

db.configure(dbConfig);


app.listen(port, () => {
    console.log(`Server started listening on port: ${port}`);
});