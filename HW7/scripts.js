var ids = [];
var vals = [];
var valueArray = [0.01, 1, 5, 10, 100, 1000, 10000, 100000, 500000, 1000000];
var selectedCase = "";
var total = 0;
initializeBoard(); //so it starts intialized;
function initializeBoard(){
    count = 0;
    shuffle(valueArray);
    vals = valueArray;
    total = 1611116.01;
    var checkBoxes = document.getElementsByClassName("cbox");
    for (var i = 0; i < checkBoxes.length; i++){
        checkBoxes.item(i).checked = false;
    }
    var suitcases = document.getElementsByClassName("suitcase");
    for (var i = 0; i < suitcases.length; i++){
        suitcases.item(i).value = valueArray[i];
    }
    document.getElementById("bottom-button-deal").disabled = true;
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
    total = 1611116.01;
    var sum = 0;
    var zeroed = 0;
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
        document.getElementById("bottom-button-deal").disabled = false;
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
        var zeroed = [];
        var j = 0;
        for (var i = 0; i < suitcases.length; i++){
            if (suitcases.item(i).clicked == true){
                zeroed[j] = i;
                j++;
            }
        }
        console.log(zeroed);
        for (var i = 0; i < suitcases.length; i++){
            if (!zeroed.includes(i)){
                sum += vals[i];
            }
        }
        var suitcases = document.getElementsByClassName("suitcase");
        var caseValue = -1;
        for (var i = 0; i < suitcases.length; i++){
            if (suitcases.item(i).id == selectedCase){
                caseValue = vals[i];
                break;
            }
        }
        console.log(sum + caseValue);
        var offer = Math.floor((sum+caseValue)/(11-zeroed.length)*.9);
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
        var sum = 0;
        var zeroed = 0;
        suitcasesExhausted();
        initializeBoard();
    }
    if(document.getElementById("bottom-button-deal").clicked == true){
        var sum = 0;
        var zeroed = 0;
        var box = document.getElementById("offer-box");
        alert("Deal! You won: " + "$" + box.value);
        document.getElementById("bottom-button-deal").textContent = "Deal";
        
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
        alert("The value in your case was: " + "$" + caseValue);
        document.getElementById("bottom-button-deal").color = "black";
        initializeBoard();
    }
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
    alert("Game Over! The value in your case was: " + "$" + caseValue);
}