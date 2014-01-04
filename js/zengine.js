var core_version = "0.0.1",
	reqAnim = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
	_z = window.z,

	Zengine = function (canvasID) {
		this.init(canvasID);
	};

Zengine.prototype = {
	zengine : core_version,
	constructor: Zengine,
	now: 0,
	layer: [],
	_time: Date.now(),
	init : function (canvasID) {
		var canvas;
		if( typeof canvasID === "string" ) {
			if(canvasID.charAt(0)=='#'){

				canvas = document.getElementById(canvasID.slice(1));
				this.context = canvas.getContext("2d");
				return this;
			} else {
				return this;
			}
		}else {
			return this;
		}
	},
	run: function( callback ) {
		window.z = this.context;
		var frame = function () {
			var time = Date.now();
			var dt = time - Zengine.prototype._time;
			Zengine.prototype._time = time;
			Zengine.prototype.now += dt;
			
			callback.call(this, dt);
			reqAnim.call(window, frame);
		}

		reqAnim.call(window, frame);
	},
	getMousePosition: function () {

	}
	/****************    Layer   *******************/
	createNewLayer: function () {
		
	}
};



/****************    Point   *******************/
var Point = function (x, y) {
	if(typeof x === "number" && typeof y === "number") {
		this.x = x;
		this.y = y;
	}
}

/****************    Mouse   *******************/



/****************    Vector2   *******************/
var Vector2D = function (x, y) {
	
}

/****************    Entity   *******************/

var Entity = function (name, p) {
	if (typeof name === "string") {
		this.name = name;
	};
	this.x = 0;
	this.y = 0;
	
	if( p ) {
		if( typeof p.x === "number" && typeof p.y === "number") {
			this.x = p.x;
			this.y = p.y;
		}
	}
	this.position = p ? p : new Point(this.x, this.y);
};

Entity.prototype = {
	setPosition : function (p) {
		if( p.x && p.y ) {
			this.x = p.x;
			this.y = p.y;
			this.position = p;
		} 
	},
	setResource : function (path) {
		var func;
		if( path === "Rect" ) {
			var createFunction = function (style, x, y) {
				return function () {
					z.fillStyle = style;
					z.fillRect(this.x, this.y , x, y);
				}
			}
			func = createFunction(arguments[1], arguments[2], arguments[3]);
		}

		this.render = func;
	}
};