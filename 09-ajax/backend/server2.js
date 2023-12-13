const jsonServer = require("json-server");

const dataFilePath = "./backend/data.json";
const port = 3001;

const server = jsonServer.create();
const router = jsonServer.router(dataFilePath);
const middlewares = jsonServer.defaults({ static: "./build" });

server.use(middlewares);
server.use(jsonServer.rewriter({ "/api/*": "/$1" }));
server.use(router);

server.listen(port, () => {
    console.log("---------------");
    console.log("- json server -");
    console.log("---------------");
});
