input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Math.randomBoolean()))
})
game.setScore(50)
basic.forever(function () {
    if (true) {
        game.addScore(5)
    } else {
        game.addScore(-10)
    }
    if (game.isGameOver()) {
        game.setScore(game.score())
    }
})
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        game.gameOver()
    }
})
