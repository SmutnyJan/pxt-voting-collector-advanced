input.onButtonPressed(Button.A, function () {
    odpovedi = Server.GetOdpovedi()
    pocetD = 0
    pocetC = 0
    pocetB = 0
    pocetA = 0
    for (let hodnota of odpovedi) {
        if (hodnota == "A") {
            pocetA += 1
        } else if (hodnota == "B") {
            pocetB += 1
        } else if (hodnota == "C") {
            pocetC += 1
        } else if (hodnota == "D") {
            pocetD += 1
        }
    }
    basic.showString("A" + pocetA)
    basic.showString("B" + pocetB)
    basic.showString("C" + pocetD)
    basic.showString("D" + pocetC)
})
input.onButtonPressed(Button.B, function () {
    Server.NoveHlasovani()
})
radio.onReceivedValue(function (name, value) {
    Server.ZaznamenatHlas(name, value)
})
let pocetA = 0
let pocetB = 0
let pocetC = 0
let pocetD = 0
let odpovedi: string[] = []
radio.setGroup(1)
