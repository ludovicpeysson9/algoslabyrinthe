class OptionCreator{
    createSizeOptions(){
        for (let labSize=4; labSize<26; labSize++){
            let option = document.createElement('option');
            let sizeSelector = document.getElementById('labyrinthe_size');
            option.textContent = labSize;
            option.setAttribute('value', labSize);
            sizeSelector.appendChild(option);
        }
    }
    createTypeOptions() {
        for (let labVariant = 1; labVariant < 3; labVariant++) {
            let option = document.createElement('option');
            let typeSelector = document.getElementById('typeOfLab');
            option.textContent = labVariant;
            option.setAttribute('value', labVariant);
            typeSelector.appendChild(option);
        }
    }
}

export default OptionCreator;



