export default class GalacticAge {
  constructor(age, eatGoodFood, exercise, haveFun, getEnoughSleep) {
    this.age = age;
    this.eatGoodFood = eatGoodFood;
    this.exercise = exercise;
    this.haveFun = haveFun;
    this.getEnoughSleep = getEnoughSleep;
    this.averageLifeExpectancy = 70;
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
    if (this.age > 0 && this.age <= 20 &&
      this.eatGoodFood && this.exercise &&
      this.haveFun && this.getEnoughSleep) {
      ageLeftTolive += 60;
    } else if (this.age > 0 && this.age <= 20 &&
      !this.eatGoodFood && !this.exercise &&
      !this.haveFun && !this.getEnoughSleep) {
      ageLeftTolive += 40;
    }
    if (this.age > 20 && this.age <= 50 &&
      this.eatGoodFood && this.exercise &&
      this.haveFun && this.getEnoughSleep) {
      ageLeftTolive += 35;
    }
    if (this.age > 20 && this.age <= 50 &&
      !this.eatGoodFood && !this.exercise &&
      !this.haveFun && !this.getEnoughSleep) {
      ageLeftTolive += 15;
    }
    if (this.age > 50 && this.age <= 80 &&
      this.eatGoodFood && this.exercise &&
      this.haveFun && this.getEnoughSleep) {
      ageLeftTolive += 9;
    }
    //If a user has already surpassed the average life expectancy 
    if (this.age > 80) {
      ageLeftTolive += 90;
    }
    return ageLeftTolive;
  }

  findLifeExpectancyInMercury() {
    this.age = this.findAgeExpectancy();
    return this.toMercuryYear();
  }
  findYearsLeftToliveInMercury() {
    let age = this.toMercuryYear();
    if (this.averageLifeExpectancy < this.findAgeExpectancy()) {
      return Math.abs(age - this.findLifeExpectancyInMercury());
    }
    return this.findLifeExpectancyInMercury() - age;
  }

  findLifeExpectancyInVenus() {
    this.age = this.findAgeExpectancy();
    return this.toVenusYear();
  }
  findYearsLeftToLiveInVenus() {
    let age = this.toVenusYear();
    if (this.averageLifeExpectancy < this.findAgeExpectancy()) {
      return Math.abs(age - this.findLifeExpectancyInVenus());
    }
    return this.findLifeExpectancyInVenus() - age;
  }

  findLifeExpectancyInMars() {
    this.age = this.findAgeExpectancy();
    return this.toMarsYear();
  }
  findYearsLeftToLiveInMars() {
    let age = this.toMarsYear();
    if (this.averageLifeExpectancy < this.findAgeExpectancy()) {
      return Math.abs(age - this.findLifeExpectancyInMars());
    }
    return this.findLifeExpectancyInMars() - age;
  }

  findLifeExpectancyInJupiter() {
    this.age = this.findAgeExpectancy();
    return this.toJupiterYear();
  }
  findYearsLeftToLiveInJupiter() {
    let age = this.toJupiterYear();
    if (this.averageLifeExpectancy < this.findAgeExpectancy()) {
      return Math.abs(age - this.findLifeExpectancyInJupiter());
    }
    return this.findLifeExpectancyInJupiter() - age;
  }
}

