const events = require('events');

var emitter = new events.EventEmitter();

var start_event_recieved = function()
{
    console.log("Start Event")
}

emitter.on('start', start_event_recieved)
emitter.emit('start')

module.exports=emitter