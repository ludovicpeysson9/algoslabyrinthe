import OptionCreator from './OptionCreator.js';
import Labyrinthe from './Labyrinthe.js';
import labyrinthes from './LabyrinthesData.js';

class App {

    constructor(){
        this.sizeSelected = 3;
        this.typeSelected = 0;
    }

    init() {
        let exArray = ['ex-0', 'ex-1', 'ex-2'];
        let labData = labyrinthes[ this.sizeSelected ] [exArray[this.typeSelected] ];
        this.labyrinthe = new Labyrinthe( labData );
        let resolveButtonDFS = document.getElementById('resolveButtonDFS');
        let resolveButtonBFS = document.getElementById('resolveButtonBFS');
        resolveButtonDFS.addEventListener('click', this.resolveDFS.bind(this));
        resolveButtonBFS.addEventListener('click', this.resolveBFS.bind(this));
        let lab = document.getElementById('labyrinthe');
        lab.innerHTML = '';
        this.labyrinthe.display();
        console.log(labData);
    }

    handleSizeChange() {
        let labyrintheSize = document.getElementById('labyrinthe_size');
        labyrintheSize.addEventListener('change', () => {
            this.sizeSelected = labyrintheSize.value;
            this.init();
        });
    }
    handleTypeChange() {
        let labyrintheType = document.getElementById('typeOfLab');
        labyrintheType.addEventListener('change', () => {
            this.typeSelected = labyrintheType.value;
            this.init();
        });
    }

    resolveDFS(){

        let entrance = this.findEntrance();
        let stack = [];

        stack.push(entrance);

        while(stack.length>0){
            let currentPosition = stack.pop();
            if(!currentPosition.isVisited){
                currentPosition.isVisited = true;
                if(currentPosition.exit){
                    console.log(this.pathFromEntranceToHere(currentPosition));
                    this.colorPath(this.pathFromEntranceToHere(currentPosition));
                    return this.pathFromEntranceToHere(currentPosition);
                }
                let neighbours = this.findNeighbours(currentPosition);
                console.log(neighbours);
                for(let neighbour of neighbours){
                    if(!neighbour.isVisited){
                        neighbour.parent = currentPosition;
                        stack.push(neighbour);
                    }
                }
            }
        }
        return undefined;
    }
    resolveBFS(){
        
        let entrance = this.findEntrance();
        let queue = [];
        queue.push(entrance);

        console.log(queue)
        while(queue.length>0){
            let nextCell = queue.shift();
            if(!nextCell.isVisited){
                nextCell.isVisited = true;
                if(nextCell.exit){
                    console.log(this.pathFromEntranceToHere(nextCell));
                    this.colorPath(this.pathFromEntranceToHere(nextCell));
                    return this.pathFromEntranceToHere(nextCell);
                }
                let neighbours = this.findNeighbours(nextCell);
                for(let neighbour of neighbours){
                    if(!neighbour.isVisited){
                        neighbour.parent = nextCell;
                        queue.push(neighbour);
                    }
                }
            }
        }
        return undefined;
    }

    pathFromEntranceToHere(Cell){
        let path = [];

        while(Cell.parent!=null){
            path.unshift(Cell);
            Cell = Cell.parent;
        }
        path.unshift(Cell);

        return path;
    }

    findNeighbours(Cell){
        let validNeighbours = [];
        const position = ["top", "right", "bottom", "left"]; 
        const possibleDirection = []; 

        for( let side = 0; side<Cell.walls.length; side++ ){
            if(!Cell.walls[side]){
                possibleDirection.push(position[side]);
            }
        }

        for( let j = 0;  j < possibleDirection.length; j++ ){
            if(possibleDirection[j] == "top"){
                let way = this.labyrinthe.cells.find(cell => cell.x === Cell.x-1 && cell.y === Cell.y);
                if(way!=undefined){
                    validNeighbours.push(way);
                }
            }    
            if(possibleDirection[j] == "right"){
                let way = this.labyrinthe.cells.find(cell => cell.x === Cell.x && cell.y === Cell.y+1);
                if(way!=undefined){
                    validNeighbours.push(way);
                }
            }
            if(possibleDirection[j] == "bottom"){
                let way = this.labyrinthe.cells.find(cell => cell.x === Cell.x+1 && cell.y === Cell.y);
                if(way!=undefined){
                    validNeighbours.push(way);
                }
            }
            if(possibleDirection[j] == "left"){
                let way = this.labyrinthe.cells.find(cell => cell.x === Cell.x && cell.y === Cell.y-1);
                if(way!=undefined){
                    validNeighbours.push(way);
                }
            }
        }
        return validNeighbours;
    }

    findEntrance(){
        return this.labyrinthe.cells.find(cell => cell.entrance);
    }

    async colorPath(pathFromEntranceToHere){

        for (let cell of pathFromEntranceToHere){
            if(!cell.entrance && !cell.exit){
                document.getElementById(cell.x+"-"+cell.y).style.background = "radial-gradient(#F7A8B4, lightpink, pink, #ECBDDD,pink)";
                document.getElementById(cell.x+"-"+cell.y).style.opacity = "0.9";
                document.getElementById(cell.x+"-"+cell.y).style.borderRadius = "10px";
            }
            await new Promise(resolve=>setTimeout(resolve, 50));
        }
    }
    
}

const optionCreator = new OptionCreator();

optionCreator.createSizeOptions();
optionCreator.createTypeOptions();

const app = new App();
app.init();
app.handleSizeChange();
app.handleTypeChange();
















