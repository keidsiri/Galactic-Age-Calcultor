export default class Calculator{
  constructor (name, age, expectancy) {
    this.name = name;
    this.age = age;
    this.expectancy = expectancy;
    this.mercuryAge = (this.age / 0.24);
    this.venusAge = (this.age / 0.62);
    this.marsAge = (this.age / 1.88);
    this.jupiterAge = (this.age / 11.88);
    this.earthLeft = 0;
    this.earthBeyond = 0;
    
  }

  // mercury() {
  //   this.mercuryAge = (this.age / 0.24);
  // }

  // venus() {
  //   this.venusAge = (this.age / 0.62);
  // }

  // mars() {
  //   this.marsAge = (this.age / 1.88);
  // }

  // jupiter() {
  //   this.jupiterAge = (this.age / 11.88);
  // }

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
    
  }

}







