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
    expect(user.venusAge).toEqual(48.38)
  });

});



