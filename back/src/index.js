const server = require('./app');
const PORT = 3001;
const {conn}= require('./db');

conn.sync({ force: false })
server.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))
; 