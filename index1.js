let state = {};
const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
newGame();

function newGame(){
    state = {
        phase: "aiming" ,// aiming | in flight | celebrating
        currentPlayer:1,
        bomb:{
            x:undefined,
            y:undefined,
            velocity:{x:0,y:0}
        },

        building:generateBuilding(),
    };

    initializeBombPosition();
    draw();
}

function generateBuilding() {
    //generating metadata for the buildings
    const buildings=[];
    for(let index =0; index<8; index++){
        const previousBuilding = buildings[index-1];
        const x = previousBuilding
        ? previousBuilding.X + previousBuilding.width +4
        :0
        const minWidth = 80;
        const maxWidth = 130;
        const width= minWidth + Math.random() * (maxWidth-minWidth);

        const platformWithGorilla = index === 1||index ===6;
        const minHeight = 40;
        const maxHeight = 300;
        const minHeightGorilla = 30;
        const maxHeightGorilla = 150;
    //checking to see if thats the gorilla stand point in order to generate the height of the building
        const height = platformWithGorilla
          ? minHeightGorilla + Math.random() * (maxHeightGorilla -  minHeightGorilla)
          : minHeight + Math.random() * (maxHeight - minHeight);
    
        buildings.push({ x, width, height });
      }
      return buildings;
    
}

function initializeBombPosition() {
    
}
function draw() {
    ctx.save();
    ctx.tras=nslate(0,window.innerHeight);
    ctx.scale(1,-1);
    drawBackground();
    drawBuildings();
    drawGorilla(1);
    drawGorilla(2);
    drawBomb();
//0559467150.Francis Apike
    //Restore transformation
    ctx.restore();
}
function drawBackground() {
    ctx.fillStyle= "#58A8D8";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
}
function drawBuildings() {
    
}
function drawGorilla(player) {
    
}
function drawBomb() {
    
}
function throwBomb() {
    
}

function animate(timestamp) {
    
}