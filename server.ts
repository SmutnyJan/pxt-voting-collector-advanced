//% weight=100 color=#3bccc0 icon="\uf233" block="Server"
namespace server {
    let serialNumbers: number[] = []
    let answers: string[] = []


    /**
    * Spustí nové hlasování a smaže uložená data
    */
    //% block="Spusť nové hlasování"

    export function newVoting(): void {
        answers = []
        serialNumbers = []
    }

    /**
    * Zaznamená nový hlas
    * @vote Hlas k zaznamenání
    * @serialNumber Sériové číslo odesílatele
    */
    //% block="Zaznamenej hlas %vote se seriovým číslem %serialNumber"

    export function addVote(vote: string, serialNumber: number): void {
        if (serialNumber == 0) {
            return
        }
        
        vote = toUpperCase(vote)
        let contains = false      
        for (let number of serialNumbers) {
            if (number == serialNumber) {
                contains = true
            }
        }
        if (contains == false) {
            answers.push(vote)
            serialNumbers.push(serialNumber)
        } else {
            answers[serialNumbers.indexOf(serialNumber)] = vote
        }
    }

    /**
    * Vrátí pole odpovědí
    */
    //% block="Získej odpovědi"

    export function currentAnswers(): string[] {
        return answers
    }

    function toUpperCase(text: string): string {
        switch (text) {
            case "a":
                return "A"
                break
            case "b":
                return "B"
                break
            case "c":
                return "C"
                break
            case "d":
                return "D"
                break
            default:
                return text   
        }
    }


}