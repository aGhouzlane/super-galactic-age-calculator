export default class GalacticAge {
  constructor(age) {
    this.age = age;
  }
  toMercuryYear() {
    return this.age / .24;
  }
  toVenusYear() {
    return this.age / .62;
  }
  toMarsYear() {
    return this.age / 1.88;
  }
  toJupiterYear() {
    return this.age / 11.86;
  }

}

