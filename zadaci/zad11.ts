class Autombile {
  constructor(
    private model: string,
    private year: number,
    private manufacturer: string,
  ) {}
}

class AutombileBulider {
  private model!: string
  private year!: number
  private manufacturer!: string

  setModel(model: string): AutombileBulider {
    this.model = model
    return this
  }

  setYear(year: number): AutombileBulider {
    this.year = year
    return this
  }

  setManufactorer(manufacturer: string): AutombileBulider {
    this.manufacturer = manufacturer
    return this
  }

  build(): Autombile {
    return new Autombile(this.model, this.year, this.manufacturer)
  }
}

const auto = new AutombileBulider()
  .setManufactorer('VW')
  .setModel('Golf')
  .setYear(2020)

console.log(auto)
