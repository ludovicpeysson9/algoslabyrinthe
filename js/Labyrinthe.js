import { Cell } from './Cell.js'

class Labyrinthe{
    
    constructor( labData ){
        this.size = Math.sqrt(labData.length);
        this.cells = [];
        labData.forEach( cellData => this.cells.push( new Cell(cellData) ))
    }
    
    getSizeOfCell(size){
        let arrayOfCellSizes = [200, 200, 200, 200, 160, 125, 100, 85, 75, 70, 60, 55, 52, 48, 42, 38, 36, 35, 34, 33, 32, 31, 31, 30, 29, 23];
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