require(["jquery","zengine"], 

function($, zengine) {
//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
		var zengine = new Zengine("#canvas");
		zengine.run( function (dt) {
				var cycleTime = 1000;
				var color = (zengine.now % cycleTime) / cycleTime * 255 | 0;
				z.fillStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
				z.fillRect(0, 0, 300, 400);
		});
});
