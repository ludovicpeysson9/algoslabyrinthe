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
        let lab = document.getElementById('labyrinthe');
        lab.innerHTML = '';
        this.labyrinthe.display();
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
}

const optionCreator = new OptionCreator();

optionCreator.createSizeOptions();
optionCreator.createTypeOptions();

const app = new App();
app.init();
app.handleSizeChange();
app.handleTypeChange();



















