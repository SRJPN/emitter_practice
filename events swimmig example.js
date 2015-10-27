var Emitter = require('events').EventEmitter;
// var emitter = new Emitter();

//listners function
// emitter.on('morning',function(){
// 	console.log('gud morning');
// });
// emitter.on('morning',function(){
// 	console.log('goes mad');
// });
// emitter.on('morning',function(no){
// 	console.log('goes mad',no)
// });
// emitter.on('evening',function(no){
// 	console.log('have anice evening',no);
// });
// var remove= function(){
// 	emitter.removeListener('morning',remove)
// }
// emitter.emit('morning',remove);
// emitter.emit('morning');
// emitter.emit('morning',5)
// emitter.emit('evening',4)


//______________________________________________________________________________________

var Swimmer = function(){
	Emitter.call(this);
	this.breath = 0;
	this.swim = function(){
		this.breath--;
		if(this.breath < 0) this.emit('take_breath');
	}
	this.takeBreath = function(breath1){
		this.breath += breath1;
	}
	this.on('take_breath',function(){
		console.log('you need breath to exist...take breath..');
	})
}

Swimmer.prototype = Emitter.prototype;

var swimmer = new Swimmer();
swimmer.takeBreath(2);
swimmer.swim();
swimmer.swim();
swimmer.swim();
swimmer.swim();


