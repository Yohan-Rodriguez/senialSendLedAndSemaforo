radio.setGroup(99)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -520) {
        radio.sendNumber(0)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) >= 600) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) >= -130 && input.acceleration(Dimension.X) <= 130) {
        radio.sendNumber(2)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        radio.sendNumber(3)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
