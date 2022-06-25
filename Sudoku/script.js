var cells = [];

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function formatID(line, collumn){
    return 'l'+line.toString()+'c'+collumn.toString();
}
function getGridFromLineAndCollumn(line, collumn){
    if((line >= 0 && line <3) && (collumn >= 0 && collumn < 3))
        return 0;
    else if((line >= 0 && line <3) && (collumn >= 3 && collumn < 6))
        return 1;
    else if((line >= 0 && line <3) && (collumn >= 6 && collumn < 9))
        return 2;
    else if((line >= 3 && line < 6) && (collumn >= 0 && collumn < 3))
        return 3;
    else if((line >= 3 && line < 6) && (collumn >= 3 && collumn < 6))
        return 4;
    else if((line >= 3 && line < 6) && (collumn >= 6 && collumn < 9))
        return 5;
    else if((line >= 6 && line < 9) && (collumn >= 0 && collumn < 3))
        return 6;
    else if((line >= 6 && line < 9) && (collumn >= 3 && collumn < 6))
        return 7;
    else if((line >= 6 && line < 9) && (collumn >= 6 && collumn < 9))
        return 8;
    alert('line or collumn out of range (0-8)');
    return -1;
}

function isCellEmpty(l, c){
    return cells[l][c].value.length == 0;
}
function isNumInLine(line, num){
    for(let c=0;c<9;c++){
        if(document.getElementById(formatID(line, c)).value == num)
            return true;
    }
    return false;
}
function isNumInCollumn(collumn, num){
    for(let l=0;l<9;l++){
        if(document.getElementById(formatID(l, collumn)).value == num)
            return true;
    }
    return false;
}
function isNumInSubGrid(grid, num){
    switch(grid){
        case 0:
            for(let l=0;l<3;l++){
                for(let c=0;c<3;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 1:
            for(let l=0;l<3;l++){
                for(let c=3;c<6;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 2:
            for(let l=0;l<3;l++){
                for(let c=6;c<9;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 3:
            for(let l=3;l<6;l++){
                for(let c=0;c<3;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 4:
            for(let l=3;l<6;l++){
                for(let c=3;c<6;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 5:
            for(let l=3;l<6;l++){
                for(let c=6;c<9;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 6:
            for(let l=6;l<9;l++){
                for(let c=0;c<3;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 7:
            for(let l=6;l<9;l++){
                for(let c=3;c<6;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
        case 8:
            for(let l=6;l<9;l++){
                for(let c=6;c<9;c++){
                    if(cells[l][c].value == num)
                        return true;
                }
            }
            break;
    }
    return false;
}

function paintCell(l, c, color){
    cells[l][c].style.setProperty('background-color', color);
}
function paintLine(line, color){
    for(let c=0; c<9; c++)
        paintCell(line, c, color);
}
function paintCollumn(collumn, color){
    for(let l=0; l<9; l++)
        paintCell(l, collumn, color);
}
function paintGrid(grid, color){
    switch(grid){
        case 0:
            for(let l=0;l<3;l++){
                for(let c=0;c<3;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 1:
            for(let l=0;l<3;l++){
                for(let c=3;c<6;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 2:
            for(let l=0;l<3;l++){
                for(let c=6;c<9;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 3:
            for(let l=3;l<6;l++){
                for(let c=0;c<3;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 4:
            for(let l=3;l<6;l++){
                for(let c=3;c<6;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 5:
            for(let l=3;l<6;l++){
                for(let c=6;c<9;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 6:
            for(let l=6;l<9;l++){
                for(let c=0;c<3;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 7:
            for(let l=6;l<9;l++){
                for(let c=3;c<6;c++){
                    paintCell(l, c, color);
                }
            }
            break;
        case 8:
            for(let l=6;l<9;l++){
                for(let c=6;c<9;c++){
                    paintCell(l, c, color);
                }
            }
            break;
    }
}

function clearCells(){
    for(let l=0; l<9; l++){
        for(let c=0; c<9; c++){
            cells[l][c].value = '';
            cells[l][c].removeAttribute('readonly');
        }
    }
    checkForWin();
}

function setupGame(){
    for(let l=0; l<9; l++){
        let collumnCells = [];
        for(let c=0; c<9; c++)
            collumnCells[c] = document.getElementById(formatID(l, c));
        cells[l] = collumnCells;
    }

    clearCells();
    let select = document.getElementById('difficultySelector');
    for(let i=0; i<select.options[select.selectedIndex].value; i++)
        setupRandomCell();
}
function setupRandomCell(){
    let l = getRandomNum(0, 8);
    let c = getRandomNum(0, 8);
    let n = getRandomNum(1, 9);

    if(!isCellEmpty(l, c)){
        setupRandomCell();
        return;
    }
    
    if(isNumInLine(l, n) || isNumInCollumn(c, n) || isNumInSubGrid(getGridFromLineAndCollumn(l, c), n)){
        setupRandomCell();
        return;
    }
        
    cells[l][c].value = n.toString();
    cells[l][c].setAttribute('readonly', '');
}

function clampValues(){
    for(let l=0; l<9; l++){
        for(let c=0; c<9; c++){
            if(isCellEmpty(l, c))
                continue;

            let n = cells[l][c].value;
            if(n<1)
                n=1;
            else if(n>9)
                n=9;
            cells[l][c].value = n;
        }
    }
}

function startGame(){
    clearCells();
    let select = document.getElementById('difficultySelector');
    for(let i=0; i<select.options[select.selectedIndex].value; i++)
        setupRandomCell();
}

function isLineFull(line){
    for(let c=0; c<9; c++){
        if(cells[line][c].value.length == 0)
            return false;
    }
    return true;
}
function isLineValid(line){
    let ret = true;
    if(!isLineFull(line)) ret = false;
    for(let c=0; c<9; c++){
        for(let j=0; j<9; j++){
            if(j==c)
                continue;
            if(cells[line][c].value == cells[line][j].value && !isCellEmpty(line, c)){
                paintCell(line, c, 'red');
                ret = false;
            }
        }
    }
    if(ret) paintLine(line, 'green');
    return ret;
}

function isCollumnFull(collumn){
    for(let l=0; l<9; l++){
        if(cells[l][collumn].value.length == 0)
            return false;
    }
    return true;
}
function isCollumnValid(collumn){
    let ret = true;
    if(!isCollumnFull(collumn)) ret = false;
    for(let l=0; l<9; l++){
        for(let j=0; j<9; j++){
            if(j==l)
                continue;
            if(cells[l][collumn].value == cells[j][collumn].value && !isCellEmpty(l, collumn)){
                paintCell(l, collumn, 'red');
                ret = false;
            }
        }
    }
    if(ret) paintCollumn(collumn, 'green');
    return ret;
}

function isGridFull(grid){
    switch(grid){
        case 0:
            for(let l=0;l<3;l++){
                for(let c=0;c<3;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 1:
            for(let l=0;l<3;l++){
                for(let c=3;c<6;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 2:
            for(let l=0;l<3;l++){
                for(let c=6;c<9;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 3:
            for(let l=3;l<6;l++){
                for(let c=0;c<3;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 4:
            for(let l=3;l<6;l++){
                for(let c=3;c<6;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 5:
            for(let l=3;l<6;l++){
                for(let c=6;c<9;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 6:
            for(let l=6;l<9;l++){
                for(let c=0;c<3;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 7:
            for(let l=6;l<9;l++){
                for(let c=3;c<6;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
        case 8:
            for(let l=6;l<9;l++){
                for(let c=6;c<9;c++){
                    if(cells[l][c].value.length == 0)
                        return false;
                }
            }
            break;
    }
    return true;
}
function isGridValid(grid){
    let ret = true;
    if(!isGridFull(grid)) ret = false;
    switch(grid){
        case 0:
            for(let l=0; l<3; l++){
                for(let c=0; c<3; c++){
                    for(let i=0; i<3; i++){
                        for(let j=0; j<3; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 1:
            for(let l=0; l<3; l++){
                for(let c=3; c<6; c++){
                    for(let i=0; i<3; i++){
                        for(let j=3; j<6; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 2:
            for(let l=0; l<3; l++){
                for(let c=6; c<9; c++){
                    for(let i=0; i<3; i++){
                        for(let j=6; j<9; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 3:
            for(let l=3; l<6; l++){
                for(let c=0; c<3; c++){
                    for(let i=3; i<6; i++){
                        for(let j=0; j<3; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 4:
            for(let l=3; l<6; l++){
                for(let c=3; c<6; c++){
                    for(let i=3; i<6; i++){
                        for(let j=3; j<6; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 5:
            for(let l=3; l<6; l++){
                for(let c=6; c<9; c++){
                    for(let i=3; i<6; i++){
                        for(let j=6; j<9; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 6:
            for(let l=6; l<9; l++){
                for(let c=0; c<3; c++){
                    for(let i=6; i<9; i++){
                        for(let j=0; j<3; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 7:
            for(let l=6; l<9; l++){
                for(let c=3; c<6; c++){
                    for(let i=6; i<9; i++){
                        for(let j=3; j<6; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
        case 8:
            for(let l=6; l<9; l++){
                for(let c=6; c<9; c++){
                    for(let i=6; i<9; i++){
                        for(let j=6; j<9; j++){
                            if(l!=i && c!=j){
                                if(cells[l][c].value == cells[i][j].value && !isCellEmpty(l, c) && !isCellEmpty(i, j)){
                                    paintCell(l, c, 'red');
                                    paintCell(i, j, 'red');
                                    ret = false;
                                }
                            }
                        }
                    }
                }
            }
            break;
    }
    if(ret) paintGrid(grid, 'green');
    return ret;
}

function checkForWin(){
    for(let l=0; l<9; l++){
        for(let c=0; c<9; c++)
            paintCell(l, c, 'rgb(150, 150, 150)');
    }

    for(let g=0; g<9; g++)
        isGridValid(g);
    for(let c=0; c<9; c++)
        isCollumnValid(c);
    for(let l=0; l<9; l++)
        isLineValid(l);
}