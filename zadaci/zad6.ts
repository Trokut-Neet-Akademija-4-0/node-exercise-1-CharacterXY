class Autombil {
  static instanceNumber: number

  constructor(
    private marka: string,
    private godiste: number,
  ) {
    Autombil.instanceNumber = Autombil.instanceNumber ?? 0
    Autombil.instanceNumber += 1
  }

  static getCreatedInstances() {
    return Autombil.instanceNumber
  }
}

console.log(Autombil.getCreatedInstances())
console.log(new Autombil('Hyundai', 100))
console.log(Autombil.getCreatedInstances())
