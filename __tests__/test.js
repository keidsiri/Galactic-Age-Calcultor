import Calculator from './../src/business.js'

describe ('Calculator', () => {
  test('Should create new user object with name and age', () => {
    const user = new Calculator ('Kate', 30);
    expect(user.name).toEqual('Kate');
    expect(user.age).toEqual(30);
  });

  test('Should calculate user age in Mercury years', () => {
    const user = new Calculator ('Kate', 30);
    expect(user.mercury()).toBeCloseTo(30/0.24);
  });
  test('Should calculate user age in Venus years',() => {
    const user = new Calculator ('Kate' , 30);
    expect(user.venus()).toBeCloseTo((30/0.62), 1);  //Use toBeCloseTo to compare floating point numbers for approximate equality.
  });
  test('Should calculate user age in Mars years', () => {
    const user = new Calculator ('Kate' , 30);
    expect(user.mars()).toBeCloseTo((30/1.88), 1); 
  });
  test('Should calculate user age in Jupiter years', () => {
    const user = new Calculator ('Kate' , 30);
    expect(user.jupiter()).toBeCloseTo((30/11.86), 1)
  });
  test('Should calculate how many years of user life has left based on their life expectancy on Earth', () => {
    const user = new Calculator ('Kate' , 30 , 80);
    expect(user.earthLife()).toEqual(50);
  });
  test('Should return years of user life that has already surpassed the average life expectancy', () => {
    const user = new Calculator ('Kate', 50, 40);
    expect(user.earthLife()).toEqual(10);
  });
  test('Should return life on earth left if expectancy years is more then age otherwise return lifeBeyond', () => {
    const user1 = new Calculator ('Kate', 50, 80);
    const user2 = new Calculator ('Kate', 65, 60);
    expect(user1.earthLife()).toEqual(30);
    expect(user2.earthLife()).toEqual(5);
  });
  test('Should calculate remaining years of user on Mercury', () => {
    const user = new Calculator ('Kate', 30 , 80);
    user.mercury();
    expect(user.mercuryLife()).toBeCloseTo((50/0.24), 1)
  });
  test('Should calculate number of years that user lived beyond the expectancy on Mercury', () => {
    const user = new Calculator('Kate', 73, 65);
    user.mercury();
    expect(user.mercuryLife()).toBeCloseTo((8/0.24), 1);
  });
  test('Should calculate remaining years of user on Venus', () => {
    const user = new Calculator ('Kate', 30 , 80);
    user.venus();
    expect(user.venusLife()).toBeCloseTo((50/0.62), 1)
  });
  test('Should calculate number of years that user lived beyond the expectancy on Venus', () => {
    const user = new Calculator('Kate', 73, 65);
    user.venus();
    expect(user.venusLife()).toBeCloseTo((8/0.62), 1);
  });
  test('Should calculate remaining years of user on Mars', () => {
    const user = new Calculator('Kate', 30, 80);
    user.mars();
    expect(user.marsLife()).toBeCloseTo((50/1.88), 1);
  });
  test('Should calculate number of years that user lived beyond the expectancy on Jupiter', () => {
    const user = new Calculator('Kate', 73, 65);
    user.mars();
    expect(user.marsLife()).toBeCloseTo((8/1.88), 1);
  });
  test('Should calculate remaining years of user on Jupiter', () => {
    const user = new Calculator('Kate', 30, 80);
    user.jupiter();
    expect(user.jupiterLife()).toBeCloseTo((50/11.86), 1);
  });
  test('Should calculate number of years that user lived beyond the expectancy on Jupiter', () => {
    const user = new Calculator('Kate', 73, 65);
    user.jupiter();
    expect(user.jupiterLife()).toBeCloseTo((8/11.86), 1);
  });


});



