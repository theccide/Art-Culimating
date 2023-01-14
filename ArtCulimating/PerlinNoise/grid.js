const GRIDSIZE = 40;
let perlinGrid2D = [];
const createGrid = (grid, gridSize) =>{
    for (let y = 0; y < gridSize; y ++){
        grid[y] = [];
        for (let x = 0; x < gridSize; x ++){
            grid[y][x] = {r:getRandomNumber(255),g:getRandomNumber(255),b:getRandomNumber(255)};
        }
    }
    return grid;
}