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

}

/*
Mercury years. (A Mercury year is .24 Earth years.)
Returns their age in Venus years. (A Venus year is .62 Earth years.)
Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
Returns their age in Jupiter years.
*/