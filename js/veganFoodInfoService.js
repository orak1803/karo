
var veganfoodList = {
    'pita':     171,
    'banana':   135
};

var veganFoodService = {};

veganFoodService.getFoodTypes = function() {
    return Object.keys(veganfoodList);
}   