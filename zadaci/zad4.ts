abstract class KucniLjubimci {
  private ime!: string

  abstract glasajSe(): string {}
}

class Pas extends KucniLjubimci {
  private zvuk: string

  constructor() {
    super()
    this.zvuk = 'Vauuu'
    this.ime = 'Pas'
  }

  glasajSe(): string {
    return this.zvuk
  }
}

class Macka extends KucniLjubimci {
  private zvuk: string

  constructor() {
    super()
    this.zvuk = 'Mwauu'
    this.ime = 'Macka'
  }

  glasajSe(): string {
    return this.zvuk
  }
}

const pas = new Pas()
console.log(pas.glasajSe())
const macka = new Macka()
console.log(macka.glasajSe())
