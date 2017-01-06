/**
 * Created by Johannes Rudolph on 06.01.2017.
 */

var BitStuffing = function () {};

BitStuffing.prototype = {

    version: "1.0.1",

    /**
     *
     * @param [bits]
     */
    removeStuffBits: function (bits) {
        var retData = [];
        var stuffCounter = 0;
        for(var i = 0; i < bits.length; i++){
            retData.push(bits[i]);
            if(bits[i] === 1){
                stuffCounter++;
                if(stuffCounter === 5){
                    if(bits[i+1] === 1){
                        return false;
                    }
                    stuffCounter = 0;
                    i++;
                }
            }
            else{
                stuffCounter = 0;
            }
        }
        return retData;
    }

};

module.exports = new BitStuffing();