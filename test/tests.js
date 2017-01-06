/**
 * Created by Johannes Rudolph on 06.01.2017.
 */

var assert = require('assert');
var bitstuffer = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../dist/') + 'bitstuffing');

describe('Test Bit Stuffing', function () {
    it("should remove 0 after five 1",function () {
        //Setup
        var input    = [1,1,1,1,1,0,1,0,0];
        var expected = [1,1,1,1,1,1,0,0];

        //Execution
        var result = bitstuffer.removeStuffBits(input);

        //Result
        assert.deepEqual(result, expected);
    });

    it("should return false if after five 1 the next is also a 1",function () {
        //Setup
        var input    = [1,1,1,1,1,1,1];
        var expected = false;
        var result   = true;

        //Execution
        var result = bitstuffer.removeStuffBits(input);

        //Result
        assert.ok(!result, expected);
    });
});