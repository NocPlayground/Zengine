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
	_time: Date.now(),
	init : function (canvasID) {
		var canvas;
		if( typeof canvasID === "string" ) {
			if(canvasID.charAt(0)=='#'){

				canvas = document.getElementById(canvasID.slice(1));
				z = this.context = canvas.getContext("2d");
				return this;
			} else {
				return this;
			}
		}else {
			return this;
		}
	},
	run: function( callback ) {
		var frame = function () {
			var time = Date.now();
			var dt = time - Zengine.prototype._time;
			Zengine.prototype._time = time;
			Zengine.prototype.now += dt;
			
			callback.call(this, dt);
			reqAnim.call(window, frame);
		}

		reqAnim.call(window, frame);
	}
};