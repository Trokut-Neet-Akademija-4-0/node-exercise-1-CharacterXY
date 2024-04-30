import Osoba from './zad1'

class Student extends Osoba {
  constructor(
    ime: string,
    dob: number,
    private brojIndeksa: number,
  ) {
    super(ime, dob)
  }

  kloniraj(): Student {
    return new Student(this._ime, this.dob, this.brojIndeksa)
  }
}

const student1 = new Student('blabla', 55, 123)
const student2 = student1.kloniraj()
console.log(student2)

export default Student
