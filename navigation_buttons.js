var elements = document.getElementsByClassName('jsElments'); //Получил массив секций с классом "jsElments"s

var btnUp = document.getElementById("btnUp");
var btnDown = document.getElementById("btnDown");


btnUp.addEventListener('click', Up);
btnDown.addEventListener('click', Down);

//console.log(elements); // Показываем в консоль

var trackNavigation = 1;

var position = 0; // Создаем переменную позиция в массиве для переключения и присваем ей значение 0 (первый элемент в массиве)
var heightFromTop = [];
var posTop;
if(getCurrentPosition()<3)btnUp.style.visibility = "hidden";

function Down() {
    position = getCurrentPosition();
    //console.log(position);
    if(position<elements.length-1){
    			position += 1; // Изменили позицию
    			//document.getElementById("btnUp").style.visibility = "visible";
    			//if(position == elements.length-1) document.getElementById("btnDown").style.visibility = "hidden";
    }
    elements[position].scrollIntoView();
}


function Up() {
    position = 	getCurrentPosition();
    		//console.log(position);
    if(position > 0){
    	if(itTopPosition()) position -= 1;
    //console.log(position);
    			//document.getElementById("btnDown").style.visibility = "visible";
    			//if(position == 0) document.getElementById("btnUp").style.visibility = "hidden";
    }		// Изменили позицию
          elements[position].scrollIntoView();
}

function getCurrentPosition(){
    initializeValues();
    //console.log(posTop+" "+heightFromTop[0]+" "+heightFromTop[1]+" "+heightFromTop[2]+" "+heightFromTop[3]);
    if(posTop<heightFromTop[1])return  0;
    else if(posTop<heightFromTop[2]) return  1;
    else if(posTop<heightFromTop[3]) return 2;
    else return 3;
}

window.onscroll = function() {
    initializeValues();
    changeViewAndState(getCurrentPosition());
    		//console.log(posTop);
    if(posTop <= heightFromTop[0]) btnUp.style.visibility = "hidden";
    else if(posTop >= heightFromTop[3]) btnDown.style.visibility = "hidden";
    else {
    	btnUp.style.visibility = "visible";
    	btnDown.style.visibility = "visible";
    }
}

function	itTopPosition(){
    initializeValues();
    if(posTop==heightFromTop[1]||posTop==heightFromTop[2]||posTop==heightFromTop[3]) return true;
    return false;
}

function initializeValues(){
    posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    heightFromTop[0] = elements[0].getBoundingClientRect().top + posTop;
    heightFromTop[1] = elements[1].getBoundingClientRect().top + posTop;
    heightFromTop[2] = elements[2].getBoundingClientRect().top + posTop;
    heightFromTop[3] = elements[3].getBoundingClientRect().top + posTop;
}

function changeViewAndState(position){
    highLighthNavigationBarElement(position + 1);
}

function highLighthNavigationBarElement(navPosition){
    var oldE = document.querySelector(".nav li:nth-child(" + (trackNavigation) + "n)")
    oldE.classList.remove("active");
    var newE = document.querySelector(".nav li:nth-child(" + (navPosition) + "n)")
    newE.className += "active"
    trackNavigation = navPosition;
}
