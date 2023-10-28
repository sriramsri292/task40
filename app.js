const express=require('express');
const app_server=express();
const cors = require('cors');
app_server.use(cors({ origin: 'https://653cc7af7e10805ff1a988ef--magenta-griffin-93a869.netlify.app/' }));
app_server .use(express.json());
app_server.use("/users",  require("./controllers/users.controller"));
app_server.use("/auth",require("./controllers/auth.controller"));
module.exports=app_server;
