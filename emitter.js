var Emitter = new require("events").EventEmitter;

var Car = function(){
	Emitter.call(this);
	this.tank = 0;
	this.move = function(){
		this.tank--;
		if(this.tank < 0) this.emit('emptyTank');
	}
	this.fill = function(amt){
		this.tank += amt;
	}
	this.on('emptyTank',function(){
		console.log('go and fill petrol...')
	})
}


Car.prototype = Emitter.prototype;

var maruti = new Car();
maruti.fill(2);
maruti.move();
maruti.move();
maruti.fill(1)
maruti.move();
maruti.move();