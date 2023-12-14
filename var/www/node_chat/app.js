const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const { connect, insertMessages } = require('./config/mongodb');


app.use("/users", userRouter);;
app.use("/", homeRouter);
insertMessages(100000).then(r => console.log('success'));
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(3000, ()=>console.log("Сервер запущен и ожидает подключения..."));