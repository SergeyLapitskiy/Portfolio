var uslugi = [
    {
        name: "Создание сайта",
        prise:5000
    },
    {
        name: "Верстка сайта",
        prise:6000
    },
    {
        name: "Создание интернет магазина",
        prise:7000
    },
    {
        name: "Публикация сайта",
        prise:8000
    },
    {
        name: "Поддержка сайта",
        prise:9000
    },
    {
        name: "Создание визиток",
        prise:3000
    },
]

var cal = document.getElementById('calc');
var tab = document.getElementById('Table');
var priseSum =0;
var vivodSum ;

// console.log(cal);
// console.log(uslugi[1].prise);

for(var i=0; i<uslugi.length;i++){
    tab.innerHTML +=`<tr><td>${uslugi[i].name}</td> <td><input type="checkbox" class="mCheckbox"></td>  <td>${uslugi[i].prise}</td></tr>`
}


tab.innerHTML += `<div id="vivodSum"></div>`;
vivodSum = document.getElementById('vivodSum');
vivodSum.innerHTML = `<br>Сумма = ${priseSum}`;

var mCheckbox = document.getElementsByClassName('mCheckbox');
console.log(mCheckbox);
window.onclick = function() {
    priseSum=0;
    for(var i=0; i<mCheckbox.length; i++){
        if (mCheckbox[i].checked) {
      priseSum += uslugi[i].prise;

    }
    vivodSum.innerHTML = `<br>Сумма = ${priseSum}<br>`;
        if(priseSum>20000){
            vivodSum.innerHTML += `<br>Скидка 10% = ${priseSum/10}<br> `;
            vivodSum.innerHTML += `<br>Итого = ${priseSum-priseSum/10}<br>`
        }
    }
}



/*for(var i=0;i<mCheckbox.length;i++){
    mCheckbox[i].onclick = function(e) {
    if (e.target.checked) {
        //priseSum = mCheckbox.indexOf(e.tardet);
        vivodSum.innerHTML = `<br>Сумма = ${priseSum}`;
        console.log(e.target.type);
        //alert( this.value );
    } else {

    }
};
}*/
