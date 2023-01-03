class Person {
  public dni: number
  public name: string

  constructor(name: string, dni: number) {
    this.dni = dni
    this.name = name
  }
}

class Animal {
  constructor (
    public name: string,
    public race: string,
  ) {}
}

export {
  Animal,
  Person,
}
