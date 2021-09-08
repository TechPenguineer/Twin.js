const event_emmiter = require('./events/emmiter')
const con = require('./src/connect')
const lib={
    event: event_emmiter,
    connect: con.connection
}
module.exports = lib