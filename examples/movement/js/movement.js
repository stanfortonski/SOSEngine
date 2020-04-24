SOSEngine.scale = 12;
var main = SOSEngine.make($('#SOSEngine'));

var Movement = function(object){
	this.object = object;
	this.timer = new SOSEngine.Timer;
	this.step = 2;
	this.objectCollisionY =	this.objectCollisionX = this.lastObjectCollisionX = this.lastObjectCollisionY = true;
}

Movement.prototype.left = function(){
	if (this.canMoveLeft()){
		for (let i = 0; i < this.step; ++i){
			if (this.canMoveLeft())
				this.object.setPosition(this.object.position.x - 1);
		}
	}
}

Movement.prototype.right = function(){
	if (this.canMoveRight()){
		for (let i = 0; i < this.step; ++i){
			if (this.canMoveRight())
				this.object.setPosition(this.object.position.x + 1);
		}
	}
}

Movement.prototype.top = function(){
	if (this.canMoveTop()){
		for (let i = 0; i < this.step; ++i){
			if (this.canMoveTop())
				this.object.setPosition(null, this.object.position.y - 1);
		}
	}
}

Movement.prototype.bottom = function(){
	if (this.canMoveBottom()){
		for (let i = 0; i < this.step; ++i){
			if (this.canMoveBottom())
				this.object.setPosition(null, this.object.position.y + 1);
		}
	}
}

Movement.prototype.canMoveLeft = function(){
	this.objectCollisionX = SOSEngine.GroupManipulator.each(main.Scene.static.objects, this.object.isCollisionLeft.bind(this.object));
	if (this.objectCollisionX !== true)	this.lastObjectCollisionX = this.objectCollisionX;
	return this.objectCollisionX === true && !main.Scene.isCollisionInBorderLeft(this.object);
}

Movement.prototype.canMoveRight = function(){
	this.objectCollisionX = SOSEngine.GroupManipulator.each(main.Scene.static.objects, this.object.isCollisionRight.bind(this.object));
	if (this.objectCollisionX !== true) this.lastObjectCollisionX = this.objectCollisionX;
	return this.objectCollisionX === true && !main.Scene.isCollisionInBorderRight(this.object);
}

Movement.prototype.canMoveTop = function(){
	this.objectCollisionY = SOSEngine.GroupManipulator.each(main.Scene.static.objects, this.object.isCollisionTop.bind(this.object));
	if (this.objectCollisionY !== true) this.lastObjectCollisionY = this.objectCollisionY;
	return this.objectCollisionY === true && !main.Scene.isCollisionInBorderTop(this.object);
}

Movement.prototype.canMoveBottom = function(){
 	this.objectCollisionY = SOSEngine.GroupManipulator.each(main.Scene.static.objects, this.object.isCollisionBottom.bind(this.object));
	if (this.objectCollisionY !== true) this.lastObjectCollisionY = this.objectCollisionY;
	return this.objectCollisionY === true && !main.Scene.isCollisionInBorderBottom(this.object);
}
