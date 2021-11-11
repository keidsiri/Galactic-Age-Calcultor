export default class Calculator{
  constructor (name, age, expectancy) {
    this.name = name;
    this.age = age;
    this.expectancy = expectancy;
    this.mercuryAge = (this.age / 0.24);
    this.venusAge = (this.age / 0.62);
    this.marsAge = (this.age / 1.88);
    this.jupiterAge = (this.age / 11.88);
    this.earthLeft = (this.expectancy - this.age);
    this.earthBeyond = (this.age - this.expectancy);
  }

  earthLife () {
    // if ((this.expectancy - this.age) > 0 ) {
    //   return this.earthLeft = (this.expectancy - this.age);
    // } else {
    //   return this.earthBeyond = (this.age - this.expectancy);
    // }
  }

}







