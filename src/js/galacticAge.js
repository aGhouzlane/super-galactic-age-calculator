export default class GalacticAge {
  constructor(age, eatGoodFood, exercise, haveFun, getEnoughSleep) {
    this.age = age;
    this.eatGoodFood = eatGoodFood;
    this.exercise = exercise;
    this.haveFun = haveFun;
    this.getEnoughSleep = getEnoughSleep;
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

