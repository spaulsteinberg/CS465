var ids = [];
var vals = [];
var valueArray = [0.01, 1, 5, 10, 100, 1000, 10000, 100000, 500000, 1000000];
var selectedCase = "";
initializeBoard(); //so it starts intialized;
function initializeBoard(){
    count = 0;
    shuffle(valueArray);
    vals = valueArray;
    var checkBoxes = document.getElementsByClassName("cbox");
    for (var i = 0; i < checkBoxes.length; i++){
        checkBoxes.item(i).checked = false;
    }
    var suitcases = document.getElementsByClassName("suitcase");
    for (var i = 0; i < suitcases.length; i++){
        suitcases.item(i).value = valueArray[i];
    }
}
/* ES6 shuffling from site ! */
function shuffle(cleanArray) {
    for (let i = cleanArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cleanArray[i], cleanArray[j]] = [cleanArray[j], cleanArray[i]];
    }
    return cleanArray;
}
/* keep user from inadvertant check */
function badCheck(){
    var checkBox = document.getElementById(event.target.id)
    checkBox.checked = false;
    return false;
}

function checkVal(){
    var flag = false;
    var suitcases = document.getElementsByClassName("suitcase");
    for (var i = 0; i < suitcases.length; i++){
        if (suitcases.item(i).clicked == true){
            flag = true;
        }
        ids[i] = suitcases.item(i).id;
    }
    if (flag == false){
        var box = document.getElementById(event.target.id);
        selectedCase = event.target.id;
        box.clicked = true;
        box.disabled = true;
        box.style.backgroundColor = "blue";
        box.style.color = "silver";
    }
    else {
        var box = document.getElementById(event.target.id);
        var index = -1;
        for (var i = 0; i < suitcases.length; i++){
            if (suitcases.item(i).id == event.target.id){
                index = i;
                break;
            }
        }
        var checkBoxes = document.getElementsByClassName("cbox");
        for (var j = 0; j < checkBoxes.length; j++){
            if (checkBoxes.item(j).value == vals[index]){
                checkBoxes.item(j).checked = true;
            }
        }
        box.clicked = true;
        box.disabled = true;
        box.style.backgroundColor = "gold";
        box.textContent = "$" + vals[index];
        var sum = 0;
        var zeroed = 0;
        for (var i = 0; i < suitcases.length; i++){
            if (suitcases.item(i).clicked == true){
                zeroed++;
            }
            else {
                sum += vals[i];
            }
        }
        var offer = Math.floor((sum/(10-zeroed)) * 0.9);
        var box = document.getElementById("offer-box");
        box.value = offer;
    }
    var allDoneFlag = false;
        for (var i = 0; i < suitcases.length; i++){
            if (suitcases.item(i).clicked == true){
                continue;
            }
            else {
                allDoneFlag = true;
            }
        }
        if (allDoneFlag == false){
            suitcasesExhausted();
            initializeBoard();
        }
}
function makeDeal(){
    var suitcases = document.getElementsByClassName("suitcase");
    var caseValue = -1;
    for (var i = 0; i < suitcases.length; i++){
        if (suitcases.item(i).id == selectedCase){
            caseValue = vals[i];
            break;
        }
    }
    var box = document.getElementById("offer-box");
    
    document.getElementById(selectedCase).textContent = "$" + caseValue;
    for (var i = 0; i < suitcases.length; i++){
        suitcases.item(i).disabled = true;
    }
    alert("Deal! You won: " + box.value);
    alert("The value in your case was: " + caseValue);
}
function suitcasesExhausted(){
    var suitcases = document.getElementsByClassName("suitcase");
    var caseValue = -1;
    for (var i = 0; i < suitcases.length; i++){
        if (suitcases.item(i).id == selectedCase){
            caseValue = vals[i];
            break;
        }
    }
    for (var i = 0; i < suitcases.length; i++){
        suitcases.item(i).disabled = true;
    }
    document.getElementById(selectedCase).textContent = "$" + caseValue;
    alert("Game Over! The value in your case was: " + caseValue);
}