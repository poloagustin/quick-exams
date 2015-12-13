/// <reference path="../../../typings/tsd.d.ts" />

module QuickExams.Components.Home {
  var NAME = 'qeHomeIndex';
  
  var homeIndexDirective: ng.IDirective = {
    restrict: 'EA',
    controller: HomeIndexCtrl.NAME,
    templateUrl: 'public/components/home/homeIndexView.html'
  }
  
  app.addDirective(NAME, homeIndexDirective);
}