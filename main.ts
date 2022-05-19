let hoehe = 0
let ton = 0
basic.forever(function () {
    if (hoehe == 1) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        ton = 659
    } else {
    	
    }
})
basic.forever(function () {
    hoehe = Math.abs(grove.measureInCentimeters(DigitalPin.C16) / 5)
})
