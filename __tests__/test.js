import Calculator from './../src/business.js'

describe ('Calculator', () => {
  test('Should create new user object with name and age', () => {
    const user = new Calculator ('Kate', 30);
    expect(user.name).toEqual('Kate');
    expect(user.age).toEqual(30);
  });

  test('Should calculate user age in Mercury years', () => {
    const user = new Calculator ('Kate', 30);
    expect(user.mercuryAge).toEqual(125);
  });
  test('Should calculate user age in Venus years',() => {
    const user = new Calculator ('Kate' , 30);
    expect(user.venusAge).toBeCloseTo(48.38, 1);  //Use toBeCloseTo to compare floating point numbers for approximate equality.
  });
  test('Should calculate user age in Mars years', () => {
    const user = new Calculator ('Kate' , 30);
    expect(user.marsAge).toBeCloseTo((30/1.88), 1); 
  });
  test('Should calculate user age in Jupiter years', () => {
    const user = new Calculator ('Kate' , 30);
    expect(user.jupiterAge).toBeCloseTo((30/11.86), 1)
  });
  test('Should calculate how many years of user life has left based on their life expectancy on Earth', () => {
    const user = new Calculator ('Kate' , 30 , 80);
    expect(user.earthLeft).toEqual(50);
  });
  test('Should return years of user life that has already surpassed the average life expectancy', () => {
    const user = new Calculator ('Kate', 50, 40);
    expect(user.earthBeyond).toEqual(10);
  });
  test('Should return life on earth left if expectancy years is more then age otherwise return lifeBeyond', () => {
    const user1 = new Calculator ('Kate', 50, 80);
    const user2 = new Calculator ('Kate', 65, 60);
    expect(user1.earthLife()).toEqual(30);
    expect(user2.earthLife()).toEqual(5);
  });
});



