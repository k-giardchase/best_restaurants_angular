bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, cuisine: $scope.restaurantCuisine, location: $scope.restaurantLocation, price: $scope.restaurantPriceRange });
    $scope.restaurantName = null;
    $scope.cuisine = null;
    $scope.restaurantLocation = null;
    $scope.priceRange = null;

  };
});
