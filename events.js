var events=require('events').EventEmitter;
emitter = new events();

//listners function
emitter.on('morning',function(){
	console.log('gud morning');
})
emitter.on('morning',function(){
	console.log('goes mad');
})
emitter.on('morning',function(no){
	console.log('goes mad ',(no||""));
})

emitter.on('evening',function(no){
	console.log('goes chilled'+no);
})

emitter.on('evening',function(no){
	console.log('goes mad '+ (no||""));
})

emitter.emit('morning');
emitter.emit('morning',5)
emitter.emit('evening',4)