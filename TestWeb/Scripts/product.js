(function(){	

	var app = angular.module('store-directives', []);

app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
  });

   app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "~/Views/Home/product-description.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'A',
      templateUrl:"~/Views/Home/product-spec.html"
    };
  }); 

  app.directive("productGallery", function() {
      return {
          restrict: 'E',
          templateUrl: "~/Views/Home/product-gallery.html",
          controller: function() {
              this.current = 0;
              this.setCurrent = function(imageNumber){
                this.current = imageNumber || 0;
              };
          },
          controllerAs: "gallery"
      };

  }); 

  app.directive("productReviews", function(){
    return {
      restrict: 'E',
      templateUrl:"~/Views/Home/product-review.html"
    };

  });

  app.directive("productTabs", function(){
    return {
      restrict: 'E',
      templateUrl: "~/Views/Home/product-tabs.html",
      controller: function(){
        this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
      };

      this.isSet = function(tab) {
      return (this.tab === tab);
    };
  },
  controllerAs: "tab"
};
  });




  })();