/* Created by Андрей on 21.01.2016.
*/
var v1 = angular.module('myApp.view1');

v1.service('ImageService', function() {
    this.imagelist = [];
    this.imageadd = function(image) {
        console.log("Added", image);
        this.imagelist.push(image);
    };
    this.file = {};
    this.image = {};
    this.get = function() {return this.imagelist};
    this.scaleSize = function(maxW, maxH, currW, currH) {
        var ratio = currH / currW;
        if (currW >= maxW && ratio <= 1) {
            currW = maxW;
            currH = currW * ratio;
        } else if (currH >= maxH) {
            currH = maxH;
            currW = currH / ratio;
        }
        return [currW, currH];
    };
    this.downScale = function(img) {
        var arr = this.scaleSize(200,110,img.width,img.height);
        return {width: arr[0], height: arr[1]};
    };
});