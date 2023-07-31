let size = 20;
let labyrinthe1 = labyrinthes[size]["ex-0"];
let labyrinthe2 = labyrinthes[size]["ex-1"];
let labyrinthe3 = labyrinthes[size]["ex-2"];
let labyrinthe4 = labyrinthes[size]["ex-0"];
let labyrinthe20 = labyrinthes[size]["ex-2"];

console.log(labyrinthe20);

let lab = document.getElementById('labyrinthe');
let entrance = document.getElementById('entrance');

for(i=0;i<size*size;i++){
    let div = document.createElement('div')
    lab.appendChild(div);
    div.classList.add("cell");
    div.classList.add("child");
    div.setAttribute("id", i);

    if(labyrinthe20[i].hasOwnProperty('entrance')){
        div.classList.add('depart');
    }
    if(labyrinthe20[i].hasOwnProperty('exit')){
        div.classList.add('sortie');
    }

    if(labyrinthe20[i].walls[0]==true){
        div.classList.add('topWall')
    }
    if(labyrinthe20[i].walls[1]==true){
        div.classList.add('rightWall')
    }
    if(labyrinthe20[i].walls[2]==true){
        div.classList.add('bottomWall')
    }
    if(labyrinthe20[i].walls[3]==true){
        div.classList.add('leftWall')
    }
        // labyrinthe1[i].walls.map(div.classList(()))
}



