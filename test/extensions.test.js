var ffmpeg = require('../lib/fluent-ffmpeg'),
  gcd = require('../lib/helpers').gcd;
  testCase = require('nodeunit').testCase;

module.exports = testCase({
	testGcdYieldsGreatestCommonDivider: function(test) {
    test.ok(gcd(1024, 768) == 256);
    test.done();
  },
  testToAspectRatio: function(test) {
  	var ret = '16:9'.toAspectRatio();
  	test.ok(ret.x == 16);
  	test.ok(ret.y == 9);
  	test.done();
  },
  testParseVersionString: function(test) {
  	var ret = '3.4.1'.parseVersionString();
  	test.ok(ret.major == 3);
  	test.ok(ret.minor = 4);
  	test.ok(ret.patch == 1);
  	test.done();
  },
  testRequireMinimumVersion: function(test) {
  	test.ok('1.2'.atLeastVersion('1.01'));
  	test.ok('1.0.10'.atLeastVersion('1.0.4'));
  	test.ok('2.3.4532'.atLeastVersion('2.3.4531'));
  	test.done();
  },
  testFfmpegTimemarkToSeconds: function(test) {
    console.log('00:08:09.10'.ffmpegTimemarkToSeconds());
    test.ok('00:02:00.00'.ffmpegTimemarkToSeconds() == 120);
    test.ok('00:08:09.10'.ffmpegTimemarkToSeconds() == 489);
    test.done();
  }
});