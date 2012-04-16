exports = module.exports = {
	determineFfmpegPath: function() {
		if (process.env.FFMPEG_PATH) {
			return process.env.FFMPEG_PATH;
		}
		return 'ffmpeg';
	},
	gcd: function(a, b) {
	  var z;
	  while (a != 0) {
	    z = b % a;
	    b = a;
	    a = z;
	  }
	  return b;
	}
	
}