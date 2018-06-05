
var leftContainer,
inputList;


function createFoodPicker(){
    var container = document.createElement('div');
    inputList = document.createElement('ul');
    veganFoodService.getFoodTypes().forEach(fillList);
    meatFoodService.getFoodTypes().forEach(fillList);
    container.appendChild(inputList);
    return container;
}

function fillList(element){
    var item = document.createElement('li');
    var itemTitle = document.createElement('span');
    itemTitle.classList.add('itemTitle');
    var itemInput = document.createElement('input');
    itemInput.classList.add('itemInput');
    itemTitle.innerHTML = element;
    itemInput.type = "text";
    item.appendChild(itemTitle);
    item.appendChild(itemInput);
    inputList.appendChild(item);
}

window.onload = function() {

    leftContainer = document.getElementById('leftContainer');
    var foodPickerContainer = createFoodPicker();
    leftContainer.appendChild(foodPickerContainer);

}