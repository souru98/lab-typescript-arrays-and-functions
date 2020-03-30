"use strict";
exports.__esModule = true;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiply = function (myArray) {
        var temp = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var str = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] === "string") {
                str[j] = myArray[i];
                j++;
            }
        }
        return str;
    };
    ArrayManipulations.prototype.arraySplit = function (str) {
        var result = myArray1[0].match(/\d+/gi).map(Number);
        // const Array = [];
        var k = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i] % 2 === 0) {
                console.log(result[i] + " prime number");
            }
            else {
                console.log(result[i] + " not a prime number");
            }
        }
        return result;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return myArray;
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
                myArray[i] = 5;
        }
        return myArray;
    };
    return ArrayManipulations;
}());
exports.ArrayManipulations = ArrayManipulations;
var myArray = [63, 55, 39, 13, 25, 33, 80, "sourabh", "kulkarni"];
var myArray1 = [" 63 55 39 13 25 33 80 sourabh  kulkarni"];
var array = new ArrayManipulations();
console.log(array.arrayFindMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray1));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
