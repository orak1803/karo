
var leftContainer,
foodList,
inputList = [],
inputSteps,
calcBtn,
rightContainer;


function createFoodPicker(){
    var container = document.createElement('div');
    foodList = document.createElement('ul');
    foodList.classList.add('foodList');
    veganFoodService.getFoodTypes().forEach(fillList);
    meatFoodService.getFoodTypes().forEach(fillList);
    container.appendChild(foodList);
    return container;
}

function fillList(element){
    var item = document.createElement('li');
    item.classList.add('item');
    var itemTitle = document.createElement('span');
    itemTitle.classList.add('itemTitle');
    inputList.push(document.createElement('input'));
    var index = inputList.length - 1;
    inputList[index].classList.add('itemInput');
    itemTitle.innerHTML = element;
    inputList[index].type = "text";
    item.appendChild(itemTitle);
    item.appendChild(inputList[index]);
    foodList.appendChild(item);
}

function createFootStepsPicker(){
    var container = document.createElement('div');
    container.style.textAlign = 'center';
    var label = document.createElement('span');
    label.id = 'stepsLabel';
    label.innerHTML = 'Steps';

    inputSteps = document.createElement('input');
    inputSteps.id = 'stepsInput';
    inputSteps.type = 'text';

    calcBtn = document.createElement('button');
    calcBtn.classList.add('button');
    calcBtn.classList.add('b1');
    calcBtn.id = 'calcBtn';
    calcBtn.innerHTML = 'compare';
    calcBtn.addEventListener('click', function (){
        calcBtn.style.color = 'red';
    });

    container.appendChild(label);
    container.appendChild(inputSteps);
    container.appendChild(calcBtn);
    return container;
}

window.onload = function() {

    leftContainer = document.getElementById('leftContainer');
    var foodPickerContainer = createFoodPicker();

    rightContainer = document.getElementById('rightContainer');
    var stepPicker = createFootStepsPicker();

    leftContainer.appendChild(foodPickerContainer);
    rightContainer.appendChild(stepPicker)

}