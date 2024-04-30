interface Oblik {
  // Metoda
  povrsina(): number
  opesg(): number
}

class Krug implements Oblik {
  constructor(public radius: number) {}

  povrsina(): number {
    return this.radius * this.radius * Math.PI
  }

  opseg(): number {
    return 2 * this.radius * Math.PI
  }
}

const krug = new Krug(1)

class Pravokutnik implements Oblik {
  constructor(
    public visina: number,
    public sirina: number,
  ) {}

  povrsina(): number {
    return this.visina * this.sirina
  }

  opesg(): number {
    return 2 * (this.sirina + this.visina)
  }
}
