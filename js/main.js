let sizeSelected = 3;
let typeSelected = 0;

init()
createOptions();

function createOptions(){
    for(let labSize=4; labSize<26; labSize++){
        let option = document.createElement('option');
        let sizeSelector = document.getElementById('labyrinthe_size');
        option.textContent = labSize;
        option.setAttribute("value", labSize);
        sizeSelector.appendChild(option);
    }
    for(let labVariant=1; labVariant<3; labVariant++){
        let option = document.createElement('option');
        let typeSelector = document.getElementById('typeOfLab');
        option.textContent = labVariant;
        option.setAttribute("value", labVariant);
        typeSelector.appendChild(option);
    }
}


function init(){
    let exArray = ["ex-0", "ex-1", "ex-2"];
    console.log(sizeSelected);
    console.log(exArray[typeSelected]);
    labyrinthe = labyrinthes[sizeSelected][exArray[typeSelected]];
    let lab = document.getElementById('labyrinthe');
    lab.innerHTML = "";

    for( let cell of labyrinthe){
        let div = document.createElement('div');
        div.id = cell.posX + "-" + cell.posY;
        div.classList.add("cell", "child");
        div.setAttribute("style", `flex-basis : ${100/sizeSelected}%`);  

        if( cell.entrance ){
            div.classList.add('depart');
        }
        if(cell.hasOwnProperty('exit')){
            div.classList.add('sortie');
        }

        let border = ""
        cell.walls.forEach(wallBool => wallBool? border += "6px " : border += "0px ");
        div.style.border = "ridge black";
        div.style.borderWidth = border;
        console.log(border);
        lab.appendChild(div);
    }
}

let labyrintheSize = document.getElementById('labyrinthe_size');
let labyrintheType = document.getElementById('typeOfLab');
labyrintheSize.addEventListener('change', function(){
    sizeSelected = labyrintheSize.value;
    init();
});
labyrintheType.addEventListener('change', function(){
    typeSelected = labyrintheType.value;
    init();
});





