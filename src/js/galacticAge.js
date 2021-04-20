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
  findAgeExpectancy() {
    let ageLeftTolive = 0;
    if (this.age > 0 && this.age <= 20 && this.eatGoodFood && this.exercise && this.haveFun && this.getEnoughSleep) {
      ageLeftTolive += 60;
    } else if (this.age > 0 && this.age <= 20 && !this.eatGoodFood && !this.exercise && !this.haveFun && !this.getEnoughSleep) {
      ageLeftTolive += 40;
    }
    if (this.age > 20 && this.age <= 50 && this.eatGoodFood && this.exercise && this.haveFun && this.getEnoughSleep) {
      ageLeftTolive += 35;
    }
    if (this.age > 20 && this.age <= 50 && !this.eatGoodFood && !this.exercise && !this.haveFun && !this.getEnoughSleep) {
      ageLeftTolive += 15;
    }
    if (this.age > 50 && this.age <= 80 && this.eatGoodFood && this.exercise && this.haveFun && this.getEnoughSleep) {
      ageLeftTolive += 9;
    }
    //If a user has already surpassed the average life expectancy
    if (this.age > 80) {
      return this.age;
    }
    return ageLeftTolive;
  }
  findYearsLeftToLiveInMercury() {
    this.age = this.findAgeExpectancy();
    return this.toMercuryYear();
  }
  findYearsLeftToLiveInVenus() {
    let ageLeftToLive = this.findAgeExpectancy();
    this.age = ageLeftToLive;
    return this.toVenusYear();
  }
  findYearsLeftToLiveInMars() {
    let ageLeftToLive = this.findAgeExpectancy();
    this.age = ageLeftToLive;
    return this.toMarsYear();
  }
  findYearsLeftToLiveInJupiter() {
    let ageLeftToLive = this.findAgeExpectancy();
    this.age = ageLeftToLive;
    return this.toJupiterYear();
  }
}

