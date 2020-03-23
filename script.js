let grid = document.getElementById('grid');
let tilesAmount = 64
let mineAmount = 10
let mines = []
let tiles = []

function start() {
    grid.innerHTML = '';
    generateGrid();
    setMines();
}

function generateGrid() {
    for(let i = 0; i < tilesAmount; i++) {
        let tile = document.createElement('div')
        tile.classList.add('tile')
        tile.addEventListener('click', ()=>{
            let clickedOn = i;
            for(let j = 0; j < mines.length; j++) {
                if(clickedOn === mines[j]) {
                    alert('ur ded');
                    return
                }
            }
            console.log('yay')
            tile.style.backgroundColor = 'white'
            checkDistance(i)
        })
        grid.appendChild(tile)
    }
}

function setMines() {
    for(let i = 0; i < mineAmount; i++) {
        mines.push(Math.floor(Math.random() * tilesAmount));
        let previousMine = mines[i - 1]
        if(mines[i] == previousMine) {
            mines.splice(i, 1)
            i--
        }
    }
    console.log(mines)
}

function checkDistance(index) {
    let xPosDistance
    let xNegDistance
    for(let i = 0; i < mines.length; i++) {
        console.log(mines[i], index);
        
        //x positief
        if(mines[i] === index + 1) {
            xPosDistance = 1
        } else if (mines[i] === index + 2) {
            xPosDistance = 2
        } else if (mines[i] === index + 3) {
            xPosDistance = 3
        }
        //x negatief
        if(mines[i] === index - 1) {
            xNegDistance = 1
        } else if (mines[i] === index - 2) {
            xNegDistance = 2
        } else if (mines[i] === index - 3) {
            xNegDistance = 3
        }
    }
    console.log(xPosDistance + " x postief verwijder", xNegDistance + " x postief verwijder",)
    
}

start()