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
    let cursorY = 0
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
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
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curserGridCol += 1
    cursorX += 10
    drawGrid()
})
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let cursorX = 0
let curserGridCol = 0
let curserGridRow = 0
let newCursor: Sprite = null
let grid: number[][] = []
let row: number[] = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 15; column++) {
        grid[row].push(1)
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
    9 . . . . . . . . 9 
    9 . . . . . . . . 9 
    9 9 9 . . . . 9 9 9 
    `, SpriteKind.cursor)
curserGridRow = 0
curserGridCol = 0
cursorX = 0
newCursor.top = 10
drawGrid()
