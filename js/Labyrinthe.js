import { Cell } from './Cell.js'

class Labyrinthe{
    
    constructor( labData ){
        this.size = Math.sqrt(labData.length);
        this.cells = [];
        labData.forEach( cellData => this.cells.push( new Cell(cellData) ))
    }
    
    getSizeOfCell(size){
        let arrayOfCellSizes = [175, 175, 175, 175, 135, 100, 90, 75, 65, 60, 50, 45, 44, 42, 36, 33, 33, 31, 30, 30, 29, 28, 27, 26, 25, 23];
        return arrayOfCellSizes[size];
    }

    display(){
        let lab = document.getElementById('labyrinthe');
        for( let cell of this.cells ){
            let div = cell.getCellDOM();
            div.style.flexBasis = 100/this.size + "%";  
            div.style.height = this.getSizeOfCell(this.size)+"px";
            lab.appendChild(div);
        }
    }
}

export default Labyrinthe;