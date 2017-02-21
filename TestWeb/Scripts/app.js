(function() {
  var app = angular.module('gemStore', ['store-directives']);

    

    
  app.controller('StoreController', function($scope, $http){
    var store = this;
    store.products = [];
    $http.get('/Home/JOPAUrl')
        .success(function (result){
    
            $scope.tclass = result;
            if (result != null) {
                for (var i = 0; i< result.length; i++) {
                
                }
        
            }
        })
          .error(function (data) {
              console.log(data);
          });



  });
  
  //  original
 /* app.controller('StoreController', ['$http', function ($http) {
      var store = this;
      store.products = [];
      $http.get('/store-products.json').success(function (data) {
          store.products = data;
      });
  }]);
        */

  app.controller('ReviewController', function(){
    this.review = {};
  this.addReview = function(product) {
    product.reviews.push(this.review);
    this.review = {};
};

});


  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });
  
  
})();
