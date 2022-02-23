const {router, defaults, create} = require('json-server');
const path = require('path');

const server = create();
const apiEndpoints = router(path.join(__dirname, "..", "data", "db.json"));
const middlewares = defaults();

server.use(middlewares);
server.use(apiEndpoints);

module.exports = { server };
