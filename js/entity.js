var Entity = function (name, v2d) {
	if (typeof name === "string") {
		this.name = name;
	};
	this.x = 0;
	this.y = 0;
	
	if( v2d ) {
		if( typeof v2d.x === "number" && typeof v2d.y === "number") {
			this.x = v2d.x;
			this.y = v2d.y;
		}
	}
	this.position = v2d ? v2d : new Vector2D(this.x, this.y);
};

Entity.prototype = {
	setPosition : function (v2d) {
		if( v2d.x && v2d.y ) {
			this.x = v2d.x;
			this.y = v2d.y;
			this.position = v2d;
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