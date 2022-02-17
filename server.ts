/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#3bccc0 icon="\uf233"
namespace Server {

    let serialNumbers: number[] = []
    let answers: string[] = []




    /**
    * Spustí nové hlasování a smaže uložená data
    */
    //% block="Spusť nové hlasování"

    export function NoveHlasovani(): void {
        answers = []
        serialNumbers = []
    }

    /**
    * Zaznamená nový hlas
    */
    //% block="Zaznamenej hlas %hlas se seriovým číslem %serioveCislo"

    export function ZaznamenatHlas(hlas: string, serioveCislo: number): void {
        hlas = MyToUpperCase(hlas)
        let contains = false      
        for (let number of serialNumbers) {
            if (number == serioveCislo) {
                contains = true
            }
        }
        if (contains == false) {
            answers.push(hlas)
            serialNumbers.push(serioveCislo)
        } else {
            answers[serialNumbers.indexOf(serioveCislo)] = hlas
        }
    }

    /**
    * Vrátí pole odpovědí
    */
    //% block="Získej odpovědi"

    export function GetOdpovedi(): string[] {
        return answers
    }

    function MyToUpperCase(text: string): string {
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