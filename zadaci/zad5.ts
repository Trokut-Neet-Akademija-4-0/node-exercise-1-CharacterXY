class BankovniRacun {
  constructor(private stanje: number) {}

  public setStanje(stanje: number): void {
    this.stanje = stanje
  }

  public get getStanje(): number {
    return this.stanje
  }

  uplata(iznos) {
    this.stanje += iznos
  }

  isplata(iznos: number) {
    if (iznos <= this.stanje) {
      this.stanje -= iznos
      return true
    } else {
      return false
    }
  }
}

const stanje = new BankovniRacun(300)
stanje.uplata(500)
console.log(stanje)
stanje.isplata(100)
console.log(stanje)
