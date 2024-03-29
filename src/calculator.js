export default class Calculator{
  constructor (name, age, expectancy) {
    this.name = name;
    this.age = age;
    this.expectancy = expectancy;
  }

  mercury() {
    this.mercuryAge = (this.age / 0.24);
    return this.mercuryAge;
  }

  venus() {
    this.venusAge = (this.age / 0.62);
    return this.venusAge;
  }

  mars() {
    this.marsAge = (this.age / 1.88);
    return this.marsAge;
  }

  jupiter() {
    this.jupiterAge = (this.age / 11.88);
    return this.jupiterAge;
  }

  earthLife () {
    if ((this.expectancy - this.age) > 0 ) {
      return this.earthLeft = (this.expectancy - this.age);
    } else {
      return this.earthBeyond = (this.age - this.expectancy);
    }
  }

  mercuryLife() {
    if ((this.expectancy / 0.24 - this.mercuryAge) > 0 ) {
      return this.mercuryLeft = (this.expectancy / 0.24 - this.mercuryAge);
    } else {
      return this.mercuryBeyond = (this.mercuryAge - (this.expectancy / 0.24 ));
    }
  }

  venusLife() {
    if ((this.expectancy/ 0.62 - this.venusAge) > 0 ) {
      return this.venusLeft = (this.expectancy/ 0.62 - this.venusAge);
    } else {
      return this.venusBeyond = (this.venusAge - (this.expectancy/ 0.62));
    }
    
  }

  marsLife() {
    if ((this.expectancy/ 1.88 - this.marsAge) > 0 ) {
      return this.marsLeft = (this.expectancy/ 1.88) - this.marsAge;
    } else {
      return this.marsBeyond = this.marsAge - (this.expectancy/1.88);
    }
  }

  jupiterLife() {
    if ((this.expectancy/11.86 - this.jupiterAge) > 0) {
      return this.jupiterLeft = (this.expectancy / 11.86) - this.jupiterAge;
    } else {
      return this.jupiterBeyond = this.jupiterAge - (this.expectancy/11.86);
    }
  }
}







