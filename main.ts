basic.forever(function () {
    for (let index = 0; index < 100000000000; index++) {
        music.playMelody("C5 B A G C D E F ", 120)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            # # # # #
            # . . . #
            `)
        basic.showLeds(`
            # . . # #
            # # . . #
            . . # . .
            # # # # .
            # . . . #
            `)
        basic.showLeds(`
            # . . # #
            . # . . .
            . . # . .
            . # # . #
            # . . . #
            `)
        basic.showLeds(`
            . . . . #
            . # . . .
            . . # . .
            . . . . #
            # . . . .
            `)
        basic.showLeds(`
            # # . . #
            . # # # .
            # # # . .
            # . . # #
            # . # # #
            `)
    }
})
