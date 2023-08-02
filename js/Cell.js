export class Cell {

    constructor( cellData ){
        this.x = cellData.posX; 
        this.y = cellData.posY;
        this.walls = cellData.walls;
        if (cellData.entrance ) { this.entrance = true }
        if (cellData.entrance ) { this.visited = true }
        if (cellData.exit ) { this.exit = true }
    }

    
    setVisitedToTrue(isVisited){
        this.visited = isVisited;
    }

    getCellDOM(){
        let div = document.createElement('div');
        div.id = this.x + "-" + this.y;
        div.classList.add("cell", "child");

        if( this.entrance ){
            div.classList.add('depart');
        }
        if(this.exit){
            div.classList.add('sortie');
        }

        let border = this.walls.map( wallBool => wallBool ? "6px " : "0px " ).join(" ");
        div.style.border = "ridge black";
        div.style.borderWidth = border;
        console.log(div)
        return div;
    }
}