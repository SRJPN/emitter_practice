var events=require('events').EventEmitter;
emitter = new events();

var monday = {
	firstSet : 20,
	secondSet : 30,
	thirdSet : 40
};

var doForADay = function(day){
	console.log("first set :", day.firstSet);
	console.log("second set :", day.secondSet);
	console.log("third set :", day.thirdSet);
};

emitter.once('monday',function(numberOfSets){
	console.log("Tod@y is @ Chest D@y!!!!!!!!")
})

emitter.on('monday',function(numberOfSets){
	doForADay(monday);
})
emitter.emit('monday');
