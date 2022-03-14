//% weight=100 color=#3bccc0 icon="\uf233" block="Server"
namespace Server {
    let seriovaCisla: number[] = []
    let odpovedi: string[] = []


    /**
    * Spustí nové hlasování a smaže uložená data
    */
    //% block="Spusť nové hlasování"

    export function noveHlasovani(): void {
        odpovedi = []
        seriovaCisla = []
    }

    /**
    * Zaznamená nový hlas
    * @hlas Hlas k zaznamenání
    * @serioveCislo Sériové číslo odesílatele
    */
    //% block="Zaznamenej hlas %hlas se seriovým číslem %serioveCislo"

    export function zaznamenatHlas(hlas: string, serioveCislo: number): void {
        if (serioveCislo == 0) {
            return
        }
        
        hlas = prevedNaVetsiPismo(hlas)
        let contains = false      
        for (let number of seriovaCisla) {
            if (number == serioveCislo) {
                contains = true
            }
        }
        if (contains == false) {
            odpovedi.push(hlas)
            seriovaCisla.push(serioveCislo)
        } else {
            odpovedi[seriovaCisla.indexOf(serioveCislo)] = hlas
        }
    }

    /**
    * Vrátí pole odpovědí
    */
    //% block="Získej odpovědi"

    export function ziskatOdpovedi(): string[] {
        return odpovedi
    }

    function prevedNaVetsiPismo(text: string): string {
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