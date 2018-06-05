
var meatfoodList = {
    'schnitzel':     400,
    'chicken filet':   212
};

var meatFoodService = {};

meatFoodService.getFoodTypes = function() {
    return Object.keys(meatfoodList);
}