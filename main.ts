namespace SpriteKind {
    export const cursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curserGridCol += -1
    cursorX += -10
    drawGrid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[curserGridRow][curserGridCol] = grid[curserGridRow][curserGridCol] * -1 + 1
    drawGrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curserGridCol += -1
    cursorX += -10
    drawGrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    curserGridCol += 1
    cursorX += 10
    drawGrid()
})
function drawGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let neighborCountSprite of row) {
            if (neighborCountSprite == 1) {
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
                gridSprite.left = currentX
                gridSprite.top = currentY
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
    newCursor.left = cursorX
    newCursor.top = cursorY
    neighborCountSprite.right = cursorX
    neighborCountSprite.bottom = cursorY
    neighborCountSprite.setText(convertToText(countNeighbors(curserGridRow, curserGridCol)))
}
function countNeighbors (currentRow: number, currentCol: number) {
    neighborCount = 0
    if (currentRow == 0 && currentCol == 2) {
        neighborCount += grid[11][15]
    } else if (currentRow == 0) {
        neighborCount += grid[11][currentCol - 1]
    } else {
        neighborCount += grid[currentRow - 1][currentCol - 1]
    }
    if (currentRow == 0) {
        neighborCount += grid[11][currentCol]
    } else {
        neighborCount += grid[currentRow - 1][currentCol - 0]
    }
    if (currentRow == 0 && currentCol == 15) {
        neighborCount += grid[11][0]
    } else if (currentRow == 0) {
        neighborCount += grid[11][currentCol + 1]
    } else {
        neighborCount += grid[currentRow - 1][currentCol + 1]
    }
    if (currentCol == 15) {
        neighborCount += grid[currentRow][15]
    } else {
        neighborCount += grid[currentRow - 1][currentCol + 1]
    }
    return neighborCount
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curserGridCol += 1
    cursorX += 10
    drawGrid()
})
let neighborCount = 0
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let neighborCountSprite: TextSprite = null
let cursorY = 0
let cursorX = 0
let curserGridRow = 0
let curserGridCol = 0
let newCursor: Sprite = null
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 15; column++) {
        grid[row].push(0)
    }
}
newCursor = sprites.create(img`
    9 9 9 . . . . 9 9 9 
    9 . . . . . . . . 9 
    9 . . . . . . . . 9 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    9 . . . . . . . . 3 
    9 . . . . . . . . 3 
    9 9 9 . . . . 3 3 3 
    `, SpriteKind.cursor)
curserGridCol = 0
curserGridRow = 0
cursorX = 0
cursorY = 0
newCursor.z = 10
neighborCountSprite = textsprite.create("")
neighborCountSprite.z = 10
drawGrid()
