function drawGrid () {
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridSprite = sprites.create(img`
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    3 3 3 3 3 3 3 3 3 3 
                    `, SpriteKind.Player)
                gridSprite.setPosition(currentX, currentY)
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
}
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let grid: number[][] = []
let rowTemplate = [
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
let row: number[] = []
for (let index = 0; index < 12; index++) {
    grid.push(rowTemplate)
}
game.onUpdate(function () {
    drawGrid()
})
