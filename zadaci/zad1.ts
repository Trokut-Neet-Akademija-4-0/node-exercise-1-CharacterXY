class Osoba {
  constructor(
    private _ime: string,
    private dob: number,
  ) {}

  public setIme(ime: string): void {
    this._ime = ime
  }

  public setDob(dob: number): void {
    this.dob = dob
  }

  public get getDob(): number {
    return this.dob
  }

  public get imeIdob() {
    return `${this._ime} ${this.dob}`
  }

  predstaviSe() {
    return `Moje ime je ${this._ime} i imam ${this.dob} godina`
  }
}

const osoba = new Osoba('test ime', 99)

osoba.setIme('testttt')
console.log(osoba.imeIdob)
console.log(osoba.getDob)
console.log(osoba.predstaviSe())

export default Osoba
