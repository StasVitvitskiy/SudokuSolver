export const validateRow = (matrix: number[][], index: number) => {
    let obj = {}
    for(const value of matrix[index]) {
        if(obj[value]) {
            return false
        } else {
            obj[value] = Boolean(value)
        }
    }
    return true;
}

export const validateColumn = (matrix:number[][], index: number) => {
    let obj = {};
    for(let i = 0; i < matrix.length; i++) {
        if(obj[matrix[i][index]]) {
            return false
        } else {
            obj[matrix[i][index]] = Boolean(matrix[i][index])
        }
    }
    return true
}
//1 x=0y=0 //2 x=3y=0 //3 x=6y=0
//4 x=0y=3 //5 x=3y=3 //6 x=6y=3
//7 x=0y=6 //8 x=3y=6 //9 x=6y=6
export const getSubGrid = (matrix: number[][], row: number,column:number):number[] => {
    let x = 0;
    let y = 0
    if(row < 3) {
        y = 0
    } else if(row < 6) {
        y = 3
    } else {
        y = 6;
    }
    if(column < 3) {
        x = 0;
    } else if(column < 6) {
        x = 3
    } else {
        x = 6
    }
    let subGrid = [];
    for(let i = y; i < y + 3; i++){
        for(let j = x; j < x + 3; j++) {
            subGrid.push(matrix[i][j])
        }
    }
    return subGrid
}
export const validateSubgrid = (subgrid: number[]) => {
    let obj = {};
    for(const value of subgrid) {
        if(obj[value]) {
            return false
        } else {
            obj[value] = Boolean(value)
        }
    }
    return true;
}
export const getColumn = (matrix:number[][], index:number) => {
    let columnArr = [];
    for(let i = 0; i < matrix.length; i++) {
        columnArr.push(matrix[i][index])
    }
    return columnArr
}
export const getPossibleNumbers = (matrix: number[][], row:number, column: number) => {
    const subgrid = getSubGrid(matrix, row, column);
    const rowArr = matrix[row];
    const columnArr = getColumn(matrix, column);
    const arrayOfNums = subgrid.concat(rowArr,columnArr);
    let obj = {
        1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''
    };
    for(const value of arrayOfNums) {
        if(value in obj) {
            delete obj[value]
        }
    }
    return Object.keys(obj).map(Number)
}
/*
[
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 1, 2, 0, 0, 7, 6, 5, 0],
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 1, 2, 0, 0, 7, 6, 5, 0],
    [0, 1, 2, 0, 0, 7, 6, 5, 0],
]
*/