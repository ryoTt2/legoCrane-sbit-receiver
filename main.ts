radio.onReceivedNumber(function (receivedNumber) {
    SuperBit.MotorStopAll()
    if (receivedNumber == 1) {
        Sw += 1
        if (Sw % 2 == 1) {
            if (SelectMT == 1) {
                SuperBit.MotorRun(SuperBit.enMotors.M1, 111)
            } else {
                if (SelectMT == 2) {
                    SuperBit.MotorRun(SuperBit.enMotors.M2, 58)
                } else {
                    if (SelectMT == 3) {
                        SuperBit.MotorRun(SuperBit.enMotors.M3, 53)
                    } else {
                        SuperBit.MotorRun(SuperBit.enMotors.M4, 107)
                    }
                }
            }
        }
    } else {
        if (receivedNumber == 2) {
            Sw += 1
            if (Sw % 2 == 1) {
                if (SelectMT == 1) {
                    SuperBit.MotorRun(SuperBit.enMotors.M1, -111)
                } else {
                    if (SelectMT == 2) {
                        SuperBit.MotorRun(SuperBit.enMotors.M2, -53)
                    } else {
                        if (SelectMT == 3) {
                            SuperBit.MotorRun(SuperBit.enMotors.M3, -53)
                        } else {
                            SuperBit.MotorRun(SuperBit.enMotors.M4, -103)
                        }
                    }
                }
            }
        } else {
            Sw = 0
            SelectMT += 1
            if (SelectMT == 5) {
                SelectMT = 1
            }
            if (SelectMT == 1) {
                basic.showIcon(IconNames.Happy)
            } else {
                if (SelectMT == 2) {
                    basic.showIcon(IconNames.Giraffe)
                } else {
                    if (SelectMT == 3) {
                        basic.showIcon(IconNames.Diamond)
                    } else {
                        basic.showLeds(`
                            # . . . .
                            . # . . .
                            . . # . .
                            . . # # #
                            . . # # #
                            `)
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
	
})
let SelectMT = 0
let Sw = 0
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `)
Sw = 0
SelectMT = 1
