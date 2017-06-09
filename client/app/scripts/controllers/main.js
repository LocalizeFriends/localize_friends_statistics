'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', ['$http', '$interval', 'RestEsbService', function ($http, $interval, RestEsbService) {

    RestEsbService.getUsers().then(function (data) {
      console.log(data)
    });

    var self = this;
    var i = 0;
    this.labels = [];
    this.series = ['Series A', 'Series B'];
    this.array = []
    this.data = [
      this.array
    ];
    this.onClick = function (points, evt) {
      console.log(points, evt);
    };
    this.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
    this.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          }
        ]
      }
    };
    //
    $interval(open, 50000);

    function open() {
      var d = new Date();
      var n = d.getHours();
      var m = addZero(d.getMinutes());
      var s = addZero(d.getSeconds());

      i = i + 1;

      self.array.push(i);
      self.labels.push(n + ':' + m + ':' + s)
    }

    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
  }])
;
